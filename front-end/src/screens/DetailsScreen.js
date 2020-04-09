import React from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


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
                <View style={styles.imageContainer}>
                    {item.image_url
                        ? <Image source={{ uri: item.image_url }} style={styles.image} />
                        : <Image source={require('../../assets/images/vinylstock.jpg')} style={styles.image} />
                    }
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <RoundButton title='+ Add to Cart' onPress={() => { }} />
                {item.video_url
                    ? <RoundButton title='Listen' onPress={() => { Linking.openURL(item.video_url) }} />
                    : <RoundButton disabled title='Listen' onPress={() => { }} />
                }
            </View>

            <HomeList title='More from this Artist' />
            <HomeList title='More from this Label' />
        </ScrollView>
    );
};

export default DetailsScreen;

const styles = EStyleSheet.create({
    container: {
        backgroundColor: Colors.darkBlue
    },
    infoContainer: {
        margin: '5rem',
        paddingHorizontal: '10rem',
        paddingVertical: '5rem',
        flexDirection: 'row'
    },
    textContainer: {
        flex: 1,
        paddingRight: '3rem'
    },
    infoText: {
        fontSize: '17rem',
        color: Colors.nearWhite
    },
    titleText: {
        fontSize: '22rem',
        color: Colors.nearWhite
    },
    imageContainer: {
        width: '55%',
        aspectRatio: 1
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '2rem'
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingBottom: '15rem',
        paddingTop: '10rem',
        paddingHorizontal: '30rem',
        justifyContent: 'space-between'
    }
});
