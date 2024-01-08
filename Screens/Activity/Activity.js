import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, ScrollView, Image, TouchableOpacity, FlatList, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, icons } from "../../constants";
import constants from "../../constants/constants";
import { ActivityListAction } from "../../redux/actions/activityListAction";
import { dynamicSize } from "../../utils/dimension.style";
import ExpenseDetails from "./ExpenseDetails";


const Activity = ({ }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [id, setId] = useState()
    const [updateApi,setUpdateApi]=useState(false)
    const dispatch = useDispatch()
    const ExpenseList = useSelector(state => state.ActivityListReducer.userData)
    // console.log('hiiii===>>>>', ExpenseList.expenses)
    useEffect(() => {
        dispatch(ActivityListAction({ header: constants.Header }))
    }, [updateApi])
    useFocusEffect(
        React.useCallback(() => {
            dispatch(ActivityListAction({ header: constants.Header }))
        }, [])
    )
    // {
    //     isVisible && function expenseDetail() {
    //         dispatch(ExpenseDetailsAction({ Id: id, header: constants.Header }))
    //     }
    // }
    function renderItem({ item }) {
        // console.log('user',item.users)
        return (

            <TouchableOpacity onPress={() => [setId(item.id), setIsVisible(true)]} style={{ minHeight: dynamicSize(80), width: '100%', marginBottom: dynamicSize(20), flexDirection: 'row', }}>
                <Modal
                    visible={isVisible}
                    transparent={false}
                    animationType='slide'
                    onRequestClose={() => setIsVisible(false)}
                >

                    <ExpenseDetails
                        closeModal={(value) => setIsVisible(value)}
                        id={id}
                        updateApi={updateApi}
                        listUpdate={(value)=>setUpdateApi(value)}
                    />
                </Modal>
                <View style={{ width: '18%', height: dynamicSize(60), alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        resizeMode="contain"
                        source={icons.activity}
                        style={{ height: dynamicSize(45), width: dynamicSize(45) }} />
                </View>
                <View style={{ width: '82%', paddingHorizontal: dynamicSize(20), }}>
                    <Text style={{ fontSize: dynamicSize(20), color: COLORS.color4, fontWeight: '500' }}>{item.description}</Text>
                    {item?.users.map(data => {
                        return (
                            <>
                                {
                                    data?.user_id == 63507246 ? <Text style={data.net_balance < 0 ?
                                        (
                                            item?.deleted_by != null ?
                                                {
                                                    fontSize: dynamicSize(18),
                                                    color: COLORS.red,
                                                    textDecorationLine: 'line-through'
                                                }
                                                : {
                                                    fontSize: dynamicSize(18),
                                                    color: COLORS.red
                                                }) :
                                        (
                                            item?.deleted_by != null ? {
                                                fontSize: dynamicSize(18),
                                                color: COLORS.green_success,
                                                textDecorationLine: 'line-through'
                                            } :
                                                {
                                                    fontSize: dynamicSize(18),
                                                    color: COLORS.green_success
                                                })}>
                                        {data.net_balance > 0 ? `You get back` : `You owe`} {data.net_balance < 0 ? data.net_balance * (-1) : data.net_balance}
                                    </Text> : null
                                }
                            </>
                        )
                    })}

                    <Text>{moment(new Date(item?.date)).format('MMMM DD, YYYY ,hh:mm A')}</Text>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <View style={Styles.mainContainer}>
            <View style={{  backgroundColor:'white', height: dynamicSize(80),borderBottomWidth:dynamicSize(2),borderColor:COLORS.gray4 , justifyContent: 'center', marginBottom:dynamicSize(20)}}>
                <Text style={[Styles.headerText, { fontSize: dynamicSize(28), color: COLORS.color4, fontWeight: '600' }]}>
                    Activity
                </Text>
            </View>
            <FlatList
                data={ExpenseList.expenses}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default Activity;

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: dynamicSize(10),
        paddingBottom: dynamicSize(20),
        backgroundColor:'white'
    },

})