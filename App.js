import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { COLORS, icons } from './constants';
import { Image } from 'react-native';
import { dynamicSize } from './utils/dimension.style';
import NoInternetModal from './constants/NoInternetMessage';
import NetInfo from '@react-native-community/netinfo'
import { MenuProvider } from 'react-native-popup-menu';
import TopTabScreen from './Screens/AddExpense.js/SplitExpense.js/TopTabAllScreen';

const { store, persistor } = configureStore();
const App = () => {
  const [isOffline, setOfflineStatus] = useState(false);
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
  }, [isOffline])
  return (
    <ToastProvider
      successColor={COLORS.black}
      dangerColor={COLORS.black}
      warningColor={COLORS.black}
      normalColor={COLORS.black}
      offset={50}
      offsetTop={30}
      offsetBottom={40}
      warningIcon={
        <Image
          resizeMode="contain"
          source={icons.toast_info}
          style={{
            width: dynamicSize(15),
            height: dynamicSize(15),
            alignSelf: 'center',
          }}
        />
      }
      dangerIcon={
        <Image
          resizeMode="contain"
          source={icons.toast_error}
          style={{
            width: dynamicSize(15),
            height: dynamicSize(15),
            alignSelf: 'center',
          }}
        />
      }
      successIcon={
        <Image
          resizeMode="contain"
          source={icons.toast_success}
          style={{
            width: dynamicSize(18),
            height: dynamicSize(18),
            alignSelf: 'center',
          }}
        />
      }>
      <MenuProvider>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RootNavigator />
              {/* <TopTabScreen/> */}
              <NoInternetModal show={isOffline} />
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </MenuProvider>
    </ToastProvider>
  );
};
export default App;
