import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { COLORS, icons, images } from "../constants";
import { dynamicSize } from "../utils/dimension.style";

const UserCard = ({ CardViewStyle, source, rightSideIcon, profileStyle, userName, profile, onPress }) => {
    return (
        <View style={[Styles.mainView, CardViewStyle]}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={onPress}>
                    <Image resizeMode="contain"
                        source={source}
                        style={[Styles.drawerMenuIcon, rightSideIcon]}
                    />
                </TouchableOpacity>
                <View style={{ marginLeft: 20, width: '74%' }}>
                    <Text numberOfLines={1} style={Styles.userName}>{userName}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Image resizeMode="contain"
                    source={profile}
                    style={[Styles.profile, profileStyle]}
                />
            </TouchableOpacity>
        </View>
    )
}
export default UserCard;

const Styles = StyleSheet.create({
    mainView: {
        backgroundColor: COLORS.blue,
        width: '100%',
        height: '10%',
        paddingHorizontal: dynamicSize(20),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    drawerMenuIcon: {
        width: dynamicSize(30),
        height: dynamicSize(30)
    },
    userName: {
        fontSize: dynamicSize(20),
        color: COLORS.white
    },
    profile: {
        width: dynamicSize(40),
        height: dynamicSize(40),
    }
})