import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import CartList from '../components/lists/CartList';
import userContext from '../context/userContext';

const CartScreen = () => {
    const user = useContext(userContext);
    console.log(user);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.headerText}>Item</Text>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.headerText}>Price</Text>
                </View>
            </View>
            <CartList />
        </SafeAreaView>
    );
};

export default CartScreen;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: Colors.darkBlue
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: '5rem',
        borderBottomColor: Colors.nearWhite,
        borderBottomWidth: 1
    },
    itemContainer: {
        flex: 2,
        paddingLeft: '5rem'
    },
    priceContainer: {
        flex: 1,
        alignItems: 'center'
    },
    headerText: {
        fontSize: '15rem',
        color: Colors.nearWhite
    }
});
