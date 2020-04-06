import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../../constants/Colors';

const SearchListItem = ({ item }, navigation) => {
    return (
        <TouchableOpacity onPress={() => navigation.push('Details', { item })}>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
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
                </View>
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

const styles = EStyleSheet.create({
    container: {
        backgroundColor: Colors.darkBlue
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: Colors.darkBlue,
        paddingVertical: '5rem',
        borderBottomWidth: 1,
        borderBottomColor: Colors.nearWhite,
        height: '100rem'
    },
    imageContainer: {
        height: '100%',
        aspectRatio: 1,
        marginLeft: '5rem'

    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: '2rem',
    },
    textContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: '5rem',
        height: '100%',
        width: '64%'
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
    icon: {
        justifyContent: 'center',
        height: '100%',
        marginRight: '5rem'
    }
});
