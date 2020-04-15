import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';

import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer';
import SearchList from '../components/lists/SearchList';
import useSearchProducts from '../hooks/useSearchProducts';

const SearchScreen = () => {
    const [format, setFormat] = useState([]);
    const [genre, setGenre] = useState([]);
    const [price, setPrice] = useState(1000);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');
    const [value, setValue] = useState('');
    const [products, isLoading] = useSearchProducts(genre, format, price, query, sort);

    const getFormat = (format) => {
        let formatQuery = {};
        if(format.length != 0) {
            const updatedFormat = [];
            format.map((f) => {
                updatedFormat.push({ format: { $regex: f, '$options': 'i' } });
            });
            formatQuery = { $or: updatedFormat };
        }
        return formatQuery;
    };

    const getGenre = (genre) => {
        let genreQuery = {};
        if(genre.length != 0) {
            const updatedGenre = [];
            genre.map((g) => {
                updatedGenre.push({ styles: { $regex: g, '$options': 'i' } });
            });
            genreQuery = { $or: updatedGenre };
        }
        return genreQuery;
    };

    const getSort = (sort) => {
        switch (sort) {
            case 0:
                return { sort: { listing_id: -1 } };
            case 1:
                return { sort: { price: -1 } };
            case 2:
                return { sort: { price: 1 } };
            default:
                return;
        };
    };

    const handleSearch = text => {
        setValue(text);
    };

    const handleSubmit = (props) => {
        setQuery(props.nativeEvent.text);
    };

    const handleFilter = (f, g, p, s) => {
        setFormat(getFormat(f));
        setGenre(getGenre(g));
        setPrice(p);
        setSort(getSort(s));
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                placeholder="Search title, artist, or label..."
                placeholderTextColor={Colors.nearWhite}
                round
                onChangeText={handleSearch}
                value={value}
                onSubmitEditing={handleSubmit}
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.input}
                searchIcon={{ size: EStyleSheet.value('18rem') }}
                clearIcon={{ size: EStyleSheet.value('18rem') }}
                inputStyle={styles.text}
                leftIconContainerStyle={{ marginLeft: EStyleSheet.value('8rem') }}
                rightIconContainerStyle={{ marginRight: EStyleSheet.value('8rem') }}
            />
            <FilterDrawer
                handleFilter={(f, g, p, s) => handleFilter(f, g, p, s)}
                numResults={products.length.toLocaleString()}
            />
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
