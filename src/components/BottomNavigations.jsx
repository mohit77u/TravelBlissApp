import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";
var width = Dimensions.get('window').width;


export default function BottomNavigations({screen}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Destinations')}>
                <Icon
                    color={screen === 'destination' ? "#34d399" : "#fff"}
                    name="home"
                    raised
                    size={35}
                    type="material"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Search')}>
                <Icon
                    color={screen === 'search' ? "#34d399" : "#fff"}
                    name="search"
                    raised
                    size={35}
                    type="material"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Icon
                    color={screen === 'dashboard' ? "#34d399" : "#fff"}
                    name="dashboard"
                    raised
                    size={30}
                    type="material"
                    style={styles.dashboardMenuIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Book')}>
                <Icon
                    color={screen === 'book' ? "#34d399" : "#fff"}
                    name="event"
                    raised
                    size={35}
                    type="material"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Profile')}>
                <Icon
                    color={screen === 'profile' ? "#34d399" : "#fff"}
                    name="person"
                    raised
                    size={35}
                    type="material"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: width,
        height: 70,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6279e8',
    },
    menu: {
        paddingHorizontal: 10,
    },
    dashboardMenuIcon: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#34d399',
        borderRadius: 50,
    },
});