import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, icons } from "../../../constants";
import constants from "../../../constants/constants";
import { GetUserDetailAction, GetUserToAction } from "../../../redux/actions/getUserDetailAction";
import { dynamicSize } from "../../../utils/dimension.style";
const RecordPayment = ({ closeModal2, sendId }) => {
    const GroupInformation = useSelector(state => state.GetGroupInformationReducer?.userData)
    const userDetail = useSelector(state => state.GetUserDetailReducer?.userData)
    const userDetail2 = useSelector(state => state.GetUserDetailReducer?.userData2)
    // console.log('klll', userDetail2)
    const dataArr = GroupInformation?.group?.simplified_debts
    const dispatch = useDispatch()

    const [storeValue, setStoreValue] = useState([])
    console.log(storeValue)
    const [amount, setAmount] = useState()
    const [userId, setUserId] = useState()
    useEffect(() => {
        record()
    }, [])

    function record() {
        const arr = []
        for (var i = 0; i < GroupInformation?.group?.simplified_debts.length; i++) {
            if (sendId == dataArr[i].from) {
                // console.log(sendId)
                // console.log(dataArr[i].from)
                arr.push(dataArr[i])
                // console.log(arr)
            }
        }
        setStoreValue(arr)
    }
    {
        storeValue.map(data => {
            // setAmount(data.amount)
            userData(data)
            // console.log(data)
            // console.log(data.amount)
            // setAmount(data.amount)
        })
    }

    function userData(data) {
        // console.log('hiiii')
        // console.log(constants.Header, data.from)
        dispatch(GetUserDetailAction({ Id: data?.from, header: constants.Header }))
        dispatch(GetUserToAction({ Id: data?.to, header: constants.Header }))
    }
    return (
        <View style={{ flex: 1, }}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => closeModal2(false)}>
                    <Image
                        resizeMode="contain"
                        source={icons.close}
                        style={{ width: dynamicSize(35), height: dynamicSize(35), tintColor: 'black' }}
                    />
                </TouchableOpacity>
                <Text style={[Styles.headerText, { left: dynamicSize(40) }]}>RecordPayment</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    borderWidth: 2,
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', width: 200,
              
                }}>
                    <Image
                        source={{ uri: userDetail?.user?.picture?.large }}
                        style={{ height: 60, width: 60, borderRadius: 33 }}
                    />
                    <Image
                        source={icons.transferArrow}
                        resizeMode='contain'
                        style={{ height: 50, width: 40, }}
                    />
                    <Image
                        source={{ uri: userDetail?.user?.picture?.large }}
                        style={{ height: 60, width: 60, borderRadius: 33 }}
                    />
                    {/* <Text>{userDetail.user.first_name}</Text> */}
                </View>
               <View style={{width: 200,height:60,borderWidth:2,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:16,color:'black'}}>{userDetail.user.first_name} paid {userDetail.user.first_name}</Text>
               <Text>{userDetail.user.email}</Text>
               </View>
            </View>
        </View>
    )
}
export default RecordPayment;

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