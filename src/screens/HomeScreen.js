import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="Go to details" onPress={() => {navigation.navigate('Details')}} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
