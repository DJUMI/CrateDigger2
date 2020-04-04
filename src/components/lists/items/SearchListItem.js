import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';

const SearchListItem = ({ item }, navigation) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.push('Details', { item })}
        >
            <View style={styles.itemContainer}>
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
                <View style={styles.textContainer}>
                    <Text style={styles.text} numberOfLines={1}>{item.artist}</Text>
                    <Text style={styles.titleText} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.text} numberOfLines={1}>{item.label}</Text>
                    <Text style={styles.text} numberOfLines={1}>{item.format}</Text>
                </View>

                <View style={styles.icon}>
                    <Entypo name='chevron-thin-right' size={40} color={Colors.nearWhite} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SearchListItem;

const styles = StyleSheet.create({
    container: {
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: Colors.darkBlue,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.nearWhite
    },
    image: {
        borderRadius: 2,
        height: 90,
        width: 90,
        marginLeft: 5,
        alignSelf: 'center'
    },
    textContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 5,
        height: 90,
        width: 240
    },
    text: {
        fontSize: 15,
        padding: 1,
        color: Colors.nearWhite
    },
    titleText: {
        fontSize: 20,
        padding: 1,
        color: Colors.nearWhite
    },
    icon: {
        justifyContent: 'center',
        height: 90,
        marginRight: 5
    }
});
