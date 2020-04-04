import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const DetailsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>DetailsScreen</Text>
            <Button title="Go to details" onPress={() => {navigation.navigate('Details')}} />
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
