import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { dynamicSize } from "../../utils/dimension.style";
import moment from "moment";
import { COLORS } from "../../constants";

const FriendDetailList = ({ navigation, userId }) => {
    // console.log('kkk', userId)
    const data = useSelector(state => state?.GET_GROUP_REDUCER?.groupArray)

    function renderItem({ item }) {
        // console.log('hii', item.group.original_debts)
        return (
            <>
                {item.group.original_debts?.length > 0 && item.group.original_debts != undefined &&
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DashBoard', { id: item?.group?.id })}
                        style={{
                            height: 60, marginHorizontal: dynamicSize(20),
                             marginBottom: dynamicSize(5),
                            justifyContent: 'center', flexDirection: 'row'
                        }}>
                        <View style={{ height: '100%', width: '10%',  justifyContent: 'center', }}>
                            <Text
                                style={{
                                    color: COLORS.color4, fontSize: dynamicSize(16), textAlign: 'center'
                                }}>{moment(new Date(item?.group?.updated_at)).format(`MMM  DD`)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '60%',  alignItems: 'center',paddingHorizontal:10 }}>
                            <Image
                                source={{ uri: item?.group?.avatar?.xxlarge }}
                                style={{ height: 50, width: 50, borderRadius: 12 }}
                                resizeMode='contain'

                            />
                            <View style={{}}>
                                <Text style={{ fontWeight: '500', color: 'black', left: 15, }}>{item?.group?.name} </Text>
                                {
                                    item?.group?.id != 0 &&
                                    <Text style={{ fontWeight: '300', color: 'black', left: 15, }}>{'shared'}</Text>
                                }
                            </View>
                        </View>
                        <View style={{  width: '30%' ,alignItems:'flex-end'}}>

                            {item.group.members.map(amt => {
                                return (
                                    <>
                                        {
                                            userId == amt.id && amt.balance.map(blnc => {
                                                {/* console.log('hiii', blnc.amount) */ }
                                                return (
                                                    <View>
                                                        <Text style={
                                                            blnc.amount < 0 ? {
                                                                fontSize: dynamicSize(12), color: COLORS.green_success
                                                            } : {
                                                                fontSize: dynamicSize(12), color: COLORS.red
                                                            }}>{blnc.amount < 0 ? 'owes you':'you owe'}</Text>
                                                        <Text
                                                            style={
                                                                blnc.amount < 0 ? {
                                                                    fontSize: dynamicSize(15),textAlign:'right' ,fontWeight: '500', color: COLORS.green_success
                                                                } : {
                                                                    fontSize: dynamicSize(15), fontWeight: '500', color: COLORS.red
                                                                }}>{`\u20B9`}{blnc.amount < 0 ? blnc.amount * (-1) : blnc.amount}</Text>
                                                        {/* <Text style={{ fontSize: 17, color: 'red' }}>{blnc.amount}</Text> */}
                                                    </View>
                                                )
                                            })
                                        }
                                    </>
                                )

                            })}
                        </View>
                    </TouchableOpacity>
                }
            </>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
            {/* <Text>ramamammamam</Text> */}
        </View>
    )

}
export default FriendDetailList;