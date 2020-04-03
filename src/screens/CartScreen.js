import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const CartScreen = ({ navigation }) => {
    return (
        <View>
            <Text>CartScreen</Text>
            <Button title="Go to details" onPress={() => {navigation.navigate('Details')}} />
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({});
