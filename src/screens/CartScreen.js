import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import CartList from '../components/lists/CartList';

const CartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.headerText}>Item</Text>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.headerText}>Price</Text>
                </View>
            </View>

            <CartList />
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: Colors.darkBlue
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 5,
        borderBottomColor: Colors.nearWhite,
        borderBottomWidth: 1
    },
    itemContainer: {
        flex: 2,
        paddingLeft: 5
    },
    priceContainer: {
        flex: 1,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: Colors.nearWhite
    }
});
