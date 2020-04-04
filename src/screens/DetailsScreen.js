import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View  } from 'react-native';

import Colors from '../constants/Colors';
import HomeList from '../components/lists/HomeList';
import RoundButton from '../components/RoundButton';

const DetailsScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.infoText}>{item.artist}</Text>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.infoText}>{item.label}</Text>
                    <Text style={styles.infoText}>{item.format}</Text>
                    <Text style={styles.infoText}>${parseFloat(Math.round(item.price * 100) / 100).toFixed(2)}</Text>
                    <Text style={styles.infoText}>{item.genre}</Text>
                </View>
                {item.image_url 
                    ? <Image source={{ uri: item.image_url }} style={styles.image} /> 
                    : <Image source={require('../../assets/images/vinylstock.jpg')} style={styles.image} />
                }
            </View>

            <View style={styles.buttonContainer}>
                <RoundButton title='+ Add to Cart' onPress={() => {}} />
                {item.video_url
                    ? <RoundButton title='Listen' onPress={() => {Linking.openURL(item.video_url)}} />
                    : <RoundButton disabled title='Listen' onPress={() => {}} />
                }
            </View>

            <HomeList title='More from this Artist' />
            <HomeList title='More from this Label' />
        </ScrollView>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.darkBlue
    },
    infoContainer: {
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    textContainer: {
        flex: 1,
        paddingRight: 3
    },
    infoText: {
        fontSize: 17,
        color: Colors.nearWhite
    },
    titleText: {
        fontSize: 22,
        color: Colors.nearWhite
    },
    image: {
        width: 175, 
        height: 175, 
        borderRadius: 2   
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingBottom: 15,
        paddingTop: 10,
        paddingHorizontal: 30,
        justifyContent: 'space-between'
    }
});
