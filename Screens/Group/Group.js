import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button2 from "../../components/Button";
import { COLORS, images } from "../../constants";
import { GET_GROUP_ACTION } from "../../redux/actions/getGroupAction";
import { dynamicSize } from "../../utils/dimension.style";
import GroupInput from "./GroupInput";
import constants from "../../constants/constants";
import { CREATE_GROUP_ACTION } from "../../redux/actions/createGroupAction";
import Confirmation from "../../components/confirmationPopUp";
import { DeleteGroupAction } from "../../redux/actions/deleteGroupAction";
import ErrorCodeMessages from '../../constants/ErrorCodeMessages';
import { showToast } from '../../components/ToastMessage';
import { useToast } from "react-native-toast-notifications";
const Group = ({ navigation }) => {
    const groupList = useSelector(state => state?.GET_GROUP_REDUCER?.userData)
    // console.log('mast===>>>', groupList?.groups) // item?.members?.map( data )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GET_GROUP_ACTION({ header: constants.Header }))
    }, [])
    useFocusEffect(
        React.useCallback(() => {
            dispatch(GET_GROUP_ACTION({ header: constants.Header }))
        }, [])
    )
    const [isVisible, setIsVisible] = useState(false)
    const [groupId, setGroupId] = useState('')
    const [yourAmount, setYourAmount] = useState(0)

    const toast = useToast();

    function AmountFunc(amount, id) {
        if (id == 63507246) {
            setYourAmount(amount)
        }
    }
    function DeleteGroup(id) {
        dispatch(DeleteGroupAction({
            Id: id,
            header: constants.Header,
            onSuccess: data => {
                if (data?.success != null && data?.success == true) {
                    dispatch(GET_GROUP_ACTION({ header: constants.Header }))
                    showToast(toast, constants.toastOptions.SUCCESS, 'Group has been Deleted!');

                } else if (data?.errorDetails != null) {
                    showToast(toast, constants.toastOptions.ERROR, data.errorDetails.message);

                }
            },
            onFailure: error => {
                showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
            },

        }))
    }
    function createGroup(value) {
        var data = {
            name: value,
            group_type: "Room",
            // users__0__first_name: "Alan",
            // users__0__last_name: "Turing",
            // users__0__email: "pradeep.yadav@connexrm.com",F
        }
        dispatch(CREATE_GROUP_ACTION({
            data,
            header: constants.Header,
            onSuccess: data => {
                dispatch(GET_GROUP_ACTION({ header: constants.Header }))
                if (data?.group != null && data?.group != undefined) {
                    showToast(toast, constants.toastOptions.SUCCESS, 'Group has been created!');
                } else if (data?.errorDetails != null) {
                    showToast(toast, constants.toastOptions.ERROR, data.errorDetails.message);
                }
            },
            onFailure: error => {
                showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
            },
        }))
    }

    function renderItem({ item }) {
        // console.log("hdkahfklas", item)
        return (
            <TouchableOpacity
                style={Styles.GroupList}
                onPress={() => navigation.navigate('DashBoard', { id: item?.id, amount: yourAmount })}
                onLongPress={() => Confirmation({
                    title: '',
                    Msg: `Are you sure to delete the group?`,
                    onPress2: () => DeleteGroup(item?.id)
                }
                )}
            >
                <Image resizeMode="contain" style={{ minHeight: 100, width: 100, borderRadius: 12 }} source={{ uri: item?.avatar?.xxlarge }} />
                <View style={{ left: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{item?.name}</Text>
                    {

                        item?.original_debts != undefined && item?.original_debts != null ? (item?.members?.map(data => {
                            return (

                                <View style={{ width: '100%', flexDirection: 'row' }}>

                                    <Text style={{ fontSize: 13, }}>{data.id == 63507246 ? `you` : data?.first_name}</Text>
                                    {
                                        data?.balance != null && data?.balance != undefined && data?.balance?.map(amt => {
                                            {/* console.log('money', amt?.amount) */}
                                            AmountFunc(amt?.amount != null && amt?.amount != undefined ? amt?.amount : 0, data?.id)
                                            return (
                                                <Text style={{ fontSize: 12, }}>.owes  : <Text style={+amt?.amount < 0 ? { color: COLORS.red } : { color: COLORS.green_success }}>{`\u20B9`}{amt?.amount}</Text> </Text>
                                            )
                                        })
                                    }
                                </View>
                            )
                        })) : <Text>no expense</Text>
                    }
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={[Styles.headerText, { fontSize: dynamicSize(18), color: COLORS.color4 }]}>
                    Overall, you owe <Text style={[
                        Styles.headerText,
                        { fontSize: dynamicSize(18), color: +yourAmount > 0 ? COLORS.green_success : COLORS.red || +yourAmount < 0 ? COLORS.red : COLORS.green_success || +yourAmount == 0 && COLORS.black }]}>{`\u20B9`}{yourAmount}</Text>
                </Text>
            </View>
            <View style={{ paddingHorizontal: dynamicSize(20), }}>
                <FlatList
                    data={groupList?.groups}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    inverted
                />
            </View>
            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={false}
                coverScreen={true}
                onRequestClose={() => setIsVisible(false)}
            >
                <GroupInput
                    closeModal={(value) => setIsVisible(value)}
                    GroupNameFunc={(value) => createGroup(value)}
                />
            </Modal>
            <TouchableOpacity style={Styles.plusIcon}>
                <Button2
                    onPress={() => setIsVisible(true)}
                    buttonSize={Styles.btn}
                    children={'Add new group'}
                    buttonText={{ color: COLORS.white, fontSize: dynamicSize(16), bottom: 3 }}
                />
                {/* <Image resizeMode="contain" source={images.plusIcon} style={[Styles.plusIcon, { bottom: 0 }]} /> */}
            </TouchableOpacity>
        </View>
    )
}
export default Group
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingBottom: dynamicSize(50),
        backgroundColor: '#ffffff'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderBottomWidth: 2,
        borderColor: '#e8e8e8',
        height: dynamicSize(70),
        // justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: dynamicSize(10),
        marginBottom:dynamicSize(20)
    },
    headerText: {
        fontSize: dynamicSize(28),
        fontWeight: '500',
        color: COLORS.white,
    },
    GroupList: {
        minHeight: dynamicSize(80),
        width: '100%',
        // backgroundColor: 'red',
        marginBottom: dynamicSize(15),
        // justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        // borderWidth: 1
    },
    btn: {
        backgroundColor: COLORS.color4,
        // borderWidth: 1,
        height: 50,
        width: '80%',
        alignSelf: 'center',
        // position: 'absolute',
        bottom: dynamicSize(20),
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.10,
        elevation: 2,
        // backgroundColor: 'white',
        marginBottom: 5,
        borderRadius: dynamicSize(12)
        // bottom: 0
    },

    plusIcon: {
        minWidth: dynamicSize(180),
        height: dynamicSize(50),
        position: 'absolute',
        right: dynamicSize(10),
        bottom: dynamicSize(-10),
        // backgroundColor: 'red'
    },
})