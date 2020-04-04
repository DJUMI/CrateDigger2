import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DATA from '../../constants/DATA';
import SearchListItem from './items/SearchListItem';
import SquareButton from '../SquareButton';

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
        <ScrollView>
            <FlatList
                data={DATA.slice(0, numResultsShown)}
                renderItem={(item) => SearchListItem(item, navigation)}
                ListEmptyComponent={renderEmpty}
            />
            <View style={styles.buttonContainer}>
                <SquareButton title='Load more results' onPress={() => {}} />
            </View>
        </ScrollView>
    );
};

export default SearchList;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        paddingTop: 5,
    }
});