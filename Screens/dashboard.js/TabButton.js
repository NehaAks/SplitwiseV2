
import React from "react";
import { View,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button2 from "../../components/Button";
import { COLORS } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";

const TabButton = ({settleBtn,balanceBtn,totalBtn}) => {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={Styles.scroll}>
                <Button2
                    onPress={settleBtn}
                    buttonSize={Styles.btn}
                    children={'Settle up'}
                    buttonText={Styles.btnTxt}
                />

                <Button2
                    onPress={balanceBtn}
                    buttonSize={Styles.btn}
                    children={'Balances'}
                    buttonText={Styles.btnTxt}
                />

                <Button2
                    onPress={totalBtn}
                    buttonSize={Styles.btn}
                    children={'Total'}
                    buttonText={Styles.btnTxt}
                />
            </ScrollView>
        </View>
    )
}
export default TabButton;
const Styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.white,
        borderColor:COLORS.gray4,
        borderBottomWidth:dynamicSize(2),
        borderWidth:dynamicSize(1),
        height:dynamicSize (40),
        width: dynamicSize(110),
        alignSelf: 'center',
        bottom: dynamicSize(20),
        shadowColor: 'gray',
        shadowOffset: { width: 5, height: 10 },
        shadowRadius: 6,
        shadowOpacity: 0.30,
        elevation: 2,
        borderRadius: dynamicSize(5),
        marginHorizontal: dynamicSize (5),
        marginTop: dynamicSize (40),
        alignSelf: 'center',
        justifyContent: 'space-around',
   
    },
    btnTxt: {
        color: COLORS.color4,
        fontSize: dynamicSize(16),
        bottom: dynamicSize(3)
    },
    scroll: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: dynamicSize(10)
    }
})