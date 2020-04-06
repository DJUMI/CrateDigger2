import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer';
import SearchList from '../components/lists/SearchList';

const handleSearch = () => {

};

const handleSubmit = () => {

};

const SearchScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                placeholder="Search title, artist, or label..."
                placeholderTextColor={Colors.nearWhite}
                round
                onChangeText={handleSearch}
                value='hi'
                onSubmitEditing={handleSubmit}
                containerStyle={styles.searchBar}
            />
            <FilterDrawer />
            <SearchList />
        </SafeAreaView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.darkBlue,
    },
    searchBar: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray,
    },
});
