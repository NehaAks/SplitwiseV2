import axios from 'axios';
import {storage} from '../storage';
import {BASE_URL, GET_NEW_ACCESS_TOKEN} from '../api/endpoints';
import configureStore from '../redux/store';
import { logoutUser, TYPES } from '../redux/actions/authAction';

// export const instance = axios.create({
//   baseURL: BASE_URL,
// });

  axios.interceptors.request.use(
    async config => {
      const token = await storage.getItem('token');
      if (token !== null) {
        // console.log(`API request ${token}`);
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        // console.log('Unauthorized');
        const {store} = configureStore();
        // store.dispatch(logoutUser())
        originalRequest._retry = true;
        const refreshToken = await storage.getItem('refreshToken');

        return axios
          .post(GET_NEW_ACCESS_TOKEN, {refresh_token: refreshToken})
          .then(res => {
            if (res.status === 200) {
              const response = res.data;
              // console.log(`401 re call API response ${response.data.access_token}`);
              store.dispatch({type: TYPES.RE_FETCH_API_TOKEN_SUCCESS, payload: response});
              storage.setItem('token',response.data.access_token);
              originalRequest.headers[
                'Authorization'
              ] = `Bearer ${response.data.access_token}`;
              return axios(originalRequest);
            }
          });
      }
      return Promise.reject(error);
    },
  );
