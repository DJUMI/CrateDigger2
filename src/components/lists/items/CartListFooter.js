import React, { useContext } from 'react';
import { Alert, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../../constants/Colors';
import { Context } from '../../../context/cartContext';
import UserContext from '../../../context/userContext';
import SquareButton from '../../buttons/SquareButton';

const CartListFooter = () => {
    const user = useContext(UserContext);
    const { state, clearCart } = useContext(Context);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>${parseFloat(Math.round(state.cartTotal * 100) / 100).toFixed(2)}</Text>
            </View>

            {state.cart.length
                ? <View style={styles.buttonContainer}>
                    <SquareButton
                        onPress={() => {
                            Alert.alert(
                                'Are you sure you want to clear your wishlist?',
                                '',
                                [
                                    {
                                        text: 'Cancel',
                                        style: 'cancel',
                                    },
                                    { text: 'OK', onPress: () => clearCart(user) },
                                ]
                            )

                        }}
                        title='Clear Wishlist'
                    />
                </View>
                : null
                }
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
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: '20rem'
    }
});