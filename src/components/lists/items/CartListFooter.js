import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../../constants/Colors';
import { Context } from '../../../context/cartContext';
import TwoSquareButtons from '../../buttons/TwoSquareButtons';

const CartListFooter = () => {
    const { state, clearCart } = useContext(Context);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>${parseFloat(Math.round(state.cartTotal * 100) / 100).toFixed(2)}</Text> 
            </View>

            <TwoSquareButtons 
                onPress1={clearCart} 
                onPress2={() => {}} 
                title1='Clear Cart'
                title2='Check Out'
            />
        </View>
    );
};

export default CartListFooter;

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        paddingVertical: '5rem',
        paddingRight: '5rem'
    },
    text: {
        fontSize: '15rem',
        color: Colors.nearWhite,
        paddingRight: '10rem'
    }
});