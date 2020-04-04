import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

const SquareButton = ({ disabled, onPress, title }) => {
    return (
        disabled
        ? <TouchableOpacity style={styles.buttonDisabled} onPress={onPress}>
            <Text style={styles.buttonDisabledText}>{title}</Text>
        </TouchableOpacity>

        : <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default SquareButton;

const styles = StyleSheet.create({
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
    },
    buttonDisabled: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: Colors.darkBlue,
        height: 45,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    buttonDisabledText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
});
