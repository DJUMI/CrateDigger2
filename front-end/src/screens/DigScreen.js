import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-deck-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';
import ActionSheet from 'react-native-actionsheet';

import Colors from '../constants/Colors';
import DigCard from '../components/lists/items/DigCard';
import SquareButton from '../components/SquareButton';
import { Context as CartContext } from '../context/cartContext';
import { Context as ShopContext } from '../context/shopContext';

const genres = ['Acid', 'Deep House', 'Disco', 'Downtempo', 'Drum n Bass', 'Electro', 'Hip-hop', 'House', 'Techno', 'None', 'Cancel'];

const DigScreen = ({ navigation }) => {
    const { addToCart } = useContext(CartContext);
    const { state, fetchProducts } = useContext(ShopContext);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchProducts();
        setIsLoading(false);
    }, [query]);

    const showActionSheet = () => {
        this.ActionSheet.show();
    };

    return (
        <SafeAreaView style={styles.container}>
            {query
                ? <Text style={styles.header}>{query}</Text>
                : <Text style={styles.header}>All</Text>
            }
            <View style={styles.cardContainer}>
                {isLoading
                    ? <View style={styles.loadingContainer}>
                        <ActivityIndicator size={'large'} />
                    </View>
                    : <Swiper
                        backgroundColor={Colors.darkBlue}
                        cardHorizontalMargin={EStyleSheet.value('10rem')}
                        cards={state.products}
                        renderCard={(card) => DigCard(card, navigation, addToCart)}
                        stackSize={2}
                        cardVerticalMargin={EStyleSheet.value('10rem')}
                    />
                }
            </View>
            <View style={styles.filterContainer}>
                <SquareButton title='Genre' onPress={showActionSheet} />
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={genres}
                    cancelButtonIndex={10}
                    destructiveButtonIndex={9}
                    style={styles.actionSheet}
                    onPress={(index) => {
                        if (index == 9) {
                            setQuery('');
                        }
                        else if (index != 10) {
                            setQuery(genres[index]);
                        }
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

export default DigScreen;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue
    },
    header: {
        color: Colors.nearWhite,
        fontSize: '20rem',
        fontWeight: 'bold',
        paddingTop: 30,
        alignSelf: 'center',
    },
    cardContainer: {
        flex: 3
    },
    filterContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});
