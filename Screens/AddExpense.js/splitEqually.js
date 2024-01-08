import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, } from "react-native";
import Button2 from "../../components/Button";
import { COLORS } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";
import PaidBy from "./paidBy";
import TopTabScreen from "./SplitExpense.js/TopTabAllScreen";

const SplitEqually = ({ onPress, onPress2,navigation,amount }) => {
    const [isVisible,setIsVisible]=useState(false)
    const [isVisible2,setIsVisible2]=useState(false)
    return (
        <View style={Styles.container}>
            <Text style={[Styles.headerText, { fontSize: dynamicSize(24), color: COLORS.color4 }]}>
                Paid by
            </Text>
            <Button2 onPress={()=>setIsVisible2(true)}
                buttonSize={Styles.btn}
                children={'you'}
                buttonText={Styles.btnTxt}
            />
             <Modal
                    visible={isVisible2}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setIsVisible2(false)}
                >
                   <PaidBy
                   closeModal={(value)=>setIsVisible2(value)}
                   />
                </Modal>
            <Text style={[Styles.headerText, { fontSize: dynamicSize(24), color: COLORS.color4 }]}>
                {"  " + " " + 'and split'}
            </Text>
            <Button2 onPress={()=>setIsVisible(true)}
                buttonSize={Styles.btn}
                children={'equally'}
                buttonText={{ color: COLORS.color4, fontSize: dynamicSize(24), bottom:dynamicSize (3) }}
            />
              <Modal
                    visible={isVisible}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setIsVisible(false)}
                >
                    <TopTabScreen 
                        closeModal={(value)=>setIsVisible(value)}
                        amount={amount}
                    />
                </Modal>
        </View>
    )
}
export default SplitEqually;

const Styles = StyleSheet.create({
    container: {
        height:dynamicSize (70),
        alignItems: 'center',
        flexDirection: 'row',
        top:dynamicSize(15)
    },
    headerText: {
        fontSize: dynamicSize(28),
        fontWeight: '500',
        color: COLORS.white
    },
    btn: {
        backgroundColor: COLORS.color1,
        borderWidth: 1,
        height:dynamicSize (40),
        width: '100%',
        marginHorizontal:dynamicSize (5), 
        shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.10,
    elevation: 10,
    },
    btnTxt: {
        color: COLORS.color4,
        fontSize: dynamicSize(24),
        bottom:dynamicSize (3),
    }
})