import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, ScrollView, Image, TouchableOpacity } from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Button2 from "../../components/Button";
import { COLORS, icons } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";
import ItemInput from "./ItemInput";
import SplitEqually from "./splitEqually";

const AddExpenseModal = ({ closeModal, sendExpense ,updateApi,Update,navigation}) => {
    const [formData, setFormData] = useState({
        description: '',
        expense: ''
    })
    const { description, expense } = formData
    function handleChangeText(value, label) {
        setFormData({ ...formData, [label]: value })
 
    }

    function AddExpenses() {
        description?.trim() != '' && expense?.trim() != '' && closeModal(false)
        description?.trim() != '' && expense?.trim() != '' && sendExpense(formData)
        Update(!updateApi)
    }
    // console.log('description', formData)
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => closeModal(false)}>
                    <Image
                        resizeMode="contain"
                        source={icons.backArrow}
                        style={{ width: dynamicSize(35), height: dynamicSize(35),tintColor:'black' }}
                        
                    />
                </TouchableOpacity>
                <Text style={[Styles.headerText, { left: dynamicSize(50) }]}>Add Expense</Text>
            </View>

            <View style={Styles.bottomContainer}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, }}>
                    <View style={{ height: dynamicSize(70), justifyContent: 'center' }}>
                        <Text style={[Styles.headerText, { fontSize: dynamicSize(24), color: COLORS.color4 }]}>
                            With you and: All of Room
                        </Text>
                    </View>
                    <ItemInput
                        description={description}
                        expense={expense}
                        handleChangeText={(value, text) => handleChangeText(value, text)}
                    />
                    <SplitEqually
                        onPress={() => Alert.alert('hello')}
                        onPress2={() => Alert.alert('ram')}
                        navigation={navigation}
                        amount={expense}
                    />
                    <Button2
                        onPress={AddExpenses}
                        buttonSize={Styles.btn}
                        children={'Add'}
                        buttonText={{ color: COLORS.white, fontSize: dynamicSize(24), bottom: 3 }}
                    />

                </ScrollView>
            </View>


        </View>
    )
}
export default AddExpenseModal;

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.color1
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: dynamicSize(80),
        // justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: dynamicSize(10),
        borderBottomWidth:dynamicSize(2),
        borderColor:COLORS.gray4 
    },
    headerText: {
        fontSize: dynamicSize(24),
        fontWeight: '500',
        color: COLORS.black,
    },
    bottomContainer: {
        flex: 1,
        paddingHorizontal: dynamicSize(20),
        // backgroundColor: 'yellow'

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
        top: 30,
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