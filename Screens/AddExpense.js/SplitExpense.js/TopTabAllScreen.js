import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EqualExpense from './EqualExpense';
import UnequalExpense from './Unequal';
import Percentage from './percentage';
import { COLORS, icons } from '../../../constants';
import { dynamicSize } from '../../../utils/dimension.style';
import { useSelector } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

export default function TopTabScreen({ closeModal, amount }) {

    return (
        <>
            <View style={Styles.header}>
                <View style={{ width: '85%', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => closeModal(false)} >
                        <Image
                            resizeMode="contain"
                            source={icons.backArrow}
                            style={{ width: dynamicSize(35), height: dynamicSize(35), tintColor: 'black' }}

                        />
                    </TouchableOpacity>
                    <Text style={[Styles.headerText, { left: dynamicSize(50) }]}>Adjust split</Text>
                </View>
                <TouchableOpacity onPress={() => closeModal(false)}>
                    <Image source={icons.tick} style={{ height: 25, width: 25, left: 20 }} />
                </TouchableOpacity>
            </View>
            <NavigationContainer independent={true}>
                <Tab.Navigator >
                    <Tab.Screen
                        initialParams={{ amount: amount }}
                        name="Equally"
                        component={EqualExpense} />
                    <Tab.Screen
                        initialParams={{ amount: amount }}
                        name="Unequally"
                        component={UnequalExpense} />
                    <Tab.Screen
                        initialParams={{ amount: amount }}
                        name="By percentage"
                        component={Percentage} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: dynamicSize(80),
        // justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: dynamicSize(10),
        borderBottomWidth: dynamicSize(2),
        borderColor: COLORS.gray4
    },
    headerText: {
        fontSize: dynamicSize(24),
        fontWeight: '500',
        color: COLORS.black,
    },
})