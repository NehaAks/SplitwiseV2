import React from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { icons, images } from '../constants';
import { dynamicSize } from '../utils/dimension.style';

const Header = ({
    source,
    onPress,
    imageStyle
}) => {
    return (
        <View style={{backgroundColor:'red'}}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={icons.leftArrow}
                    resizeMode='contain'
                    style={{
                        width: dynamicSize(30),
                        height: dynamicSize(30),
                        alignSelf: 'flex-start',
                        margin: dynamicSize(20),
                        marginBottom: 0,
                        marginTop: dynamicSize(30)

                    }}
                />
            </TouchableOpacity>
            <Image
                source={source}
                resizeMode='contain'
                style={[{
                    width: dynamicSize(315),
                    height: dynamicSize(159),
                    alignSelf: 'center',
                    marginTop: dynamicSize(-25)
                },imageStyle]}
            />
        </View>
    )
}
export default Header