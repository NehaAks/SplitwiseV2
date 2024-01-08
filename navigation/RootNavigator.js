import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../constants';
import AuthNavigator from './AuthNavigator';
import BottomTabsNavigator from './BottomTabsNavigator';
import HomeNavigator from './HomeNavigator';
// import BottomTabsNavigator from './BottomTabsNavigator';

const RootNavigator = () => {
  const token = useSelector(state => state.authReducer.accessToken);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
      <BottomTabsNavigator/>
     {/* {token!=null&& token!=undefined? <BottomTabsNavigator/>:<AuthNavigator/>} */}
    </View>
  );
};
export default RootNavigator;
