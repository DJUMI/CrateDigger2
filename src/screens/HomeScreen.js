import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../constants/Colors';
import HomeList from '../components/lists/HomeList';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={require("../../assets/images/logo.png")} style={styles.image} />
                </View>
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

const styles = EStyleSheet.create({
    container: {
        backgroundColor: Colors.darkBlue,
    },
    imageContainer: {
        width: '27%',
        aspectRatio: 1,
        alignSelf: 'center',
        marginTop: 10
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: '50rem'
    }
});
