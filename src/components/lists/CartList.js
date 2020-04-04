import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DATA from '../../constants/DATA'
import CartListItem from './items/CartListItem';
import CartListFooter from './items/CartListFooter';

const CartList = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={(item) => CartListItem(item, navigation)}
                keyExtractor={item => item.id}
                ListFooterComponent={CartListFooter}
            />
        </SafeAreaView>
    );
};

export default CartList;

const styles = StyleSheet.create({

});
