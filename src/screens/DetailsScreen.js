import React, { useContext } from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../constants/Colors';
import MoreList from '../components/lists/MoreList';
import RoundButton from '../components/buttons/RoundButton';
import { Context as CartContext } from '../context/cartContext';
import UserContext from '../context/userContext';
import useProduct from '../hooks/useProduct';

const DetailsScreen = ({ route }) => {
    const { prodId } = route.params;
    const [product, isLoading] = useProduct(prodId);
    const { addToCart } = useContext(CartContext);
    const user = useContext(UserContext);
    
    
    return (
        isLoading
            ? <View style={styles.loadingContainer}>
            </View>
            : <ScrollView style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.infoText}>{product.artist}</Text>
                        <Text style={styles.titleText}>{product.title}</Text>
                        <Text style={styles.infoText}>{product.label}</Text>
                        <Text style={styles.infoText}>{product.format}</Text>
                        <Text style={styles.infoText}>${parseFloat(Math.round(product.price * 100) / 100).toFixed(2)}</Text>
                        <Text style={styles.infoText}>
                            {product.styles
                                ? product.styles.join(', ')
                                : product.styles
                            }
                        </Text>
                    </View>
                    <View style={styles.imageContainer}>
                        {product.image_url
                            ? <Image source={{ uri: product.image_url }} style={styles.image} />
                            : <Image source={require('../../assets/images/vinylstock.jpg')} style={styles.image} />
                        }
                    </View>

                </View>

                <View style={styles.buttonContainer}>
                    <RoundButton 
                        title='+ Add to Cart' 
                        onPress={() => {addToCart(user, product)}} />
                    {product.video_url
                        ? <RoundButton title='Listen' onPress={() => { Linking.openURL(product.video_url) }} />
                        : <RoundButton disabled title='Listen' onPress={() => { }} />
                    }
                </View>

                <MoreList title='More from this Artist' type='artist' search={product.artist} id={product.release_id} />
                <MoreList title='More from this Label' type='label' search={product.label} id={product.release_id} />
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
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.darkBlue
    }
});
