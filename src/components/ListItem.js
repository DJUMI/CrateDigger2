import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';

const ListItem = ( { item }, navigation ) => {
    
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Details')}
        >
            {item.image_url
                ? <Image source={{ uri: item.image_url }} style={styles.image} />
                : <Image source={require('../../assets/images/vinylstock.jpg')} style={styles.image} />
            }

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

export default ListItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        paddingTop: 5
    },
    image: {
        borderRadius: 2,
        width: 150,
        height: 150
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        paddingHorizontal: 1,
        paddingVertical: 7
    },
    title: {
        fontSize: 15,
        color: Colors.nearWhite
    }
});
