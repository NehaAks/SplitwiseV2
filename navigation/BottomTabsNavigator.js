import React from 'react';
import { Image, Text, Platform, StyleSheet } from 'react-native';
import { COLORS, icons } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { dynamicSize } from '../utils/dimension.style';;
import Group from '../Screens/Group/Group';
import Friends from '../Screens/Friends/Friends';
import Activity from '../Screens/Activity/Activity';
import Account from '../Screens/Account/Account';
import HomeNavigator from './HomeNavigator';

const BottomTabsNavigator = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      //   tabBarOptions={{
      //     activeTintColor: 'white',
      //     inactiveTintColor:'gray'',
      //     activeBackgroundC'gray'',
      //     inactiveBackgroundColor:"#ffffff",
      //         style: {
      //               backgroundColor: '#CE4418',
      //               paddingBottom: 3
      //         }
      //  }}
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   height: dynamicSize(80),
        //   backgroundColor: "#ffffff"
        // },

        tabBarStyle: {
          ...Platform.select({
            ios: {
              height: dynamicSize(50),
            },
            android: {
              height: dynamicSize(60),
            },
          }),
          backgroundColor: "#ffffff"
        },
        tabBarLabelStyle: { bottom: dynamicSize(5) },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Group"
        component={HomeNavigator}
        options={{
          headerTitle: '',
          headerShown: false,

          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: dynamicSize(11),
                  fontWeight: '700',
                  marginBottom: dynamicSize(5),
                  color: focused ? COLORS.color4 : 'gray',
                }}>
                {'Groups'}
              </Text>
            );
          },
          tabBarIcon: ({ color, focused }) => (
            <Image
              resizeMode='contain'
              style={{
                marginTop: dynamicSize(15),
                width: dynamicSize(30),
                height: dynamicSize(30),
                tintColor: focused && COLORS.color4
                
              }}
              source={icons.group}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friend"
        component={Friends}
        options={{
          headerTitle: '',
          headerShown: false,

          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: dynamicSize(11),
                  fontWeight: '700',
                  marginBottom: dynamicSize(5),
                  color: focused ? COLORS.color4 : 'gray',
                }}>
                {'Friend'}
              </Text>
            );
          },
          tabBarIcon: ({ color,focused}) => (
            <Image
              style={{
                marginTop: dynamicSize(5),
                width: dynamicSize(27),
                height: dynamicSize(27),
                tintColor: focused && COLORS.color4
              }}
              resizeMode="contain"
              source={icons.friend}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          headerTitle: '',
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: dynamicSize(11),
                  fontWeight: '700',
                  marginBottom: dynamicSize(5),
                  color: focused ? COLORS.color4 : 'gray',
                }}>
                {'Activity'}
              </Text>
            );
          },
          tabBarIcon: ({ color,focused }) => (
            <Image
              style={{
                marginTop: dynamicSize(5),
                width: dynamicSize(27),
                height: dynamicSize(27),
                tintColor: focused && COLORS.color4
              }}
              resizeMode="contain"
              source={icons.list}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerTitle: '',
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: dynamicSize(11),
                  fontWeight: '700',
                  marginBottom: dynamicSize(5),
                  color: focused ? COLORS.color4 : 'gray',
                }}>
                {'Account'}
              </Text>
            );
          },
          tabBarIcon: ({ color,focused }) => (
            <Image
              style={{
                marginTop: dynamicSize(5),
                width: dynamicSize(27),
                height: dynamicSize(27),
                tintColor: focused && COLORS.color4
              }}
              source={icons.userAvtar}
              resizeMode="contain"
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconView: {
    top: dynamicSize(5),
  },
});

export default BottomTabsNavigator;
