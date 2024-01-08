import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { dynamicSize } from '../utils/dimension.style';
import { COLORS, images, icons } from '../constants'
import MainScreen from '../Screens/dashboard.js/dashbaordScreen';
import Group from '../Screens/Group/Group';
import TopTabScreen from '../Screens/AddExpense.js/SplitExpense.js/TopTabAllScreen';


function HeaderLeft() {
  return (
    <View style={styles.logo}>
      <Image
        style={{ width: '120%', height: '100%' }}
        source={images.eliteSuiteLogo}
      />
    </View>
  );
}

const HomeNavigator = ({ navigation }) => {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: COLORS.white,height: 250 }, }}>

      <Stack.Screen
        name='Groups'
        component={Group}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name='DashBoard'
        component={MainScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          title: '',
          headerStyle: {
            backgroundColor: COLORS.red,
          },
        }}
      />
        <Stack.Screen
        name='TopTabScreen'
        component={TopTabScreen}
        option={{headerStyle: {height: 250}}}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          title: '',
          headerStyle: {
            backgroundColor: COLORS.gray,
            height: 250
          },
        }}
      />

    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  iconView: {
    top: dynamicSize(10),
  },
  logo: {
    width: dynamicSize(50),
    height: dynamicSize(20),
    position: 'absolute',
    marginTop: dynamicSize(15),
    left: dynamicSize(5),
  },
});
export default HomeNavigator;
