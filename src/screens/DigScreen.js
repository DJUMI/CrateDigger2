import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-deck-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';
import ActionSheet from 'react-native-actionsheet';

import Colors from '../constants/Colors';
import Genres from '../constants/Genres';
import DigCard from '../components/lists/items/DigCard';
import SquareButton from '../components/buttons/SquareButton';
import { Context as CartContext } from '../context/cartContext';
import useDigProducts from '../hooks/useDigProducts';

const DigScreen = ({ navigation }) => {
    const { addToCart } = useContext(CartContext);
    const [genre, setGenre] = useState('');
    const [refreshing, setRefreshing]  = useState(false);
    const [products, isLoading] = useDigProducts(genre);
 
    const showActionSheet = () => {
        this.ActionSheet.show();
    };

    useEffect(() => {
        setRefreshing(false);
    }, [products]);

    const renderHeader = () => {
        if (genre) {
            if (genre === 'hop') {
                return <Text style={styles.header}>Hip-Hop</Text>
            } else {
                return <Text style={styles.header}>{genre}</Text>
            }
        } else {
            return <Text style={styles.header}>All</Text>
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <View style={styles.cardContainer}>
                {isLoading || refreshing
                    ? <View style={styles.loadingContainer}>
                        <ActivityIndicator />
                    </View>
                    : <Swiper
                        backgroundColor={Colors.darkBlue}
                        cardHorizontalMargin={EStyleSheet.value('10rem')}
                        cards={products}
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
                    options={Genres}
                    cancelButtonIndex={10}
                    destructiveButtonIndex={9}
                    style={styles.actionSheet}
                    onPress={async (index) => {
                        if (index == 6) {
                            setRefreshing(true);
                            setGenre('hop');
                        }
                        else if (index == 9) {
                            setRefreshing(true);
                            setGenre('');
                        }
                        else if (index != 10) {
                            setRefreshing(true);
                            setGenre(Genres[index]);
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
