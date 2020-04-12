import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';

import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer';
import SearchList from '../components/lists/SearchList';
import useProducts from '../hooks/useProducts';

const handleSearch = () => {

};

const handleSubmit = () => {

};

const SearchScreen = () => {
    const [format, setFormat] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState(1000);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');
    const [products, isLoading] = useProducts('search', genreFilter, query);

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
                inputContainerStyle={styles.input}
                searchIcon={{ size: EStyleSheet.value('18rem') }}
                clearIcon={{ size: EStyleSheet.value('18rem') }}
                inputStyle={styles.text}
                leftIconContainerStyle={{ marginLeft: EStyleSheet.value('8rem') }}
                rightIconContainerStyle={{ marginRight: EStyleSheet.value('8rem') }}
            />
            <FilterDrawer />
            {isLoading
                ? <View style={styles.loadingContainer}>
                    <ActivityIndicator />
                </View>
                : <SearchList data={products} />
            }
        </SafeAreaView>
    );
};

export default SearchScreen;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue,
    },
    searchBar: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray,
        height: '9.75%'
    },
    input: {
        height: '100%',
        borderRadius: '15rem'
    },
    text: {
        fontSize: '18rem'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});
