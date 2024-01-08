import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { dynamicSize } from '../utils/dimension.style';
import { COLORS, images, icons } from '../constants'
import Login from '../Screens/Auth/Login';
import CreateAccount from '../Screens/Auth/CreateAccount'

const AuthNavigator = ({ navigation }) => {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: COLORS.white } }}>

      <Stack.Screen
        name='login'
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='createAccount'
        component={CreateAccount}
        options={{
          headerShown: false
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
export default AuthNavigator;
