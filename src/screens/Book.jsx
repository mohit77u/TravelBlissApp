import { StyleSheet, ScrollView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomNavigations from '../components/BottomNavigations'
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

export default function Book({navigation}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')
    const [destination, setDestination] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = () => {
       console.log('handleSubmit')
       console.log(name)
       console.log(email)
       console.log(state)
       console.log(destination)
       console.log(phone)
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
                {/* <Text style={styles.text}>Book Now</Text> */}
                <View style={styles.centeredImage}>
                    <Image source={{uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1672662639/calendar_y6bruc.png'}} style={styles.imageCalendar} />
                </View>
                <View style={styles.form}>
                    <TextInput value={name} onChangeText={setName} style={styles.textInput} placeholder="Name" textContentType="name" />
                    <TextInput value={email} onChangeText={setEmail} style={styles.textInput} placeholder="Email Address" textContentType="emailAddress" />
                    <TextInput value={destination} onChangeText={setDestination} style={styles.textInput} placeholder="Destination" textContentType="addressCityAndState" />
                    <TextInput value={state} onChangeText={setState} style={styles.textInput} placeholder="State" textContentType="addressState" />
                    <TextInput value={phone} onChangeText={setPhone} style={styles.textInput} placeholder="Phone Number" keyboardType="phone-pad" maxLength={10} textContentType="telephoneNumber" />
                    <TouchableOpacity onPress={() => {handleSubmit()} }>
                        <Text style={styles.bookNowButton}>
                            Book Now
                        </Text>
                    </TouchableOpacity >

                </View>
            </ScrollView>

            {/* bottom navigation */}
            <BottomNavigations screen="book" />
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
    imageCalendar: {
        width: 100,
        height: 80,
        marginHorizontal: 'auto',
    },
    form: {
        marginTop: 5,
        paddingVertical: 10,
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
    bookNowButton: {
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#34d399',
        color: 'white',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15,
        width: 120,
        textAlign: 'center',
    },
});