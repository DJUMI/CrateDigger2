import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const AlbumDetailsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>AlbumDetailsScreen</Text>
            <Button title="Go to details" onPress={() => {navigation.navigate('Details')}} />
        </View>
    );
};

export default AlbumDetailsScreen;

const styles = StyleSheet.create({});
