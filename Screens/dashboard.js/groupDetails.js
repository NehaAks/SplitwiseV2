import {
    Text, View, TouchableOpacity, Image, ScrollView,
    StyleSheet, Dimensions, Modal
} from 'react-native';
import React, { useState } from 'react';
import { dynamicSize } from '../../utils/dimension.style';
import { COLORS, icons } from '../../constants';
import { useSelector } from 'react-redux';
import Friends from '../Friends/Friends';
import Confirmation from '../../components/confirmationPopUp';
import ShareComponent from '../../components/shareComponent';

const GroupDetails = ({ closeModal, RemoveMember, AddUserInGroup }) => {
    const [isAddUser, setIsAddUser] = useState(false)
    const GroupInformation = useSelector(state => state.GetGroupInformationReducer?.userData)
    const ram = GroupInformation?.group?.invite_link
    return (
        <View style={{ flex: 1, }}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => closeModal(false)}>
                    <Image
                        resizeMode="contain"
                        source={icons.backArrow}
                        style={{ width: dynamicSize(35), height: dynamicSize(35), tintColor: 'black' }}
                    />
                </TouchableOpacity>
                <Text style={[Styles.headerText, { left: dynamicSize(40) }]}>Group Detail</Text>
            </View>
            <ScrollView>
                <View style={Styles.groupIconView}>
                    <Image
                        source={{ uri: GroupInformation?.group?.cover_photo?.xlarge }}
                        style={{ height: '80%', width: 66, backgroundColor: 'red', borderRadius: dynamicSize(12) }} />
                    <View style={{ height: '80%', width: 280, justifyContent: 'center', paddingHorizontal: dynamicSize(20) }}>
                        <Text style={{ fontSize: 20 }}>{GroupInformation?.group?.name}</Text>
                    </View>
                </View>
                <View style={{ height: 50, width: '100%', justifyContent: 'center', paddingHorizontal: dynamicSize(20) }}>
                    <Text style={{ fontWeight: '500' }}>Group members</Text>
                </View>
                <Modal
                    visible={isAddUser}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setIsAddUser(false)}
                >
                    <Friends
                        GroupId={GroupInformation?.group?.id}
                        AddMember={(value) => AddUserInGroup(value)}
                        closeModal={(value) => setIsAddUser(value)}
                    />
                </Modal>
                <TouchableOpacity
                    onPress={() => setIsAddUser(true)}
                    style={{ flexDirection: 'row', alignItems: 'center', height: 60, width: '100%', paddingHorizontal: dynamicSize(20) }}>
                    <Image
                        source={icons.AddUser}
                        style={{ height: dynamicSize(25), width: dynamicSize(25), tintColor: 'black' }}
                    />
                    <Text style={{ left: dynamicSize(20), fontSize: dynamicSize(16), color: 'black' }}>Add people to group</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => ShareComponent({ children: ram })}
                    style={{ flexDirection: 'row', alignItems: 'center', height: 60, width: '100%', paddingHorizontal: dynamicSize(20) }}>
                    <Image
                        source={icons.join}
                        style={{ height: dynamicSize(25), width: dynamicSize(25), tintColor: 'black' }}
                    />
                    <Text style={{ left: dynamicSize(20), fontSize: dynamicSize(16), color: 'black' }}>Join via link</Text>
                </TouchableOpacity>
                {GroupInformation?.group?.members.map(data => {
                    {/* console.log('dadat343', data) */ }
                    return (
                        <TouchableOpacity
                            onLongPress={() => Confirmation({
                                title: '',
                                Msg: `Are you sure to remove member from group?`,
                                onPress2: () => RemoveMember(data?.id)
                            }
                            )}
                            style={{ flexDirection: 'row', alignItems: 'center', height: 70, width: '100%', paddingHorizontal: dynamicSize(20) }}>
                            <Image
                                source={{ uri: data?.picture?.large }}
                                style={{ height: dynamicSize(50), width: dynamicSize(50), borderRadius: 100 }}
                            />
                            <View style={{ left: dynamicSize(20), width: '60%' }}>
                                <Text numberOfLines={1} style={{ fontSize: dynamicSize(16), color: 'black' }}>{data?.first_name}</Text>
                                <Text numberOfLines={1} style={{ fontSize: dynamicSize(12) }}>{data.email}</Text>
                            </View>
                            {data?.balance?.length != undefined && data?.balance?.length > 0 ? data?.balance.map(data => {
                                return (
                                    <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={data?.amount < 0 ? { fontSize: dynamicSize(12), color: COLORS.red } : { fontSize: dynamicSize(12), color: COLORS.green_success }}>{data?.amount < 0 ? 'you owe' : 'owes you'}</Text>
                                        <Text style={data?.amount < 0 ? { fontSize: dynamicSize(15), fontWeight: '500', color: COLORS.red } : { fontSize: dynamicSize(15), fontWeight: '500', color: COLORS.green_success }}>{`\u20B9`}{data.amount < 0 ? data.amount * (-1) : data.amount}</Text>
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
                })}
            </ScrollView>
        </View>
    );
};

export default GroupDetails;

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
    },
    groupIconView: {
        height: dynamicSize(80),
        width: "100%",
        borderColor: COLORS.gray4,
        paddingHorizontal: dynamicSize(20),
        borderBottomWidth: dynamicSize(2),
        borderBottomWidth: dynamicSize(2),
        alignItems: 'center',
        flexDirection: 'row'
    }
});


