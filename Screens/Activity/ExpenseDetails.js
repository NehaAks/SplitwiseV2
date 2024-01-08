import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Confirmation from "../../components/confirmationPopUp";
import { COLORS, icons } from "../../constants";
import constants from "../../constants/constants";
import { DeleteExpenseAction } from "../../redux/actions/deleteExpenseAction";
import { ExpenseDetailsAction } from "../../redux/actions/expenseDetailsAction";
import { RestoreExpenseAction } from "../../redux/actions/restoreExpenseAction";
import { dynamicSize } from "../../utils/dimension.style";
import ErrorCodeMessages from '../../constants/ErrorCodeMessages';
import { showToast } from '../../components/ToastMessage';
import { useToast } from "react-native-toast-notifications";

const ExpenseDetails = ({ closeModal, id, listUpdate, updateApi }) => {
    const toast = useToast();
    const dispatch = useDispatch()
    const ExpenseDetails = useSelector(state => state.ExpenseDetailsReducer.userData)
    useEffect(() => {
        dispatch(ExpenseDetailsAction({ header: constants.Header, Id: id }))
    }, [])



    function DeleteExpense() {
        dispatch(DeleteExpenseAction({
            header: constants.Header,
            Id: id,
            onSuccess: data => {

                if (data?.success != null && data?.success == true) {
                    showToast(toast, constants.toastOptions.SUCCESS, 'Item has been Deleted!');
                    dispatch(ExpenseDetailsAction({ header: constants.Header, Id: id }))
                } else if (data?.errorDetails != null) {
                    showToast(toast, constants.toastOptions.ERROR, data.errorDetails.message);
                }
            },
            onFailure: error => {
                showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
            },
        }))
    }

    function RestoreExpense() {
        // setId(id)
        // console.log('restore')
        dispatch(RestoreExpenseAction({
            header: constants.Header,
            Id: id,
            onSuccess: data => {
                if (data?.success != null && data?.success == true) {
                    dispatch(ExpenseDetailsAction({ header: constants.Header, Id: id }))
                    showToast(toast, constants.toastOptions.SUCCESS, 'Item has been Restored!');
                } else if (data?.errorDetails != null) {
                    showToast(toast, constants.toastOptions.ERROR, data.errorDetails.message);
                }
            },
            onFailure: error => {
                showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
            },
        }))
    }
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.header}>

                <TouchableOpacity onPress={() => [closeModal(false), listUpdate(!updateApi)]}>
                    <Image
                        resizeMode="contain"
                        source={icons.backArrow}
                        style={{ width: dynamicSize(35), height: dynamicSize(35) }}
                    />
                </TouchableOpacity>
                <View style={{ width: dynamicSize(60), left: dynamicSize(30), top: dynamicSize(30), height: dynamicSize(60), borderRadius: dynamicSize(50), justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <Image
                        resizeMode="contain"
                        source={icons.list}
                        style={{ width: dynamicSize(35), height: dynamicSize(35), backgroundColor: 'white' }}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => Confirmation({
                        title: 'Delete expense?',
                        Msg: 'Are you sure you want delete this expense? This will remove this expense for ALL people involved,not just you.',
                        onPress2: DeleteExpense
                    }
                    )}
                    style={{ width: 60, height: 35, position: 'absolute', right: 10, justifyContent: 'center', alignItems: 'center' }}>
                    {
                        ExpenseDetails?.expense?.deleted_by == null ? (
                            < Image
                                source={icons.deleteBtn}
                                resizeMode='contain'
                                style={{ width: 35, height: 35,tintColor:'white' }}
                            />) :
                            <Text
                                onPress={() => Confirmation({
                                    title: 'Undelete this expense?',
                                    Msg: 'This will restore the expense for everyone involved.',
                                    onPress2: RestoreExpense
                                })}
                                style={{ color: COLORS.white, fontWeight: 'bold' }}>Restore</Text>}


                </TouchableOpacity>
            </View>

            <View style={Styles.bottomContainer}>
                <View style={{ minHeight: dynamicSize(115), width: '80%', left: '18%', marginBottom: dynamicSize(20) }}>
                    <Text style={ExpenseDetails?.expense?.deleted_by == null ?
                        { fontSize: dynamicSize(25), color: COLORS.black, fontWeight: '300', marginBottom: dynamicSize(10) } :
                        { fontSize: dynamicSize(25), color: COLORS.black, fontWeight: '300', marginBottom: dynamicSize(10), textDecorationLine: 'line-through' }}>{ExpenseDetails?.expense?.description}</Text>
                    <Text style={ExpenseDetails?.expense?.deleted_by == null ?
                        { fontSize: dynamicSize(25), color: COLORS.black, fontWeight: 'bold', marginBottom: dynamicSize(10) } :
                        { fontSize: dynamicSize(25), color: COLORS.black, fontWeight: 'bold', marginBottom: dynamicSize(10), textDecorationLine: 'line-through' }}>{'\u20B9'}{ExpenseDetails?.expense?.cost}</Text>
                    <Text style={{ color: COLORS.gray, fontWeight: '400', fontSize: 12 }}>Added by {ExpenseDetails?.expense?.created_by?.first_name} on {moment(new Date(ExpenseDetails?.expense?.created_at)).format('MMMM DD, YYYY ,hh:mm A')} </Text>
                    {
                        ExpenseDetails?.expense?.deleted_by && <Text style={{
                            color: COLORS.red, fontWeight: '400',fontSize: 12 
                        }}>Deleted by {ExpenseDetails?.expense?.created_by?.first_name} on {moment(new Date(ExpenseDetails?.expense?.deleted_at)).format('MMMM DD, YYYY ,hh:mm A')} </Text>
                    }
                </View>
                <View style={{ minHeight: dynamicSize(200), width: '100%', marginBottom: dynamicSize(20) }}>
                    <View style={{ flexDirection: 'row', marginBottom: dynamicSize(5) }}>
                        <Image
                            source={icons.list}
                            style={{ height: 50, width: 50, borderRadius: dynamicSize(50) }}
                        />
                        <Text style={{ textAlignVertical: 'center', left: dynamicSize(20), fontSize: dynamicSize(18), color: COLORS.black, fontWeight: '400' }}>{ExpenseDetails?.expense?.created_by?.first_name} paid {'\u20B9'}{ExpenseDetails?.expense?.cost}</Text>
                    </View>
                    <View style={{ minHeight: 120, paddingLeft: dynamicSize(70) }}>
                        {
                            ExpenseDetails?.expense?.users.map(data => {
                                // console.log('dsata', data)
                                return (
                                    <Text style={{ marginBottom: 5, fontSize: 16 }}>{'\u25CF '} {data?.user?.first_name} owes {'\u20B9'}{data?.owed_share}</Text>


                                )
                            })
                        }
                    </View>
                </View>
            </View>


        </View>
    )
}
export default ExpenseDetails;

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.color1
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.color4,
        height: dynamicSize(80),
        // justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: dynamicSize(10)
    },

    bottomContainer: {
        flex: 1,
        paddingHorizontal: dynamicSize(20),
        paddingVertical: dynamicSize(40)
        // backgroundColor: 'yellow'

    },

})