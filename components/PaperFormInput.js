import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { COLORS } from '../constants';
import { dynamicSize } from '../utils/dimension.style';

const PaperFormInput = ({
    source,
    color,
    style,
    size,
    mode,
    placeholder,
    editable = "true",
    value = "",
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    maxLength,
    label,
    theme,
    iconStyle,
    multiline,
    onChange
}) => {
    return (
        <View>
            <TextInput
                mode={mode}
                editable={editable}
                value={value}
                keyboardType={keyboardType}
                autoCompleteType={autoCompleteType}
                autoCapitalize={autoCapitalize}
                maxLength={maxLength}
                label={label}
                multiline={multiline}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={[styles.textInputStyle, style]}
                theme={theme}
                left={
                    <TextInput.Icon
                        icon={source}
                        style={iconStyle}
                        color={color}
                        size={size}
                    />
                }
                onChangeText={(value) => onChange(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: '100%',
        height: dynamicSize(40),
    }

})

export default PaperFormInput;