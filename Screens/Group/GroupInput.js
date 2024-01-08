import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, ScrollView, Image, TouchableOpacity } from "react-native";
import Button2 from "../../components/Button";
import FormInput from "../../components/FormInput";
import { COLORS, icons } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";

const GroupInput = ({ closeModal, GroupNameFunc, }) => {
    const [groupName, setGroupName] = useState()
    function handleChange() {
        groupName != null && groupName != undefined && groupName != "" && closeModal(false)
        groupName != null && groupName != undefined && groupName != "" && GroupNameFunc(groupName)

    }
    // function close() {
    // }
    return (
        <ScrollView style={Styles.mainContainer}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => closeModal(false)}>
                    <Image
                        resizeMode="contain"
                        source={icons.close}
                        style={{ width: dynamicSize(30), height: dynamicSize(30),tintColor:'black' }}
                    />
                </TouchableOpacity>
                <Text style={[Styles.headerText, { left: dynamicSize(40) }]}>Create a group</Text>
            </View>

            <View style={Styles.bottomContainer}>

                <View style={Styles.groupInput}>
                    <TouchableOpacity style={{ width: '20%', borderWidth: 1, borderRadius: 12, color: COLORS.gray10, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            resizeMode="contain"
                            source={icons.dropdown2} />
                    </TouchableOpacity>
                    <View style={{ width: '80%', paddingHorizontal: dynamicSize(20) }}>
                        <Text style={{ color: COLORS.color4, fontWeight: 'bold', fontSize: dynamicSize(16) }}>Group name</Text>
                        <FormInput
                            editable={true}
                            inputStyle={{ paddingLeft: 0, borderBottomWidth: dynamicSize(1), fontSize: dynamicSize(16) }}
                            placeholder={'Enter group name'}
                            value={groupName}
                            onChange={(value) => setGroupName(value)}

                        />
                    </View>
                </View>
                <Button2
                    onPress={handleChange}
                    buttonSize={Styles.btn}
                    children={'Save'}
                    buttonText={{ color: COLORS.white, fontSize: dynamicSize(24), bottom: 3 }}
                />


            </View>

        </ScrollView>
    )
}
export default GroupInput;

const Styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        // flex: 1,
        backgroundColor: COLORS.color1,
        // backgroundColor:'red',
        paddingBottom: dynamicSize(40)
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderBottomColor:COLORS.gray4,
        borderBottomWidth:2,
        height: dynamicSize(80),
        // justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: dynamicSize(20)
    },
    headerText: {
        fontSize: dynamicSize(24),
        fontWeight: '500',
        color: COLORS.black,
    },
    bottomContainer: {
        flex: 1,
        paddingHorizontal: dynamicSize(20),
        paddingVertical: dynamicSize(40),
        paddingBottom: dynamicSize(80),
        // backgroundColor: 'yellow',

    },
    groupInput: {
        height: dynamicSize(70),
        width: '100%',
        // borderWidth: dynamicSize(1),
        flexDirection: 'row'
    },
    containerStyle: {
        width: '70%',
        top: dynamicSize(25),
        height: dynamicSize(45),
        borderBottomWidth: dynamicSize(3),
        borderColor: COLORS.gray,
        marginLeft: 20,
        // borderRadius: dynamicSize(20),
        justifyContent: 'center'
    },
    input: {
        paddingLeft: 0,
        fontSize: dynamicSize(24),
        fontWeight: '500'
    },
    btn: {
        backgroundColor: COLORS.color4,
        // borderWidth: 1,
        height: 70,
        width: '30%',
        marginHorizontal: 5,
        alignSelf: 'center',
        top: dynamicSize(40),
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.10,
        elevation: 2,
        // backgroundColor: 'white',
        marginBottom: 5,
        borderRadius: dynamicSize(12)
    },
})