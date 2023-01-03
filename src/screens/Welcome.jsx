import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
       <Image style={styles.logo} source={{ uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1672664025/favicon_jffe70.png'}} />
        <Text style={styles.title}>TravelBliss</Text>
        <Text style={styles.subtitle}>Let's go make some memories</Text>
        {/* started button */}
        <TouchableOpacity onPress={() => navigation.navigate('Destinations')}>
            <Text style={styles.startedButton}>
                Get Started
            </Text>
        </TouchableOpacity >

        {/* status bar */}
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6279e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 1,
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  logo : {
    width: 100,
    height: 110,
  },
  title: {
    marginTop: 5,
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },
  startedButton: {
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#34d399',
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 15,
    width: 130,
    textAlign: 'center',
    marginHorizontal: 'auto',
  },
});
