import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants'
import { dynamicSize } from '../utils/dimension.style';

const IconShow = ({ children, icons, style, iconView, onPress,iconColor }) => {
    return (
        <>
            <TouchableOpacity style={iconView} onPress={onPress}>
                <Image resizeMode='contain' style={[styles.iconSize,iconColor]} source={icons} />
                <Text style={[styles.cardIconText, style]}>{children}</Text>
            </TouchableOpacity>
        </>
    );
}
const styles = StyleSheet.create({
    cardIconText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: dynamicSize(12),
        lineHeight: dynamicSize(14),
        color: COLORS.black1,
        opacity: 1,
        marginTop: dynamicSize(5),
        
    },
    iconSize: {
        width: dynamicSize(30),
        height: dynamicSize(30)
    }
})
export default IconShow;