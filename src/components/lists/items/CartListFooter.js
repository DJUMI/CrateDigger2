import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../../../constants/Colors';

const CartListFooter = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>$55.09</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Check out with Discogs</Text>
                </TouchableOpacity>
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
    },
    button: {
        backgroundColor: Colors.seaGreen,
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.nearWhite
    }
});