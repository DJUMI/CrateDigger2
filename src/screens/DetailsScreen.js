import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View  } from 'react-native';

import Colors from '../constants/Colors';
import HomeList from '../components/HomeList';
import RoundButton from '../components/RoundButton';

const DetailsScreen = ({ route }) => {
    const { title } = route.params;

    const artist = 'Biggie Smalls';
    const label = 'Def Jam';
    const format = 'CD';
    const price = 3.55;
    const genre = 'Hip-hop';
    const image_url = '';
    const video_url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    return (
        <ScrollView style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.infoText}>{artist}</Text>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.infoText}>{label}</Text>
                    <Text style={styles.infoText}>{format}</Text>
                    <Text style={styles.infoText}>${parseFloat(Math.round(price * 100) / 100).toFixed(2)}</Text>
                    <Text style={styles.infoText}>{genre}</Text>
                </View>
                {image_url 
                    ? <Image source={{ uri: image_url }} style={styles.image} /> 
                    : <Image source={require('../../assets/images/vinylstock.jpg')} style={styles.image} />
                }
            </View>

            <View style={styles.buttonContainer}>
                <RoundButton title='+ Add to Cart' onPress={() => {}} />
                {video_url
                    ? <RoundButton title='Listen' onPress={() => {Linking.openURL(video_url)}} />
                    : <RoundButton disabled title='Listen' onPress={() => {Linking.openURL(video_url)}} />
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
