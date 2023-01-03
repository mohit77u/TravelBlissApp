import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNavigations from '../../components/BottomNavigations';
const func = require('../../components/functions');

export default function Destination({navigation}) {

    const [destinations, setDestination] = useState(func.apiDestinations)

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
            {/* main content starts */}
            <ScrollView>
                <Text style={styles.text}>Popular Destinations</Text>
                <Text style={styles.secondaryText}>"In the end, we only regret the chances we didn't take". Once the Travel bug bites there is no known antidote.</Text>

                {/* designations grid */}
                {destinations && (
                    <View style={styles.flexContainer}>
                        {destinations.map((destination,index) => (
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
            <BottomNavigations screen="destination" />

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
        marginBottom: 15,
        fontSize: 14,
        fontWeight: 'normal',
        color: 'gray',
        lineHeight: 26,
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
        // paddingHorizontal: 10,
    },
    image : {
        width: '100%',
        height: 170,
        borderRadius: 4,
        objectFit: 'cover',
    },
      imageContainerFull: {
        marginTop: 10,
        width: '100%',
        height: 200,
        borderRadius: 4,
        // paddingHorizontal: 10,
    },
    imageFull : {
        width: '100%',
        height: 200,
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
  });
  