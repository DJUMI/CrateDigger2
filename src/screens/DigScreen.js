import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../constants/Colors';
import DATA from '../constants/DATA';
import DigCard from '../components/lists/items/DigCard';

const DigScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Genre</Text>
            <View>
                <Swiper
                    backgroundColor={Colors.darkBlue}
                    cardHorizontalMargin={10}
                    cards={DATA}
                    renderCard={(card) => DigCard(card, navigation)}
                    stackSize={2}
                    cardVerticalMargin={10}
                />
            </View>

        </SafeAreaView>
    );
};

export default DigScreen;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue
    },
    header: {
        color: Colors.nearWhite,
        fontSize: '20rem',
        fontWeight: 'bold',
        paddingTop: '30rem',
        alignSelf: 'center',
    }
});
