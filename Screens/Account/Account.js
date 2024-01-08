import React from "react";
import { Text, View, StyleSheet, ScrollView, Image, } from "react-native";
import { COLORS, icons } from "../../constants";
import Card from "../../components/Card";
import { dynamicSize } from "../../utils/dimension.style";
import Button2 from "../../components/Button";


const Account = ({ }) => {

    return (
        <View style={Styles.mainContainer}>

            <View style={Styles.accountView}>
                <Text style={[Styles.headerText, { fontSize: dynamicSize(28), color: COLORS.color4, fontWeight: '600' }]}>
                    Account
                </Text>
            </View>
            <ScrollView  contentContainerStyle={{ width: '100%', alignItems: 'center' }}>
                <Card style={[Styles.profileImage, Styles.profileImage2]}>
                    <Image source={icons.userAvtar} style={Styles.profileImage} />
                </Card>
                <Card style={[Styles.profileImage2, { height: dynamicSize(350), width: dynamicSize(350),paddingVertical:dynamicSize(10), paddingHorizontal: dynamicSize(40) }]}>
                    <View style={Styles.nameView}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: dynamicSize(40),
                                height: dynamicSize(40)
                            }}
                            source={icons.profile}
                        />
                        <Text numberOfLines={1} style={{ fontSize: dynamicSize(20), left: dynamicSize(20), color: COLORS.color4 }}>{'Kishor Kumar'}</Text>
                    </View>
                    <View style={Styles.nameView}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: dynamicSize(40),
                                height: dynamicSize(40)
                            }}
                            source={icons.phone}
                        />
                        <Text style={{ fontSize: dynamicSize(20), left: dynamicSize(20), color: COLORS.color4 }}>12365478595</Text>
                    </View>
                    <View style={Styles.nameView}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: dynamicSize(40),
                                height: dynamicSize(40)
                            }}
                            source={icons.email}
                        />
                        <Text numberOfLines={2} style={{ fontSize:dynamicSize(20), left: dynamicSize(20), color: COLORS.color4 }}>{'kishorkumar@gmail.com'}</Text>
                    </View>

                    <Button2
                        // onPress={() => closeModal(false)}
                        buttonSize={Styles.btn}
                        children={'Log Out'}
                        buttonText={{ color: COLORS.color4, fontSize: dynamicSize(20), bottom: 3 }}
                    />
                
                </Card>
            </ScrollView>

        </View>
    )
}
export default Account;

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: dynamicSize(10),
        paddingBottom: dynamicSize(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    accountView: {
        height: dynamicSize(70),
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    profileImage: {
        height: dynamicSize(150),
        width: dynamicSize(150),
        borderRadius: dynamicSize(100)
    },
    profileImage2: {
        marginVertical: dynamicSize(30),
        selfAlign: 'center',
    },
    nameView: {
        minHeight: dynamicSize(42),
        width: '100%',
        // borderWidth:dynamicSize (1),
        marginVertical: dynamicSize(10),
        flexDirection: 'row',
        alignItems: 'center',

    },
    btn: {
        backgroundColor: COLORS.color2,
        // borderWidth: 1,
        height:dynamicSize (60),
        minWidth:dynamicSize (130),
        top:dynamicSize (30),
        marginHorizontal:dynamicSize (5),
        alignSelf: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.10,
        elevation: 2,
        // backgroundColor: 'white',
        marginBottom:dynamicSize (5),
        borderRadius: dynamicSize(12)
    },


})