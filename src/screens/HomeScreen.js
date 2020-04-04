import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';

import Colors from '../constants/Colors';
import HomeList from '../components/HomeList';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={require("../../assets/images/logo.png")} style={styles.imageContainer} />
                <HomeList title="What's New" />
                <HomeList title="What's Hot" />
                <HomeList title="New House" />
                <HomeList title="New Techno" />
                <HomeList title="New Drum N Bass" />
                <HomeList title="New Acid" />
                <HomeList title="New Hip-Hop" />
                <HomeList title="New Electro" />
                <HomeList title="New Deep House" />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue
    },
    imageContainer: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 10,
        alignSelf: 'center'
    }
});
