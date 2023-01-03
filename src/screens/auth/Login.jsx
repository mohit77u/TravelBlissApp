import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react'

export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        
    }
  return (
    <View style={styles.container}>
        {/* status bar */}
        <StatusBar style="auto" />

        <Image style={styles.logo} source={{uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1672664025/favicon_jffe70.png'}} />
        <Text style={styles.text}>TravelBliss</Text>
        <Text style={styles.tagline}>Let's go make some memories</Text>

        <View style={styles.form}>
            <TextInput value={email} onChangeText={setEmail} style={styles.textInput} placeholder="Email address" textContentType="emailAddress" />
            <TextInput value={password} onChangeText={setPassword} style={styles.textInput} placeholder="Password" textContentType="password" />
            <TouchableOpacity onPress={() => {handleSubmit()} }>
                <Text style={styles.loginButton}>
                    Login Now
                </Text>
            </TouchableOpacity >

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotText}>
                    Forgotten Password?
                </Text>
            </TouchableOpacity >

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.secondaryText}>
                    Don't have an account? Sign Up
                </Text>
            </TouchableOpacity >

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6279e8',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'relative',
    },
    logo : {
        marginBottom: 5,
        width: 90,
        height: 90,
    },
    text : {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    tagline : {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'normal',
        color: 'white',
    }, 
    form: {
        marginTop: 30,
    },
    textInput: {
        marginTop: 15,
        borderRadius: 50,
        color: 'black',
        paddingHorizontal: 18,
        paddingVertical: 8,
        width: 250,
        backgroundColor: '#fff',
        marginHorizontal: 'auto',
        fontSize: 15,
    },
    loginButton: {
        marginTop: 15,
        borderRadius: 50,
        color: '#fff',
        paddingHorizontal: 18,
        paddingVertical: 12,
        width: 250,
        backgroundColor: '#34d399',
        marginHorizontal: 'auto',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    secondaryText : {
        marginBottom: 10,
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
    forgotText : {
        marginTop: 25,
        marginBottom: 10,
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
  });
  