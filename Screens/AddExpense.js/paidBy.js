import React, { useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { COLORS, icons } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";
const PaidBy = ({ closeModal }) => {
    const [isSelected, setIsSelected] = useState([])
    console.log('is', isSelected)

    const GroupInformation = useSelector(state => state.GetGroupInformationReducer?.userData)
    function Alluser(value) {
        if (isSelected?.includes(value)) {
            setIsSelected(item => item.filter(item => item !== value))
        }
        else {
            setIsSelected(prev => [value, ...prev])
        }
    }
    return (
        <View style={{ flex: 1, }}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => closeModal(false)}>
                    <Image
                        resizeMode="contain"
                        source={icons.backArrow}
                        style={{ width: dynamicSize(35), height: dynamicSize(35), tintColor: 'black' }}

                    />
                </TouchableOpacity>
                <Text style={[Styles.headerText, { left: dynamicSize(50) }]}>Who paid?</Text>
            </View>
            <ScrollView>
                {
                    GroupInformation?.group?.members.map(mem => {
                        console.log('image',)
                        return (

                            <TouchableOpacity onPress={() => Alluser(mem?.id)}
                                style={{
                                    height: 60, width: '100%', flexDirection: 'row',
                                    alignItems: 'center', paddingHorizontal: 10,
                                }}>
                                <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center' }}>
                                    <Image
                                        source={{ uri: mem?.picture?.large }}
                                        style={{ height: 40, width: 40, borderRadius: 20, }}
                                    />
                                    <Text style={{ marginLeft: 10 }}>{mem?.first_name + " " + mem?.last_name}</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: '20%', height: 40 }}>
                                    {isSelected?.includes(mem?.id) && <Image
                                        source={icons.tick}
                                        style={{ height: 25, width: 25, borderRadius: 20, }}
                                    />}
                                </View>

                            </TouchableOpacity>


                        )
                    })
                }
            </ScrollView>

        </View>
    )
}
export default PaidBy;

const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: dynamicSize(80),
        // justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: dynamicSize(10),
        borderBottomWidth: dynamicSize(2),
        borderColor: COLORS.gray4
    },
    headerText: {
        fontSize: dynamicSize(24),
        fontWeight: '500',
        color: COLORS.black,
    }
})