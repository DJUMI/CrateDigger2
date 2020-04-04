import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';

import Colors from '../constants/Colors';

const CartListItem = ({ item }, navigation) => {
    return (
        <Swipeable rightButtons={[
            <View style={styles.rightButtonContainer}>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Ionicons
                        name='ios-trash'
                        color='#FF0000'
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        ]}>
            <View style={styles.itemContainer}>
                <TouchableOpacity
                    style={styles.infoContainer}
                    onPress={() => navigation.push('Details', { title: item.title })}
                >
                    {item.image_url ?
                        <Image
                            source={{ uri: item.image_url }}
                            style={styles.image}
                        /> :
                        <Image
                            source={require('../../assets/images/vinylstock.jpg')}
                            style={styles.image}
                        />
                    }

                    <View style={styles.itemTitleContainer}>
                        <Text
                            style={styles.itemOtherText}
                            numberOfLines={1}
                        >
                            {item.artist}
                        </Text>

                        <Text
                            style={styles.itemTitleText}
                            numberOfLines={1}
                        >
                            {item.title}
                        </Text>

                        <Text
                            style={styles.itemOtherText}
                            numberOfLines={1}
                        >
                            {item.format}
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.priceContainer}>
                    <View style={styles.numContainer}>
                        <Text style={styles.numText}>${parseFloat(Math.round(item.price * 100) / 100).toFixed(2)}</Text>
                    </View>
                </View>
            </View>
        </Swipeable>
    );
};

export default CartListItem;

const styles = StyleSheet.create({
    rightButtonContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 23,
        borderBottomColor: Colors.nearWhite,
        borderBottomWidth: 1
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 5,
        borderBottomColor: Colors.nearWhite,
        borderBottomWidth: 1
    },
    infoContainer: {
        flex: 2,
        flexDirection: 'row'
    },
    image: {
        borderRadius: 2,
        width: 70,
        height: 70,
        marginLeft: 5
    },
    priceContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70
    },
    numContainer: {
        backgroundColor: 'white',
        padding: 3,
        borderWidth: .5,
        borderRadius: 2
    },
    numText: {
        fontSize: 20,
        color: Colors.darkBlue
    },
    itemTitleContainer: {
        height: 70,
        justifyContent: 'center',
        paddingLeft: 5
    },
    itemOtherText: {
        fontSize: 13,
        padding: 1,
        width: 115,
        color: Colors.nearWhite
    },
    itemTitleText: {
        fontSize: 15,
        padding: 1,
        width: 115,
        color: Colors.nearWhite
    }
});