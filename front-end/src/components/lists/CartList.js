import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import DATA from '../../constants/DATA';
import CartListItem from './items/CartListItem';
import CartListFooter from './items/CartListFooter';

renderEmpty = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Add items to your cart to check out with Discogs</Text>
        </View>
    );
}

const CartList = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={DATA}
            renderItem={(item) => CartListItem(item, navigation)}
            keyExtractor={item => item.id}
            ListEmptyComponent={renderEmpty}
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