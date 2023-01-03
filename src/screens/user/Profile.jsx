import { StyleSheet, ScrollView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomNavigations from '../../components/BottomNavigations'
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

export default function Profile({navigation}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSubmit = () => {
        console.log('handleSubmit')
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(passwordConfirmation)
    }

    useEffect(() => {
        // set navigation options
        navigation.setOptions({
          headerStyle: { 
            backgroundColor: '#6279e8'
          }, 
          headerTintColor: '#fff',
        });
    
    }, [navigation])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView>
                {/* <Text style={styles.text}>Profile</Text> */}
                <View style={styles.centeredImage}>
                    <Image source={{ uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1672662639/icon-boy_kutd1s.png' }} style={styles.imageProfile} />
                </View>
                <View style={styles.form}>
                    <TextInput value={name} onChangeText={setName} style={styles.textInput} placeholder="Name" textContentType="Name" />
                    <TextInput value={email} onChangeText={setEmail} style={styles.textInput} placeholder="Email Address" textContentType="emailAddress" />
                    <TextInput value={password} onChangeText={setPassword} style={styles.textInput} placeholder="Password" textContentType="password" />
                    <TextInput value={passwordConfirmation} onChangeText={setPasswordConfirmation} style={styles.textInput} placeholder="Password Confirmation" textContentType="password" />
                    <TouchableOpacity onPress={() => {handleSubmit()} }>
                        <Text style={styles.updateButton}>
                            Update Profile
                        </Text>
                    </TouchableOpacity >
                </View>

            </ScrollView>
            {/* bottom navigation */}
            <BottomNavigations screen="profile" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 90,
        
    },
    text : {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    centeredImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginTop: 30,
    },
    imageProfile: {
        width: 100,
        height: 80,
        marginHorizontal: 'auto',
    },
    form: {
        marginTop: 15,
    },
    textInput: {
        marginTop: 15,
        borderRadius: 5,
        color: 'black',
        paddingVertical: 12,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        paddingHorizontal: 15,
    },
    updateButton: {
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#34d399',
        color: 'white',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15,
        width: 150,
        textAlign: 'center',
    },
});