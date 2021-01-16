import React from 'react';
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';
import {StatusBar} from 'expo-status-bar'

import { LinearGradient } from 'expo-linear-gradient'
import  FontAwesome  from '@expo/vector-icons/FontAwesome';
import  Feather  from '@expo/vector-icons/Feather';

import { AuthContext } from '../components/context';

import SignUpScreen from './SignUpScreen'

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        chek_textInputChange: false,
        secureTextEntry: true
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if(val.length != 0) {
            setData({
                ...data,
                email: val,
                chek_textInputChange: true
            });
        }   else {
                setData({
                    ...data,
                    email: val,
                    chek_textInputChange: false
                });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#FF8577' barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome to taME!</Text>
            </View> 
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#FF8577"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.chek_textInputChange ? 
                    <Feather 
                        name="check-circle"
                        color="#FF8577"
                        size={20}
                    />
                    : null}
                </View>
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#FF8577"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="#FF8577"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="#FF8577"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => {signIn()}}
                        >
                            <LinearGradient
                                colors={['#FF8577', '#F79329']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {color: '#fff'}]}>Войти</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                                borderColor:'#FF8577',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#FF8577'
                            }]}>Регистрация</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FF8577'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });