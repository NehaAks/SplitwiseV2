import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { dynamicSize } from '../utils/dimension.style';

const Title = ({children,style}) =>
{
    return(
        <View>
            <Text style={[styles.text,style]}>{children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: dynamicSize(22),
        lineHeight: dynamicSize(23),
        color: '#000000',
        textAlign:'center'
    }
})
export default Title;