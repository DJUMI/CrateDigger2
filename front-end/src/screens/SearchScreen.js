import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';


import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer';
import SearchList from '../components/lists/SearchList';
import { Context as ShopContext } from '../context/shopContext';

const handleSearch = () => {

};

const handleSubmit = () => {

};

const SearchScreen = ({ navigation }) => {
    const { state, fetchProducts } = useContext(ShopContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
        setIsLoading(false);
    }, []);

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
            {state.products.length != 0
                ? <SearchList data={state.products}/>
                : <Text style={{ color: Colors.nearWhite  }}>We Loading</Text>
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
    }
});
