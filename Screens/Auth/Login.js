import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView,Linking } from 'react-native';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { TextInput, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import FormInput from '../../components/FormInput';
import PaperFormInput from '../../components/PaperFormInput';
import PrimaryButtonWithImage from '../../components/PrimaryButtonWithImage';
import TouchableOpacityWithImage from '../../components/TouchableOpacityWithImage';
import { COLORS, FONTS, icons, images } from '../../constants';
import { login } from '../../redux/actions/authAction';
import { dynamicSize } from '../../utils/dimension.style';
import { authorize } from 'react-native-app-auth';
import { useEffect } from 'react';
import axios from 'axios';
const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [accessToken, setAccessToken] = useState(null);
    // console.log('Access',accessToken)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData
    const clientId = `0wAiq2wVOU3dMO5zxLOGUYrUJaec9DJYkDtFlJt8`
    const redirectUri = `project://com.project`
    const clientSecret = `zZYGe5GXgayZKUh72rq5IiFujC0vb9eBW1wxuDio`
    function handleChangeText(value, label) {
        setFormData({ ...formData, [label]: value })
    }

    // useEffect(async () => {
    //     const config = {
    //         issuer: 'https://secure.splitwise.com/oauth/authorize',
    //         clientId: '0wAiq2wVOU3dMO5zxLOGUYrUJaec9DJYkDtFlJt8',
    //         redirectUrl: 'http://equaze.in/home',
    //         scopes: ['profile,list'],
    //     };

    //     const result = await authorize(config);
    //     console.log('result', result)
    // }, [])
const second=async()=>{
    const config = {
        clientId: clientId,
        clientSecret: clientSecret,
        redirectUrl: redirectUri, //note: path is required
        scopes: ['expense', 'login'], // whatever scopes you configured in Uber OAuth portal
        serviceConfiguration: {
          authorizationEndpoint: 'https://secure.splitwise.com/oauth/authorize',
          tokenEndpoint: 'https://secure.splitwise.com/oauth/token',
        },
  
      };
      
      // Log in to get an authentication token
      const authState = await authorize(config);
    //   console.log('authState...',authState)
      // Refresh token
      const refreshedState = await refresh(config, {
        refreshToken: authState.refreshToken,
      });
    //   console.log('refersss...',refreshedState)
}

    const handleLogin = async () => {
        try {
            // Step 1: Redirect the user to the authorization endpoint
            const authorizeUrl = `https://secure.splitwise.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
            Linking.openURL(authorizeUrl);
            // Step 2: Handle the redirect back to the app
            const redirectData = await Linking.getInitialURL();
            const code = extractCodeFromRedirect(redirectData);
            // Step 3: Exchange the authorization code for an access token
            const { data } = await axios.post('https://secure.splitwise.com/oauth/token', {
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                code,
                grant_type: 'authorization_code'
            });
            setAccessToken(data);
        } catch (error) {
            // console.error('fddsfsfs',error);
        }
    }
    

    function handleSubmit() {
        var loginData = {
            username: username,
            password: password,

        };
        // console.log(loginData)
        dispatch(login({
            loginData,
            onSuccess: data => {
                if (data.output?.data?.token != undefined) {
                    // AsyncStorage.setItem('token', data.output?.data?.token).then(() => {
                    navigation.navigate('DashBoard');
                    // <RootNavigator/>
                    // });

                    showToast(toast, constants.toastOptions.SUCCESS, 'Log in successful')
                    //  navigation.navigate('dashboard')
                }
                else {
                    showToast(toast, constants.toastOptions.ERROR, 'Invalid username and Password')

                }

            },
            onFailure: error => {
                showToast(toast, constants.toastOptions.ERROR, ErrorCodeMessages(error))
            }
        })
        );


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
                                Welcome Back!
                            </Title>
                            <Text
                                style={styles.text}
                            >Login To create survey Form</Text>
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
                                    onPress={second}
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
                            <TouchableOpacityWithImage
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
                            </TouchableOpacityWithImage>
                        </View>
                        <View style={{
                            width: '100%',
                            height: dynamicSize(160),
                            backgroundColor: COLORS.gray15,
                            marginTop: dynamicSize(30)
                        }}>
                            <View style={{ marginHorizontal: dynamicSize(40), marginVertical: dynamicSize(20) }}>
                                <Text
                                    style={[styles.text, { textAlign: 'center', ...FONTS.body5 }]}
                                >Need To Create An Account</Text>
                                <PrimaryButtonWithImage
                                    onPress={() => navigation.navigate('createAccount')}
                                    buttonSize={{
                                        width: '100%',
                                        height: dynamicSize(45),
                                        backgroundColor: COLORS.red1,
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
                                        backgroundColor: COLORS.red1,
                                        marginTop: dynamicSize(20),
                                        borderRadius: dynamicSize(20)
                                    }}
                                >
                                    SIGN UP
                                </PrimaryButtonWithImage>
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