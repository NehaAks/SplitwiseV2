import moment from "moment";
import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Image, Modal } from "react-native";
import { COLORS, icons } from "../../constants";
import { dynamicSize } from "../../utils/dimension.style";
import ExpenseDetails from "../Activity/ExpenseDetails";

const DashboardList = ({ data, GroupId, Update, updateApi }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [expenseId, setExpenseId] = useState()
    const [date1, setDate1] = useState()
    let m = moment(new Date(date1)).format('MMM DD')
    // console.log(GroupId)
    // console.log(date1)
    function updateValue(value) {
        Update(value)
    }

    function renderItem({ item, }) {
        
        return (
            <>
                <Modal
                    visible={isVisible}
                    animationType="slide"
                    transparent={false}
                    coverScreen={true}
                    onRequestClose={() => setIsVisible(false)}
                >
                    <ExpenseDetails
                        closeModal={(value) => setIsVisible(value)}
                        id={expenseId}
                        updateApi={updateApi}
                        listUpdate={(value) => updateValue(value)}
                    />
                </Modal>
                
                {
                    GroupId == item?.group_id && item.deleted_by == null &&
                        <TouchableOpacity
                            onPress={() => [setIsVisible(true), setExpenseId(item?.id)]}
                            style={Styles.container}>
                            <View style={{ width: '10%', height: '70%', justifyContent: 'center', alignItems: 'center', right: 10 }}>
                                <Text style={{ color: COLORS.color4, fontSize: dynamicSize(16), textAlign: 'center' }}>{moment(new Date(item?.date)).format('MMM DD')}</Text>
                            </View>
                            <View style={{
                                width: '14%',
                                height: '70%',
                                borderRadius: 50,
                                borderColor: COLORS.color2,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    resizeMode="contain"
                                    source={icons.list}
                                    style={{ width: '100%', height: '100%', }}
                                />
                            </View>
                            <View style={{ width: '45%', paddingHorizontal: dynamicSize(10), justifyContent: 'center' }}>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        fontSize: dynamicSize(16),
                                        color: COLORS.color4,
                                        fontWeight: '500'
                                    }}>{item.description}</Text>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        fontSize: dynamicSize(12),
                                        color: COLORS.gray,
                                        fontWeight: '500'
                                    }}>{item.created_by?.first_name} paid {`\u20B9`}{item?.cost}</Text>
                            </View>
                            <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                {item?.users?.map(data => {
                                    {/* console.log('asdfghjj', data?.net_balance) */ }
                                    return (
                                        data?.user_id == 63507246 &&
                                        <>
                                            <Text style={
                                                data?.net_balance < 0 ? {
                                                    fontSize: dynamicSize(12), color: COLORS.red
                                                } : {
                                                    fontSize: dynamicSize(12), color: COLORS.green_success
                                                }}>{data?.net_balance < 0 ? 'you owe' : 'owes you'}</Text>
                                            <Text
                                                style={
                                                    data?.net_balance < 0 ? {
                                                        fontSize: dynamicSize(15), fontWeight: '500', color: COLORS.red
                                                    } : {
                                                        fontSize: dynamicSize(15), fontWeight: '500', color: COLORS.green_success
                                                    }}>{`\u20B9`}{data.net_balance < 0 ? data.net_balance * (-1) : data?.net_balance}</Text>
                                        </>
                                    )
                                }

                                )}

                            </View>
                        </TouchableOpacity>}
            </>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                // scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default DashboardList;

const Styles = StyleSheet.create({
    container: {
        height: dynamicSize(80),
        width: '100%',
        // borderWidth: 1,
        flexDirection: 'row',
        marginBottom: dynamicSize(5),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: dynamicSize(20)
    },
    view: {
        height: dynamicSize(80),
        width: '100%',
        borderWidth: dynamicSize(1),
        backgroundColor: 'red',
        marginBottom: dynamicSize(10),
        borderRadius: dynamicSize(12)
    }
})