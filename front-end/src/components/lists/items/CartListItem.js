import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../../constants/Colors';

const CartListItem = ({ item }, navigation, removeFromCart) => {

    return (
        <Swipeable rightButtons={[
            <View style={styles.rightButtonContainer}>
                <TouchableOpacity onPress={() => removeFromCart(item)}>
                    <Ionicons
                        name='ios-trash'
                        color='#FF0000'
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        ]}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.infoContainer}
                    onPress={() => navigation.push('Details', { item })}
                >
                    <View style={styles.imageContainer}>
                        {item.image_url
                            ? <Image
                                source={{ uri: item.image_url }}
                                style={styles.image}
                            />
                            : <Image
                                source={require('../../../../assets/images/vinylstock.jpg')}
                                style={styles.image}
                            />
                        }
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>{item.artist}</Text>
                        <Text style={styles.titleText} numberOfLines={1}>{item.title}</Text>
                        <Text style={styles.text} numberOfLines={1}>{item.format}</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.priceContainer}>
                    <View style={styles.numContainer}>
                        <Text style={styles.priceText}>
                            ${parseFloat(Math.round(item.price * 100) / 100).toFixed(2)}
                        </Text>
                    </View>
                </View>
            </View>
        </Swipeable>
    );
};

export default CartListItem;

const styles = EStyleSheet.create({
    rightButtonContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 23,
        borderBottomColor: Colors.nearWhite,
        borderBottomWidth: 1
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: Colors.darkBlue,
        paddingVertical: '5rem',
        borderBottomWidth: 1,
        borderBottomColor: Colors.nearWhite,
        height: '100rem'
    },
    infoContainer: {
        flex: 2,
        flexDirection: 'row',
        height: '100%'
    },
    imageContainer: {
        height: '100%',
        aspectRatio: 1,
        marginLeft: '5rem'
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: '2rem'
    },
    textContainer: {
        height: '100%',
        width: '67%',
        justifyContent: 'center',
        paddingLeft: '5rem'
    },
    text: {
        fontSize: '15rem',
        padding: '1rem',
        color: Colors.nearWhite
    },
    titleText: {
        fontSize: '20rem',
        padding: '1rem',
        color: Colors.nearWhite
    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width:'25%'
    },
    numContainer: {
        backgroundColor: Colors.nearWhite,
        paddingHorizontal: '3rem',
        borderRadius: '2rem'
    },
    priceText: {
        fontSize: '20rem',
        color: Colors.darkBlue
    }
});