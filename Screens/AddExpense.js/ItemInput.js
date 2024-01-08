import React from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import FormInput from "../../components/FormInput";
import { COLORS, icons } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";

const ItemInput = ({description,handleChangeText,handleChangeExpense,expense}) => {
    return (
        <View style={Styles.mainContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center',   }}>
                <View style={{ height: 50, width: 50}}>
                    <TouchableOpacity onPress={() => Alert.alert('hiii')}>
                        <Image
                            resizeMode="contain"
                            source={icons.activity}
                            style={{ height: 50, width: 50}}
                        />
                    </TouchableOpacity>
                </View>
                <FormInput
                    editable={true}
                    placeholder="Enter a Description"
                    containerStyle={Styles.containerStyle}
                    inputStyle={Styles.input}
                    keyboardType="default"
                    autoCompleteType="off"
                    autoCapitalize="none"
                    maxLength={50}
                    value={description}
                    multiline={false}
                    onChange={(value) => handleChangeText(value, 'description')}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center',  }}>
                <View style={{ height: 50, width: 50, }}>
                    <TouchableOpacity onPress={() => Alert.alert('hiii')}>
                        <Image
                            resizeMode="contain"
                            source={icons.rupee}
                            style={{ height: 50, width: 50, }}
                        />
                    </TouchableOpacity>
                </View>
                <FormInput
                    editable={true}
                    placeholder="0.00"
                    containerStyle={Styles.containerStyle}
                    inputStyle={Styles.input}
                    keyboardType="numeric"
                    autoCompleteType="off"
                    autoCapitalize="none"
                    maxLength={50}
                    value={expense}
                    multiline={false}
                onChange={(value) => handleChangeText(value, 'expense')}
                />
            </View>
        </View>

    )
}
export default ItemInput;

const Styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: 'pink',
        height: dynamicSize(130),
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column',
        justifyContent: 'space-between'

    },

    containerStyle: {
        width: '60%',
        // top: dynamicSize(25),
        height: dynamicSize(45),
        borderBottomWidth: dynamicSize(1),
        borderColor: COLORS.gray,
        marginLeft: 20,
        // borderRadius: dynamicSize(20),
        justifyContent: 'center'
    },
    input: {
        paddingLeft: 0,
        fontSize: dynamicSize(24),
        fontWeight: '500'
    }
})