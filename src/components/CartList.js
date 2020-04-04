import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CartListItem from './CartListItem';
import CartListFooter from './CartListFooter';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        artist: 'No doubt',
        price: 5.884535,
        title: 'First Item',
        format: 'CD',
        image_url: ''
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        artist: 'No doubt',
        price: 100.77,
        title: 'Second Item',
        Format: '12 "',
        image_url: ''
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        artist: 'No doubt',
        price: 173863.439746,
        title: 'Third Itemfjoanusiaboufioabusliaujnclbcsu',
        format: '7"',
        image_url: ''
    }
];

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
