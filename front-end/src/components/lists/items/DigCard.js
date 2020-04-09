import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../../constants/Colors';
import RoundButton from '../../RoundButton';
import { Context } from '../../../context/cartContext';

const DigCard = (item, navigation) => {
    const { addToCart } = useContext(Context);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text
                    style={styles.artistText}
                    numberOfLines={1}
                >
                    {item.artist}
                </Text>
                <Text
                    style={styles.titleText}
                    numberOfLines={1}
                >
                    {item.title}
                </Text>
            </View>

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

            <View style={styles.buttonContainer}>
                <RoundButton title='See Details' onPress={() => navigation.push('Details', { item })} />
                <RoundButton title='+ Add to Cart' onPress={addToCart(item.release_id)} />
            </View>
        </View>
    );
};

export default DigCard;

const styles = EStyleSheet.create({
    container: {
        backgroundColor: Colors.cardGray,
    },
    textContainer: {
        paddingVertical: '5rem',
        paddingHorizontal: '15rem'
    },
    artistText: {
        fontSize: '20rem',
        color: Colors.darkBlue
    },
    titleText: {
        fontSize: '25rem',
        color: Colors.darkBlue
    },
    imageContainer: {
        width: '100%',
        height: '300rem'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingVertical: '10rem',
        paddingHorizontal: '20rem',
        justifyContent: 'space-between',
    }
});
