import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView, Modal,Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, icons, images } from "../../constants";
import constants from "../../constants/constants";
import { GetGroupInformationAction } from "../../redux/actions/getGroupInformationAction";
import { dynamicSize } from "../../utils/dimension.style";
import AddExpenseModal from "../AddExpense.js/AddExpenseModal";
import TabButton from "../dashboard.js/TabButton";
import FriendDetailList from "./friendDetailList";

const FriendDetail = ({ DetailModal, navigation,dataArray }) => {
    const dispatch = useDispatch()
    const detail = useSelector(state => state?.FriendDetailReducer?.userData)
    const [amount, setAmount] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [updateApi, setUpdateApi] = useState()
    const[friendDetail,setFriendDetail]=useState(true)
    // console.log('dfdfdfdfdfdfdfdfdf', dataArray.group.name)
    // function setBlnc(value) {
    //     dispatch(GetGroupInformationAction({
    //         header: constants.Header,
    //         Id: value,
    //         onSuccess: data => {
                // console.log('datsa', detail)

    //             if (data?.group != null && data?.group != undefined) {
    //                 setAmount([...amount, data?.group])
    //             } else if (data?.errorDetails != null) {

    //             }
    //         },
    //         onFailure: error => {
    //             showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error));
    //         },
    //     }))
    // }
    // console.log('ghjk2', amount)
    return (
        <View style={Styles.mainContainer}>
            <ImageBackground
                resizeMode='cover'
                source={images.cover}
                style={[Styles.header, { height: dynamicSize(100) }]}>

                <View style={{ height: '70%', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: dynamicSize(15) }}>
                    <TouchableOpacity onPress={() => DetailModal(false)}>
                        <Image
                            resizeMode="contain"
                            source={icons.backArrow}
                            style={{ width: dynamicSize(35), height: dynamicSize(35) }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    // onPress={() => setIsAddUser(!isAddUser)}
                    >
                        <Image
                            resizeMode="contain"
                            source={icons.info}
                            style={{ width: dynamicSize(25), height: dynamicSize(25), tintColor: 'white' }}

                        />
                    </TouchableOpacity>

                    {/* <Modal
                        visible={isAddUser}
                        animationType="slide"
                        transparent={false}
                        coverScreen={true}
                        onRequestClose={() => setIsAddUser(false)}
                    >
                        <Friends
                            GroupId={id}
                            AddMember={(value) => AddMemberInGroup(value)} />
                        <GroupDetails
                            closeModal={(value) => setIsAddUser(value)}
                            RemoveMember={(value) => RemoveMemberInGroup(value)}
                            AddUserInGroup={(value) => AddMemberInGroup(value)}
                            updateApi={updateApi}
                            Update={(value) => setUpdateApi(value)}
                        />
                    </Modal> */}
                </View>

            </ImageBackground>
            <View style={{ height: 60, backgroundColor: COLORS.white }}>
                <ImageBackground
                    resizeMode='cover'
                    source={images.cover}
                    style={{ height: '50%' }}>
                    <View
                        style={{
                            height: 80,
                            width: 80,
                            left: 50,
                            bottom: 25,
                            backgroundColor: '#e6ecff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 50,
                            borderColor: '#4294ff',
                            borderWidth: 1
                        }}>
                        <Image
                            resizeMode='contain'
                            source={{ uri: detail?.friend?.picture?.large }}
                            style={{ height: 70, width: 70, borderRadius: 50 }} />
                    </View>
                </ImageBackground>
            </View>
            <ScrollView>
                <View style={{ minHeight: 70, paddingLeft: 50, }}>
                    <Text
                        numberOfLines={2}
                        style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: COLORS.color4,
                            marginBottom: 5
                        }}>{detail?.friend?.first_name + " " + detail?.friend?.last_name}</Text>

                    {detail?.friend?.balance.map(blnc => {
                       {/* console.log('blnc,', blnc) */}
                        return (
                            <View>
                                {detail?.friend?.id != 63507246 &&
                                    (<Text style={{ fontSize: 16, color: COLORS.color4, marginBottom: 10, }}>
                                        {blnc.amount > 0 ? detail?.friend?.first_name + " " + `owes you` : `You owe ${detail?.friend?.first_name}`}
                                        <Text style={blnc.amount > 0 ? { color: COLORS.green_success } : { color: COLORS.red }}>
                                            {" " + `\u20B9`}{blnc.amount < 0 ? blnc.amount * (-1) : blnc.amount}</Text>  </Text>)}
                            </View>
                        )
                    })}

                    {/* {detail?.friend?.groups.map(data => setBlnc(data.group_id))} */}
                </View>
                <TabButton
                    settleBtn={() => Alert.alert('settle')}
                    balanceBtn={() => Alert.alert('balance')}
                    totalBtn={() => Alert.alert('total')}
                />

                <FriendDetailList
                navigation={navigation}
                userId={detail?.friend?.id}
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
                        sendExpense={(value) => console.log(value)}
                        updateApi={updateApi}
                        Update={(value) => console.log(value)}
                    />
                </Modal>
            </ScrollView>
            <TouchableOpacity style={Styles.plusIcon}
                onPress={() => setIsVisible(true)}
            >
                <Image
                    resizeMode="contain"
                    source={images.plusIcon}
                    style={[Styles.plusIcon, { bottom: 0 }]} />
            </TouchableOpacity>
        </View>
    )
}
export default FriendDetail

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: dynamicSize(80),
        // alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: COLORS.gray4,
        paddingHorizontal: dynamicSize(10),
    },
    headerText: {
        fontSize: dynamicSize(24),
        fontWeight: '500',
        color: COLORS.black,
    },
    plusIcon: {
        width: dynamicSize(60),
        height: dynamicSize(60),
        position: 'absolute',
        right: dynamicSize(10),
        bottom: dynamicSize(20)
    },
})