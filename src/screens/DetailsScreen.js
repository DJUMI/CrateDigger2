import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const DetailsScreen = ({ navigation, route: { params: { title } } }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Button title="Go to details" onPress={() => { navigation.navigate('Details', { title }) }} />
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
