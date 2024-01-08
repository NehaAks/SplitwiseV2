import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import { icons } from '../constants'

const TouchableLink = ({
    children,
    style,
    textStyle,
    onPress
}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text
                style={textStyle}
            >{children}</Text>
        </TouchableOpacity>
    )
}

export default TouchableLink