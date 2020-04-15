import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SquareButton from '../../buttons/SquareButton';

const SearchListFooter = (handleLoadMore) => {
    return (
        <View style={styles.buttonContainer}>
            <SquareButton title='Load more results' onPress={handleLoadMore} />
        </View>
    );
};

export default SearchListFooter;

const styles = EStyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        paddingTop: '10rem'
    }
});