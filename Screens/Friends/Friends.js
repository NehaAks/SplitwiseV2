import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Modal, Image, TouchableOpacity, FlatList } from "react-native";
import { COLORS, icons } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";
import { useFocusEffect } from "@react-navigation/native";
import constants from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import Confirmation from "../../components/confirmationPopUp";
import { RemoveFriendsAction } from "../../redux/actions/removeFriendAction";
import ErrorCodeMessages from '../../constants/ErrorCodeMessages';
import { showToast } from '../../components/ToastMessage';
import { useToast } from "react-native-toast-notifications";
import FriendDetail from "./FriendDetail";
import { FriendListAction } from "../../redux/actions/friendListAction";
import { FriendDetailAction } from "../../redux/actions/friendDetailAction";
import { GetGroupInformationAction } from "../../redux/actions/getGroupInformationAction";
import { storeGroupArray } from "../../redux/actions/getGroupAction";

const Friends = ({ AddMember, GroupId, navigation }) => {
    const dispatch = useDispatch()
    const toast = useToast();
    const [totalAmount, setTotalAmount] = useState(0)
    const [isVisible, setisVisible] = useState(false)
    const [updateApi, setUpdateApi] = useState(false)
    const [userDetail, setUserDetail] = useState(false)
    const [userId, setUserId] = useState()
    const [arrayData, setArrayData] = useState([])

    var total = 0
    const friendList = useSelector(state => state?.FriendListReducer?.userData)
    useEffect(() => {
        dispatch(FriendListAction({ header: constants.Header }))
    }, [updateApi])
    useFocusEffect(
        React.useCallback(() => {
            dispatch(FriendListAction({ header: constants.Header }))
        }, [updateApi])
    )

    function amountfunc(amount) {
        // console.log(amount)
        total = total + amount
        var amnt = total
        // console.log(amnt)
        setTotalAmount(amnt)

    }
    function AddMemberInGroup(value) {
        AddMember(value)

    }



    function Detect(value) {
        let response = value?.friend?.groups
        var storeArr = []
        for (var i = 0; i < response?.length; i++) {
            dispatch(GetGroupInformationAction({
                header: constants.Header,
                Id: response[i]?.group_id,
                onSuccess: data => {
                    storeArr.push(data)
                    // console.log(storeArr)

                    dispatch(storeGroupArray({ arr: storeArr }))

                },
                onFailure: error => {
                    showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
                },
            }))
        }
        // setArrayData(...storeArr)
    }
    // console.log('rarry', arrayData)

    function FriendDetail2(value) {
        dispatch(FriendDetailAction({
            Id: value,
            header: constants.Header,
            onSuccess: data => {
                // console.log('data======>>>>>>>>', data)
                Detect(data)
            }
        }))
        setUserDetail(true)
    }

    // function RemoveFriends(value, name) {
    //     dispatch(RemoveFriendsAction({
    //         Id: value,
    //         header: constants.Header,
    //         onSuccess: data => {
    //             setUpdateApi(!updateApi)
    //             if (data?.success != null && data?.success == true) {
    //                 showToast(toast, constants.toastOptions.SUCCESS, `${name} has been removed from Friend List!`);
    //             } else if (data?.errorDetails != null) {
    //                 showToast(toast, constants.toastOptions.ERROR, data.errorDetails.message);
    //             }
    //         },
    //         onFailure: error => {
    //             showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
    //         },
    //     }))
    // }

    function renderItem({ item }) {
        return (
            <TouchableOpacity
                // disabled={GroupId == null ? true : false}
                onPress={() => GroupId != null ? [Confirmation({
                    title: 'Do you want to add?',
                    Msg: `${item?.first_name + " " + item?.last_name}`,
                    onPress2: () => AddMemberInGroup(item?.id)
                }
                )] :
                    // [Confirmation({
                    //     title: 'Do you want to remove?',
                    //     Msg: `${item?.first_name + " " + item?.last_name}`,
                    //     onPress2: () => RemoveFriends(item?.id, item?.first_name)
                    // }
                    // )]
                    FriendDetail2(item?.id)
                }
                style={{ height: dynamicSize(70), width: '100%', flexDirection: 'row', marginBottom: dynamicSize(0), alignItems: 'center', }}
            >
                <Modal
                    visible={userDetail}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setUserDetail(false)}
                >
                    <FriendDetail
                        userId={userId}
                        DetailModal={(value) => setUserDetail(value)}
                        navigation={navigation}
                     
                    />
                </Modal>
                <View style={{ width: '13%', height: '68%', borderWidth: 1, borderRadius: 50, borderColor: COLORS.color2, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        resizeMode="contain"
                        source={{ uri: item?.picture?.small }}
                        style={{ width: 50, height: 50, borderRadius: 100, }}
                    />
                </View>
                <View style={{ width: '52%', paddingHorizontal: dynamicSize(20), justifyContent: 'center' }}>
                    <Text numberOfLines={2} style={{ fontSize: dynamicSize(18), color: COLORS.color4, fontWeight: '500' }}>{item.first_name + " " + item?.last_name}</Text>
                </View>
                {item?.balance?.length != undefined && item?.balance?.length > 0 ? item?.balance.map(data => {
                    // console.log('amount:',data.amount)
                    amountfunc(+data.amount)
                    return (
                        <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={data?.amount < 0 ? { fontSize: dynamicSize(12), color: COLORS.red } : { fontSize: dynamicSize(12), color: COLORS.green_success }}>{data?.amount < 0 ? 'you owe' : 'owes you'}</Text>
                            <Text style={data?.amount < 0 ? { fontSize: dynamicSize(15), fontWeight: '500', color: COLORS.red } : { fontSize: dynamicSize(15), fontWeight: '500', color: COLORS.green_success }}>{`\u20B9`}{data?.amount}</Text>
                        </View>
                    )
                }) : <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Text style={{
                        fontSize: dynamicSize(12),
                    }}>{'no expenses'}</Text>
                    {/* <Text style={{ fontSize: dynamicSize(16), color: take == true ? 'green' : 'red' }}>{`\u20B9`}{data?.amount}</Text> */}
                </View>}

            </TouchableOpacity>
        )
    }
    return (
        <View style={Styles.mainContainer}>
            <View style={{ height: dynamicSize(80), alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: dynamicSize(2), borderColor: COLORS.gray4 }}>
                <Text style={[Styles.headerText, { fontSize: dynamicSize(24), color: COLORS.color4, fontWeight: '600' }]}>
                    Overall, {totalAmount < 0 ? 'you pay' : 'you owe'}
                    <Text style={totalAmount < 0 ?
                        [Styles.headerText, { fontSize: dynamicSize(24), color: COLORS.red }] :
                        [Styles.headerText, { fontSize: dynamicSize(24), color: COLORS.green_success }]}>
                        {``} {`\u20B9`}{totalAmount < 0 ? totalAmount.toFixed(2) * (-1) : totalAmount.toFixed(2)}</Text>
                </Text>
                <TouchableOpacity onPress={() => [
                    setisVisible(true),
                ]}>
                    <Image
                        resizeMode="contain"
                        source={icons.AddUser}
                        style={{ height: dynamicSize(30), width: dynamicSize(30) }} />
                </TouchableOpacity>
                {/* <Modal
                    animationType="fade"
                    transparent={true}
                    visible={commentVisible}
                    onRequestClose={() => { setCommentVisible(false); }}>
                    <TouchableOpacity
                        style={[Platform.OS === "ios" ? style.iOSBackdrop : style.androidBackdrop, style.backdrop]} onPress={() => setCommentVisible(false)} />
                    <View style={{ top: dynamicSize(200) }}>
                        <Background />
                    </View>
                </Modal> */}
            </View>
            <FlatList
                data={friendList?.friends}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default Friends;

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: dynamicSize(10),
        backgroundColor: COLORS.color1
    },
    iOSBackdrop: {
        backgroundColor: "black",
        opacity: 0.6
    },
    androidBackdrop: {
        backgroundColor: "black",
        opacity: 0.6,
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

})