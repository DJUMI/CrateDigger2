import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

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

const TwoSquareButtons = ({ disabled1, disabled2, onPress1, onPress2, title1, title2 }) => {
    return (
        <View style={styles.buttonContainer}>
            <SquareButton disabled={disabled1} title={title1} onPress={onPress1} /> 
            <SquareButton disabled={disabled2} title={title2} onPress={onPress2} />
        </View>
    );
}

export default TwoSquareButtons;

const styles = EStyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: '55rem',
        paddingTop: '10rem',
        paddingHorizontal: '25rem'
    },
    button: {
        backgroundColor: Colors.seaGreen,
        height: '50rem',
        width: '150rem',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5rem'
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
        height: '50rem%',
        width: '200rem%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5rem'
    },
    buttonDisabledText: {
        fontSize: '15rem',
        fontWeight: 'bold',
        color: 'black'
    }
});