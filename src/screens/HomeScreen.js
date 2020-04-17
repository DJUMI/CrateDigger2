import React, { useContext, useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../constants/Colors';
import HomeList from '../components/lists/HomeList';
import { Context as CartContext } from '../context/cartContext';
import UserContext from '../context/userContext';

const HomeScreen = () => {
    const { loadCart } = useContext(CartContext);
    const user = useContext(UserContext);

    useEffect(() => {
        if (loadCart) {
            loadCart(user);
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../../assets/images/logo.png")} style={styles.image} />
                    </View>
                    <HomeList title="What's New" type="new" />
                    {/* <HomeList title="Staff Picks" type="staff picks" /> */}
                    <HomeList title="New House" type="genre" genre="house" />
                    <HomeList title="New Techno" type="genre" genre="techno" />
                    <HomeList title="New Drum N Bass" type="genre" genre="drum n bass" />
                    <HomeList title="New Acid" type="genre" genre="acid" />
                    <HomeList title="New Hip-Hop" type="genre" genre="hop" />
                    <HomeList title="New Electro" type="genre" genre="electro" />
                    <HomeList title="New Deep House" type="genre" genre="deep house" />
                    <HomeList title="New Downtempo" type="genre" genre="downtempo" />
                    <HomeList title="New Disco" type="genre" genre="disco" />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = EStyleSheet.create({
    container: {
        backgroundColor: Colors.darkBlue,
    },
    imageContainer: {
        width: '27%',
        aspectRatio: 1,
        alignSelf: 'center',
        marginTop: 10
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: '50rem'
    }
});
