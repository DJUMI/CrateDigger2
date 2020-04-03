import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


const SearchScreen = ({ navigation }) => {
    return (
        <View>
            <Text>SearchScreen</Text>
            <Button title="Go to details" onPress={() => {navigation.navigate('Details')}} />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({});
