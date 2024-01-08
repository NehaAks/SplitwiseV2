import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import { icons } from '../constants'

const TouchableOpacityWithImage = ({
    source,
    children,
    style,
    textStyle,
    imageStyle,
    onPress
}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <Image
                    source={source}
                    resizeMode='contain'
                    style={imageStyle}
                />
                <Text
                    style={textStyle}
                >{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TouchableOpacityWithImage