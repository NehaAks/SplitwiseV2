import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
    Image
} from 'react-native';

import { FONTS, SIZES, COLORS, icons } from '../constants'
import { dynamicSize } from '../utils/dimension.style';

const FormInput = ({
    containerStyle,
    editable = "true",
    placeholder,
    inputStyle,
    value = "",
    source,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    maxLength,
    label,
    multiline,
    placeholderTextColor,
    contextMenuHidden = false,
    imageStyle,
    numberOfLines,
    onSubmitEditing,
    underlineColorAndroid
    
}) => {
    return (
        <View style={containerStyle}>
            <TextInput
                style={[styles.textInput, inputStyle]}
                value={value}
                editable={editable}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray20}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCompleteType={autoCompleteType}
                contextMenuHidden={contextMenuHidden}
                autoCapitalize={autoCapitalize}
                maxLength={maxLength}
                numberOfLines={numberOfLines}
                underlineColorAndroid={underlineColorAndroid}
                multiline={multiline}
                onChangeText={(value) => onChange(value, label)}
                onSubmitEditing={onSubmitEditing}
            />
            <View style={[{
                position: 'absolute',
                right: 0,
                left: dynamicSize(13),
                top: dynamicSize(0),
            },imageStyle]}>
                <Image
                    source={source}
                    style={{
                        width: dynamicSize(18),
                        height: dynamicSize(18),

                    }}
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        fontWeight: '400',
        fontSize: dynamicSize(14),
        paddingLeft: dynamicSize(10),
        height: dynamicSize(45),
        color: COLORS.black,
        paddingLeft:dynamicSize(40)
    }
})
export default FormInput;
