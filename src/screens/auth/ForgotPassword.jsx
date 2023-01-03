import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function ForgotPassword({navigation}) {
  
    const [email, setEmail] = useState('')

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
            <TextInput value={email} onChangeText={setEmail} style={styles.textInput} placeholder="Email Address" textContentType="emailAddress" />
            <TouchableOpacity onPress={() => {handleSubmit()} }>
                <Text style={styles.ForgotPasswordButton}>
                    Forgot Password
                </Text>
            </TouchableOpacity >

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.login}>
                    Back to login
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
    //   position: 'relative',
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
    ForgotPasswordButton: {
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
    login : {
        marginTop: 25,
        marginBottom: 10,
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
  });
  