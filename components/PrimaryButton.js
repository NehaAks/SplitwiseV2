import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { COLORS } from '../constants';
import { dynamicSize } from '../utils/dimension.style';

const PrimaryButton = ({children,style,onPress,buttonSize,buttonText,disabled=false}) =>
{
    return(
        <View style={style}>
            <TouchableOpacity disabled={disabled} style={[styles.button,buttonSize]} onPress={onPress}>
                <Text style={[styles.text,buttonText]}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        width:'100%',
        height:dynamicSize(55.72),
        backgroundColor:COLORS.primary3,
        justifyContent:'center',
        borderRadius:dynamicSize(35)
    },
    text:{
        color:COLORS.white,
        textAlign:'center',
        fontWeight:'500',
        fontSize:dynamicSize(14),
        lineHeight:dynamicSize(16)
    }
})
export default PrimaryButton