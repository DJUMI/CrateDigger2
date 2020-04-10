import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import Colors from '../../../constants/Colors';

const HomeListItem = ({ item }, navigation) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.push('Details', { item })}
        >
            <View style={styles.imageContainer}>
                {item.image_url
                    ? <Image source={{ uri: item.image_url }} style={styles.image} />
                    : <Image source={require('../../../../assets/images/vinylstock.jpg')} style={styles.image} />
                }
            </View>

            <View style={styles.titleContainer}>
                <Text
                    numberOfLines={1}
                    style={styles.title}
                >
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HomeListItem;

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '15rem',
        paddingTop: '5rem',
        width: '150rem'
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 1
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: '2rem'
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: '7rem'
    },
    title: {
        fontSize: '15rem',
        color: Colors.nearWhite
    }
});
