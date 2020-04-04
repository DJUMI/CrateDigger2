import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Colors from '../../../constants/Colors';
import RoundButton from '../../RoundButton';

const DigCard = (item, navigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text
                    style={styles.artistText}
                    numberOfLines={1}
                >
                    {item.id}
                </Text>
                <Text
                    style={styles.titleText}
                    numberOfLines={1}
                >
                    {item.title}
                </Text>
            </View>


            {item.image_url ?
                <Image
                    source={{ uri: item.image_url }}
                    style={styles.image}
                /> :
                <Image
                    source={require('../../../../assets/images/vinylstock.jpg')}
                    style={styles.image}
                />
            }
            <View style={styles.buttonContainer}>
                <RoundButton title='See Details' onPress={() => navigation.push('Details', { title: item.title })} />
                <RoundButton title='+ Add to Cart' onPress={() => { }} />
            </View>

        </View>
    );
};

export default DigCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.cardGray
    },
    textContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    artistText: {
        fontSize: 20,
        color: Colors.darkBlue
    },
    titleText: {
        fontSize: 25,
        color: Colors.darkBlue
    },
    image: {
        width: null,
        height: 300
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    }
});
