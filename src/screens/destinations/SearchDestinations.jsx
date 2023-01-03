// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
// import BottomNavigations from '../../components/BottomNavigations';
// import { useEffect, useState } from 'react';
// const func = require('../../components/functions');

// export default function SearchDestinations({navigation}) {

//     const [destinations, setDestination] = useState(func.apiDestinations)
//     const [search, setSearch] = useState('');
//     const [filteredDestinations, setfilteredDestinations] = useState([]);

//     // search
//     const SubmitSearch = (value) => {
//         console.log(value)
//         // console.log(destinations)
//         setSearch(value);
//         let tempResults = [];
//         for(let i = 0; i < destinations.length; i++) {
//         if(destinations[i].name.toLowerCase().includes(value.toLowerCase())){
//             tempResults.push(destinations[i])
//         }
//         }
//         setfilteredDestinations(tempResults)
//         console.log(filteredDestinations)
//     }

//     useEffect(() => {
//         // set navigation options
//         navigation.setOptions({
//         headerStyle: { 
//             backgroundColor: '#6279e8'
//         }, 
//         headerTintColor: '#fff',
//         });

//     }, [navigation])

//   return (
//     <View style={styles.container}>
//         {/* status bar */}
//         <StatusBar style="auto" />
//           {/* <Text style={styles.text}>Search Destinations</Text> */}
//         {/* <TextInput onChangeText={SubmitSearch} style={styles.input} placeholder="Name" textContentType="name" />
//         <View>
//             <Text style={styles.secondaryText}>{search && ( filteredDestinations.length + ' Search Results for: ' +  search )}</Text>
//         </View> */}

//         <ScrollView>
//             {/* designations grid */}
//             {destinations && (
//                 <View style={styles.flexContainer}>
//                     {destinations.map((destination,index) => (
//                         <TouchableOpacity style={styles.imageContainer} key={index} onPress={() => navigation.navigate('Single', {destination: destination, title: destination.name})}>
//                             <Image source={{ uri: destination.featured_image}} style={styles.image} />
//                             <View style={styles.bottomImageDetails} blurRadius={3}>
//                                 <Text style={styles.bottomText}>{destination.name}</Text>
//                             </View>
//                         </TouchableOpacity>
//                     ))}
//                 </View>
//             )}
//         </ScrollView>

//         {/* bottom navigation */}
//         <BottomNavigations screen="search" />
//       </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       paddingHorizontal: 20,
//       paddingTop: 10,
//       paddingBottom: 90,
//     },
//     text : {
//       marginBottom: 10,
//       marginTop: 10,
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//     flexContainer: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//     },
//     secondaryText: {
//       marginBottom: 5,
//       marginTop: 10,
//       fontSize: 16,
//       fontWeight: 'normal',
//       color: '#000',
//     },
//     imageContainer: {
//       marginTop: 10,
//       width: '49%',
//       height: 200,
//       borderRadius: 4,
//       // paddingHorizontal: 10,
//     },
//     image : {
//       width: '100%',
//       height: 200,
//       borderRadius: 4,
//       objectFit: 'cover',
//     },
//     bottomImageDetails: {
//       position: 'absolute',
//       left: 0,
//       bottom: 10,
//       backgroundColor: 'rgba(0,0,0,0.3)',
//       width: '100%',
//       paddingVertical: 9,
//       paddingHorizontal: 15,
//     },
//     bottomText: {
//       fontSize: '18px',
//       fontWeight: '600',
//       color: '#fff',
//     },
//     input: {
//       marginTop: 15,
//       borderRadius: 5,
//       color: 'black',
//       paddingVertical: 12,
//       width: '100%',
//       backgroundColor: '#fff',
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderStyle: 'solid',
//       paddingHorizontal: 15,
//     }
//   });
  

import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNavigations from '../../components/BottomNavigations';
const func = require('../../components/functions');

export default function SearchDestinations({navigation}) {

    const [destinations, setDestination] = useState(func.apiDestinations)
    const [search, setSearch] = useState('');
    const [filteredDestinations, setfilteredDestinations] = useState([]);

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
  