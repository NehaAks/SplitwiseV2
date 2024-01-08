import React, { useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { COLORS, icons } from "../../../constants";
import { dynamicSize } from "../../../utils/dimension.style";
const Total = ({ closeModal }) => {
    const GroupInformation = useSelector(state => state.GetGroupInformationReducer?.userData)
    return (
        <View style={{ flex: 1, }}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => closeModal(false)}>
                    <Image
                        resizeMode="contain"
                        source={icons.close}
                        style={{ width: dynamicSize(35), height: dynamicSize(35), tintColor: 'black' }}
                    />
                </TouchableOpacity>
                <Text style={[Styles.headerText, { left: dynamicSize(40) }]}>Total</Text>
            </View>
           <ScrollView>

           </ScrollView>
        </View>
    )
}
export default Total;

const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: dynamicSize(80),
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: COLORS.gray4,
        paddingHorizontal: dynamicSize(10),
    },
    headerText: {
        fontSize: dynamicSize(24),
        fontWeight: '500',
        color: COLORS.black,
    }
})