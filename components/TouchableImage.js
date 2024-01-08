import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants'

const TouchableImage = ({
    style,
    source,
    onPress,
    imageStyle
}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Image
                source={source}
                resizeMode='contain'
                style={imageStyle}
            />
        </TouchableOpacity>
    )
}

export default TouchableImage