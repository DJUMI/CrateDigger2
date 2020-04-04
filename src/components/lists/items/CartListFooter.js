import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../../../constants/Colors';
import SquareButton from '../../SquareButton';

const CartListFooter = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>$55.09</Text>
            </View>

            <View style={styles.buttonContainer}>
                <SquareButton title='Check out with Discogs' onPress={() => {}} />
            </View>
        </View>
    );
};

export default CartListFooter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingRight: 5
    },
    text: {
        fontSize: 15,
        color: Colors.nearWhite,
        paddingRight: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingBottom: 55,
        paddingTop: 10,
        paddingHorizontal: 30,
        justifyContent: 'center'
    }
});