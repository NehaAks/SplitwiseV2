import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { TextInput, Title } from 'react-native-paper';
import FormInput from '../../components/FormInput';
import PaperFormInput from '../../components/PaperFormInput';
import PrimaryButtonWithImage from '../../components/PrimaryButtonWithImage';
import TouchableOpacityWithImage from '../../components/TouchableOpacityWithImage';
import { COLORS, FONTS, icons, images } from '../../constants';
import { dynamicSize } from '../../utils/dimension.style';
import TouchableLink from '../../components/TouchableLink';
const Login = ({ navigation }) => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''

    })
    const { username, email, phoneNumber, password, confirmPassword } = formData


    function handleChangeText(value, label) {
        setFormData({ ...formData, [label]: value })
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <ScrollView
                    contentContainerStyle={{ width: '100%', }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{}}>
                        <Image
                            source={images.loginImage}
                            resizeMode='stretch'
                            style={{
                                width: '100%',
                                height: dynamicSize(283),

                                marginTop: dynamicSize(0),
                                // backgroundColor: 'red'
                            }}
                        />
                        <View style={{ marginHorizontal: 40 }}>
                            <Title
                                style={{
                                    ...FONTS.h2,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: dynamicSize(30)
                                }}
                            >
                                Create Account
                            </Title>

                            <Text
                                style={styles.text}
                            >Create Account on survey Management</Text>
                            <KeyboardAvoidingScrollView
                                contentContainerStyle={{ marginTop: dynamicSize(30) }}
                                showsVerticalScrollIndicator={false}
                            >
                                <FormInput
                                    editable={true}
                                    placeholder="Username"
                                    source={icons.person}
                                    containerStyle={styles.containerStyle}
                                    keyboardType="default"
                                    autoCompleteType="off"
                                    autoCapitalize="none"
                                    maxLength={50}
                                    value={username}
                                    multiline={false}
                                    onChange={(value) => handleChangeText(value, 'username')}
                                />
                                <FormInput
                                    editable={true}
                                    placeholder="Email ID"
                                    source={icons.mail}
                                    containerStyle={[styles.containerStyle, { marginTop: dynamicSize(20) }]}
                                    keyboardType="email-address"
                                    autoCompleteType="off"
                                    autoCapitalize="none"
                                    maxLength={50}
                                    value={email}
                                    multiline={false}
                                    onChange={(value) => handleChangeText(value, 'email')}
                                />
                                <FormInput
                                    editable={true}
                                    placeholder="Phone Number"
                                    source={icons.call}
                                    containerStyle={[styles.containerStyle, { marginTop: dynamicSize(20) }]}
                                    keyboardType="phone-pad"
                                    autoCompleteType="off"
                                    autoCapitalize="none"
                                    maxLength={50}
                                    value={phoneNumber}
                                    multiline={false}
                                    onChange={(value) => handleChangeText(value, 'phoneNumber')}
                                />
                                <FormInput
                                    editable={true}
                                    placeholder="Password"
                                    source={icons.passwordLock}
                                    containerStyle={[styles.containerStyle, { marginTop: dynamicSize(20) }]}
                                    keyboardType="default"
                                    autoCompleteType="off"
                                    autoCapitalize="none"
                                    maxLength={50}
                                    value={password}
                                    multiline={false}
                                    onChange={(value) => handleChangeText(value, 'password')}
                                />
                                <PrimaryButtonWithImage
                                    buttonSize={{
                                        width: '100%',
                                        height: dynamicSize(45),
                                        backgroundColor: COLORS.primary5,
                                        justifyContent: 'space-between'
                                    }}
                                    imageStyle={{
                                        height: dynamicSize(12),
                                        width: dynamicSize(12),
                                        paddingRight: dynamicSize(80)
                                    }}
                                    buttonText={{
                                        ...FONTS.body5,
                                        fontWeight: '600',
                                        paddingLeft: dynamicSize(30)
                                    }}
                                    source={icons.rightArrow}
                                    style={{
                                        backgroundColor: COLORS.primary5,
                                        marginTop: dynamicSize(20),
                                        borderRadius: dynamicSize(20)
                                    }}
                                >
                                    LOGIN
                                </PrimaryButtonWithImage>
                            </KeyboardAvoidingScrollView>
                            {/* <TouchableOpacityWithImage
                              
                                source={icons.lock}
                                style={{
                                    justifyContent: 'center',
                                    marginTop: dynamicSize(10),
                                }}
                                imageStyle={{
                                    width: dynamicSize(17),
                                    height: dynamicSize(17)
                                }}
                                textStyle={{
                                    ...FONTS.h5,
                                    fontWeight: '600',
                                    color: COLORS.gray,
                                    marginLeft: dynamicSize(10)
                                }}
                            >
                                Forgot Password?
                            </TouchableOpacityWithImage> */}
                        </View>
                        <View style={{
                            width: '100%',
                            height: dynamicSize(75),
                            backgroundColor: COLORS.gray15,
                            marginTop: dynamicSize(40)
                        }}>
                            <View style={{
                                marginHorizontal: dynamicSize(40),
                                marginVertical: dynamicSize(25),
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text
                                    style={[styles.text, { textAlign: 'left', ...FONTS.body5, marginTop: 0 }]}
                                >
                                    Already Have An Account? </Text>
                                <TouchableLink
                                    onPress={() => navigation.navigate('login')}
                                    textStyle={{
                                        ...FONTS.body5,
                                        color: COLORS.primary3,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    sign In
                                </TouchableLink>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    text: {
        ...FONTS.body4,
        fontWeight: '500',
        color: COLORS.gray,
        textAlign: 'center',
        marginTop: dynamicSize(15),
    },
    containerStyle: {
        width: '100%',
        height: dynamicSize(45),
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: dynamicSize(20),
        justifyContent: 'center'
    }
})

export default Login;