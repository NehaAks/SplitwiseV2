import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS } from '../constants';
import { dynamicSize } from '../utils/dimension.style';

const PrimaryButtonWithImage = ({
    style,
    onPress,
    buttonSize,
    buttonText,
    imageStyle,
    source,
    children,
    source2,
    disabled = false
}) => {
    return (
        <View style={style}>
            <TouchableOpacity disabled={disabled} style={[styles.button, buttonSize]} onPress={onPress}>
                {
                    source2 ? (<Image resizeMode='contain' source={source2} style={imageStyle} />) : null
                }
                <Text style={[styles.text, buttonText]}>{children}</Text>
                {
                    source ? (<Image resizeMode='contain' source={source} style={imageStyle} />) : null
                }
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: dynamicSize(40),
        backgroundColor:COLORS.primary5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: dynamicSize(35),
        flexDirection: 'row'
    },
    text: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: dynamicSize(14),
        lineHeight: dynamicSize(16)
    }
})
export default PrimaryButtonWithImage