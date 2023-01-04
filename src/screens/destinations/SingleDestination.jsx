import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import BottomNavigations from '../../components/BottomNavigations';


export default function SingleDestination({route,navigation}) {
    const destination = route.params.destination;
    
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { 
          backgroundColor: '#6279e8'
        }, 
        headerTintColor: '#fff',
      });
    }, [route, navigation])

    return (
        <View style={styles.container}>
            {/* status bar */}
            <StatusBar style="auto" />
            <ScrollView>
                <Image source={{ uri: destination.featured_image}} style={styles.imageFull} />
                <Text style={styles.text}>{destination.name}</Text>
                <View style={styles.stateCategory}>
                    <Text style={styles.state}>{destination.state}</Text>
                    <Text style={styles.category}>{destination.category.replace(/_/g, " ")}</Text>
                </View>
                <Text style={styles.secondaryText}>{destination.description}</Text>
            </ScrollView>

            {/* bottom navigation */}
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
    flexContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    stateCategory: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginBottom: 20,
    },
    state : {
      fontSize: 16,
      fontWeight: 'normal',
      backgroundColor: 'rgba(52, 211, 153, 0.1)',
      color: 'rgba(52, 211, 153, 1)',
      borderRadius: 50,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    category : {
      fontSize: 16,
      fontWeight: 'normal',
      backgroundColor: 'rgba(0, 136, 255, 0.1)',
      color: 'rgba(0, 136, 255, 1)',
      borderRadius: 50,
      paddingHorizontal: 10,
      paddingVertical: 4,
      marginLeft: 10,
      textTransform: 'capitalize',
    },
    text : {
      marginBottom: 10,
      marginTop: 20,
      fontSize: 22,
      fontWeight: 'bold',
    },
    secondaryText: {
      marginBottom: 15,
      // marginTop: '10px',
      fontSize: 15,
      fontWeight: 'normal',
      color: 'gray',
      lineHeight: 26,
    },
    imageFull : {
        width: '100%',
        height: 250,
        borderRadius: 4,
        objectFit: 'cover',
        marginTop: 15,
    },
});
  