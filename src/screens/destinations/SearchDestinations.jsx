import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNavigations from '../../components/BottomNavigations';
import axios from 'axios';
// const func = require('../../components/functions');

export default function SearchDestinations({navigation}) {

    const [destinations, setDestinations] = useState([])
    const [search, setSearch] = useState('');
    const [filteredDestinations, setfilteredDestinations] = useState([]);

    // get destinations
    const getDestinations = () => {                           
        axios.get('https://travelblissbackend-production.up.railway.app/api/destinations')
        .then(function (response) {
            setDestinations(response.data.destinations)
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    // search
    const SubmitSearch = (value) => {
        setSearch(value);
        let tempResults = [];
        for(let i = 0; i < destinations.length; i++) {
            if(destinations[i].name.toLowerCase().includes(value.toLowerCase())){
                tempResults.push(destinations[i])
            }
        }
        setfilteredDestinations(tempResults)
    }

    useEffect(() => {
        // set navigation options
        navigation.setOptions({
          headerStyle: { 
            backgroundColor: '#6279e8'
          }, 
          headerTintColor: '#fff',
        });

        getDestinations();
    
      }, [navigation])

    return (
        <View style={styles.container}>
            {/* status bar */}
            <StatusBar style="auto" />

            {/* search box */}
            <TextInput onChangeText={SubmitSearch} style={styles.textInput} placeholder="Type destination name..." textContentType="name" />

            {search && ( 
                <Text style={styles.secondaryText}>{filteredDestinations.length + ' Search Results for: ' +  search }</Text>
             )}

            {/* main content starts */}
            <ScrollView>

                {/* designations grid */}
                {filteredDestinations && (
                    <View style={styles.flexContainer}>
                        {filteredDestinations.map((destination,index) => (
                            <TouchableOpacity style={styles.imageContainer} key={index} onPress={() => navigation.navigate('Single', {destination: destination, title: destination.name})}>
                                <Image source={{ uri: destination.featured_image}} style={styles.image} />
                                <View style={styles.bottomImageDetails} blurRadius={3}>
                                    <Text style={styles.bottomText}>{destination.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </ScrollView>

            {/* bottom navigations */}
            <BottomNavigations screen="search" />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 60,
    },
    text : {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    secondaryText: {
        marginBottom: 5,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'normal',
        color: '#000',
    },
    flexContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        marginTop: 10,
        width: '49%',
        height: 200,
        borderRadius: 4,
    },
    image : {
        width: '100%',
        height: 170,
        borderRadius: 4,
        objectFit: 'cover',
    },
    bottomImageDetails: {
        position: 'absolute',
        left: 0,
        bottom: 30,
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '100%',
        paddingVertical: 9,
        paddingHorizontal: 15,
        borderRadius: 4,
    },
    bottomText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
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
});
  