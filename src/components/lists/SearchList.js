import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import SearchListItem from './items/SearchListItem';
import SearchListFooter from './items/SearchListFooter';

renderEmpty = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Sorry there are no items that match your search.</Text>
        </View>
    );
};

const SearchList = ({ data }) => {
    const [numResultsShown, setNumResultsShown] = useState(20);
    const navigation = useNavigation();

    const handleLoadMore = () => {
        setNumResultsShown(numResultsShown + 20);
    }

    return (
        <FlatList
            data={data.slice(0, numResultsShown)}
            renderItem={(item) => SearchListItem(item, navigation)}
            ListEmptyComponent={renderEmpty}
            ListFooterComponent={() => SearchListFooter(handleLoadMore)}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item._id.toString()}
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