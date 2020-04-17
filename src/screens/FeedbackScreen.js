import React, { useState } from 'react'
import { Alert, Keyboard, TouchableWithoutFeedback, TextInput, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';


import Colors from '../constants/Colors';
import SquareButton from '../components/buttons/SquareButton';

const FeedbackScreen = () => {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('feedback')
            .insertOne({ dateAdded: new Date(), body: value })
            .then(() => {
                Alert.alert('Thank you for your feedback!');
                setValue('');
            })
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput
                    blurOnSubmit={true}
                    style={styles.input}
                    multiline={true}
                    onChangeText={text => setValue(text)}
                    textAlignVertical='top'
                    value={value}
                />
                <View style={styles.buttonContainer}>
                    <SquareButton
                        title='Submit Feedback'
                        onPress={handleSubmit}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FeedbackScreen

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue,
        paddingTop: '50rem',
        padding: '15rem'
    },
    input: {
        flex: 1,
        backgroundColor: Colors.nearWhite,
        justifyContent: 'flex-start',
        padding: '10rem',
        borderRadius: '5rem'
    },
    buttonContainer: {
        flex: 2,
        paddingBottom: '15rem',
        paddingTop: '10rem',
        paddingHorizontal: '30rem',
        alignItems: 'center'
    },
    text: {
        color: Colors.darkBlue,
        fontSize: '15rem'
    }
})
