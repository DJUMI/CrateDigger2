import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../constants/Colors';

const roundButton = ({ disabled, onPress, title }) => {
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

export default roundButton;

const styles = EStyleSheet.create({
    button: {
        backgroundColor: Colors.seaGreen,
        height: '45rem',
        width: '140rem',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50rem'
    },
    buttonText: {
        fontSize: '15rem',
        fontWeight: 'bold',
        color: Colors.nearWhite
    },
    buttonDisabled: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: Colors.darkBlue,
        height: '45rem',
        width: '140rem',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50rem'
    },
    buttonDisabledText: {
        fontSize: '15rem',
        fontWeight: 'bold',
        color: 'black'
    }
});
