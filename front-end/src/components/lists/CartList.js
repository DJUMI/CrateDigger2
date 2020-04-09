import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import CartListItem from './items/CartListItem';
import CartListFooter from './items/CartListFooter';
import { Context as CartContext } from '../../context/cartContext';

renderCartEmpty = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Add items to your cart to check out with Discogs</Text>
        </View>
    );
}

const CartList = () => {
    const { state, clearCart, removeFromCart } = useContext(CartContext);

    const navigation = useNavigation();

    return (
        <FlatList
            data={state.cart}
            renderItem={(item) => CartListItem(item, navigation, removeFromCart)}
            keyExtractor={item => item.release_id}
            ListEmptyComponent={renderCartEmpty}
            ListFooterComponent={CartListFooter}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default CartList;

const styles = EStyleSheet.create({
    emptyContainer: {
        alignContent: 'center',
        paddingTop: '40rem'
    },
    emptyText: {
        fontSize: '15rem',
        color: Colors.nearWhite,
        alignSelf: 'center',
    }
});