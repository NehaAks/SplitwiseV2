import React, { useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Value } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { COLORS, icons } from "../../../constants";
import { dynamicSize } from "../../../utils/dimension.style";
import RecordPayment from "./recordPayment";
const SettleUp = ({ closeModal }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [sendId, setSendId] = useState()

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
                <Text style={[Styles.headerText, { left: dynamicSize(40) }]}>Select a balance to settle</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                {GroupInformation?.group?.members.map(data => {
                    // console.log('dadat2.0', data)
                    return (
                        <>
                            {data?.balance.map(blnc => {
                                // console.log('blnc,', blnc)
                                return (
                                    <>
                                        {data?.id != 63507246 && (
                                            <TouchableOpacity
                                                onPress={() => [setIsVisible(true), setSendId(data.id)]}
                                                style={{ marginBottom: 20, flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%', paddingHorizontal: 10 }}>
                                                    <Image
                                                        source={{ uri: data?.picture.large }}
                                                        style={{ height: 50, width: 50, borderRadius: 33, }}
                                                    />
                                                    <Text style={{ left: 10 }}>{data?.first_name}</Text>
                                                </View>
                                                <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: '30%', paddingHorizontal: 20 }}>
                                                    <Text style={blnc.amount < 0 ? { color: COLORS.green_success } : { color: COLORS.red }}>{blnc?.amount < 0 ? 'you owe' : 'owes you'}</Text>
                                                    <Text style={blnc.amount < 0 ? { color: COLORS.green_success } : { color: COLORS.red }}>
                                                        {" " + `\u20B9`}{blnc.amount < 0 ? blnc.amount * (-1) : blnc.amount}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                    </>
                                )
                            })}
                        </>
                    )
                })}
                <Modal
                    visible={isVisible}
                    animationType="slide"
                    transparent={false}
                    onRequestClose={() => setIsVisible(false)}
                >
                    <RecordPayment
                        sendId={sendId}
                        closeModal2={(value) => setIsVisible(value)}
                    />
                </Modal>
            </ScrollView>
        </View>
    )
}
export default SettleUp;

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