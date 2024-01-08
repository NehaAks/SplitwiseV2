import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Alert, ImageBackground } from "react-native";
import { COLORS, icons, images } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";
import AddExpenseModal from "../AddExpense.js/AddExpenseModal";
import DashboardList from "./dashboardList";
import TabButton from "./TabButton";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { GetGroupInformationAction } from "../../redux/actions/getGroupInformationAction";
import constants from "../../constants/constants";
import { AddExpenseAction } from "../../redux/actions/addExpenseAction";
import { AddUserInGroupAction } from "../../redux/actions/addUserInGroupAction";
import { ActivityListAction } from "../../redux/actions/activityListAction";
import GroupDetails from "./groupDetails";
import { RemoveUserInGroupAction } from "../../redux/actions/removeUserInGroupAction";
import ErrorCodeMessages from '../../constants/ErrorCodeMessages';
import { showToast } from '../../components/ToastMessage';
import { useToast } from "react-native-toast-notifications";
import SettleUp from "./3buttonOnDashboard/settleUp";
const MainScreen = ({ route, navigation }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isAddUser, setIsAddUser] = useState(false)
    const [updateApi, setUpdateApi] = useState(false)
    const [settleBtn, setSettleBtn] = useState(false)
    const [balanceBtn, setBalanceBtn] = useState(false)
    const [totalBtn, setTotalBtn] = useState(false)
    // console.log('update', updateApi)   
    const GroupInformation = useSelector(state => state.GetGroupInformationReducer?.userData)
    const ExpenseList = useSelector(state => state.ActivityListReducer.userData)
    // console.log('expense',ExpenseList)
    const toast = useToast()
    const { id } = route.params
    const dispatch = useDispatch()
    // useEffect(() => {
    //     navigation.setOptions({

    //         headerRight: () => (
    //             <TouchableOpacity
    //                 onPress={() => setIsAddUser(!isAddUser)}
    //             >
    //                 <Image
    //                     resizeMode='contain'
    //                     style={{ width: dynamicSize(25), height: dynamicSize(25), tintColor: 'white' }}
    //                     source={icons.AddUser}
    //                 />
    //             </TouchableOpacity>
    //         ),
    //     });
    // }, [navigation,]);

    useEffect(() => {
        dispatch(GetGroupInformationAction({ header: constants.Header, Id: id }))
        dispatch(ActivityListAction({ header: constants.Header, }))
    }, [updateApi])
    useFocusEffect(
        React.useCallback(() => {
            dispatch(GetGroupInformationAction({ header: constants.Header, Id: id })),
                dispatch(ActivityListAction({ header: constants.Header, }))
        }, [updateApi])
    )

    function AddMemberInGroup(value) {
        var userData = {
            group_id: id,
            user_id: value,
        }
        dispatch(AddUserInGroupAction({
            userData: userData,
            header: constants.Header,
            onSuccess: data => {

                if (data?.success != null && data?.success == true) {
                    setUpdateApi(!updateApi)
                    showToast(toast, constants.toastOptions.SUCCESS, 'Member has been added in this group!');
                } else if (data?.errorDetails != null) {
                    showToast(toast, constants.toastOptions.ERROR, data.errorDetails.message);
                }
            },
            onFailure: error => {
                showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
            },
        }))
    }

    function RemoveMemberInGroup(value) {
        var userData = {
            group_id: id,
            user_id: value,
        }
        dispatch(RemoveUserInGroupAction({
            userData: userData,
            header: constants.Header,
            onSuccess: data => {
                if (data?.success != null && data?.success == true) {
                    setUpdateApi(!updateApi)
                    showToast(toast, constants.toastOptions.SUCCESS, 'Member has been removed from this group!');
                } else if (data?.errorDetails != null) {
                    showToast(toast, constants.toastOptions.ERROR, data.errorDetails.message);
                }
            },
            onFailure: error => {
                showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
            },
        }))
    }

    function AddExpense(value) {
        const date = new Date()
        var userData = {
            cost: value.expense,
            description: value.description,
            // details: "kuch bhi",
            date: date,
            repeat_interval: "never",
            currency_code: "INR",
            // category_id: 15,
            group_id: id,
            split_equally: true
        }

        dispatch(AddExpenseAction({ userData, header: constants.Header }))
    }

    return (
        <View style={Styles.mainContainer}>
            <ImageBackground
                resizeMode='cover'
                source={{ uri: GroupInformation?.group?.cover_photo?.xxlarge }}
                style={[Styles.header, { height: dynamicSize(100) }]}>

                <View style={{ height: '70%', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: dynamicSize(15) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            resizeMode="contain"
                            source={icons.backArrow}
                            style={{ width: dynamicSize(35), height: dynamicSize(35) }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsAddUser(!isAddUser)}>
                        <Image
                            resizeMode="contain"
                            source={icons.info}
                            style={{ width: dynamicSize(25), height: dynamicSize(25), tintColor: 'white' }}

                        />
                    </TouchableOpacity>

                    <Modal
                        visible={isAddUser}
                        animationType="slide"
                        transparent={false}
                        coverScreen={true}
                        onRequestClose={() => setIsAddUser(false)}
                    >
                        {/* <Friends
                            GroupId={id}
                            AddMember={(value) => AddMemberInGroup(value)} /> */}
                        <GroupDetails
                            closeModal={(value) => setIsAddUser(value)}
                            RemoveMember={(value) => RemoveMemberInGroup(value)}
                            AddUserInGroup={(value) => AddMemberInGroup(value)}
                            updateApi={updateApi}
                            Update={(value) => setUpdateApi(value)}
                        />
                    </Modal>
                </View>

            </ImageBackground>
            <View style={{ height: 60, backgroundColor: COLORS.white }}>
                <ImageBackground
                    resizeMode='cover'
                    source={{ uri: GroupInformation?.group?.cover_photo?.xxlarge }}
                    style={{ height: '50%' }}>
                    <View
                        style={{ height: 80, width: 80, left: 50, bottom: 25, backgroundColor: '#e6ecff', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: '#4294ff', borderWidth: 1 }}>
                        <Image
                            resizeMode='contain'
                            source={{ uri: GroupInformation?.group?.avatar?.xxlarge }}
                            style={{ height: 70, width: 70 }} />
                    </View>
                </ImageBackground>
            </View>
            <ScrollView>
                <View style={{ minHeight: 70, paddingLeft: 50, }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.color4, marginBottom: 5 }}>{GroupInformation?.group?.name}</Text>
                    {GroupInformation?.group?.members.map(data => {
                        // console.log('dadat', data)
                        return (
                            <View>

                                {data?.balance.map(blnc => {
                                    // console.log('blnc,', blnc)
                                    return (
                                        <View>
                                            {data?.id != 63507246 &&
                                                (<Text style={{ fontSize: 16, color: COLORS.color4, marginBottom: 10, }}>
                                                    {blnc.amount < 0 ? data.first_name + " " + `owes you` : `You owe ${data.first_name}`}
                                                    <Text style={blnc.amount < 0 ? { color: COLORS.green_success } : { color: COLORS.red }}>
                                                        {" " + `\u20B9`}{blnc.amount < 0 ? blnc.amount * (-1) : blnc.amount}</Text>  </Text>)}
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    })}
                </View>
                <TabButton
                    settleBtn={() => setSettleBtn(true)}
                    balanceBtn={() => setBalanceBtn(true)}
                    totalBtn={() => setTotalBtn(true)}
                />

                <Modal
                    visible={settleBtn}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setSettleBtn(false)}
                >
                    <SettleUp
                        closeModal={(value) => setSettleBtn(value)}
                    />
                </Modal>

                <Modal
                    visible={balanceBtn}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setBalanceBtn(false)}
                >

                    <Text>balance</Text>
                </Modal>

                <Modal
                    visible={totalBtn}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setTotalBtn(false)}
                >

                    <Text>total</Text>
                </Modal>

                <DashboardList
                    data={ExpenseList?.expenses}
                    GroupId={id}
                    updateApi={updateApi}
                    Update={(value) => setUpdateApi(value)}
                />

                <Modal
                    visible={isVisible}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setIsVisible(false)}
                >
                    <AddExpenseModal
                        closeModal={(value) => setIsVisible(value)}
                        sendExpense={(value) => AddExpense(value)}
                        updateApi={updateApi}
                        Update={(value) => setUpdateApi(value)}
                        navigation={navigation}
                    />
                </Modal>
            </ScrollView>
            <TouchableOpacity style={Styles.plusIcon} onPress={() => setIsVisible(true)}  >
                <Image resizeMode="contain" source={images.plusIcon} style={[Styles.plusIcon, { bottom: 0 }]} />
            </TouchableOpacity>
        </View>
    )
}
export default MainScreen;

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.white
        // backgroundColor: '#D3D3D3',
        // paddingBottom: dynamicSize(10)

    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderBottomWidth: 2,
        borderColor: '#e8e8e8',
        height: dynamicSize(100),
    },
    plusIcon: {
        width: dynamicSize(60),
        height: dynamicSize(60),
        position: 'absolute',
        right: dynamicSize(10),
        bottom: dynamicSize(20)
    },



})