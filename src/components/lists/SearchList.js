import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import DATA from '../../constants/DATA';
import SearchListItem from './items/SearchListItem';
import SearchListFooter from './items/SearchListFooter';

renderEmpty = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Sorry there are no items that match your search.</Text>
        </View>
    );
}

const SearchList = () => {
    const [numResultsShown, setNumResultsShown] = useState(20);
    const navigation = useNavigation();

    return (
        <FlatList
            data={DATA.slice(0, numResultsShown)}
            renderItem={(item) => SearchListItem(item, navigation)}
            ListEmptyComponent={renderEmpty}
            ListFooterComponent={SearchListFooter}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default SearchList;

const styles = EStyleSheet.create({
    emptyContainer: {
        alignContent: 'center',
        paddingTop: '40rem'
    },
    emptyText: {
        fontSize: '15rem',
        color: Colors.nearWhite,
        alignSelf: 'center'
    }
});