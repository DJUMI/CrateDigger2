import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const DigScreen = ({ navigation }) => {
    return (
        <View>
            <Text>DigScreen</Text>
            <Button title="Go to details" onPress={() => {navigation.navigate('Details')}} />
        </View>
    );
};

export default DigScreen;

const styles = StyleSheet.create({});
