import React from 'react';
import { 
    StyleSheet, 
    View,
    Button,
    Text, 
    TouchableOpacity,
    Dimensions,
    Image 
} from 'react-native';

import SignInScreen from './SignInScreen'

import { LinearGradient } from 'expo-linear-gradient'
import  MaterialIcons  from '@expo/vector-icons/MaterialIcons';


const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../images/Splash.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Tame with you</Text>
                <Text style={styles.text}>Приятный уголок</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#FF8577', '#F79329']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Войти</Text>
                            <MaterialIcons 
                                name="navigate-next"
                                color="#000"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FF8577'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });