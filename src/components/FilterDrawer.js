import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Accordion from 'react-native-collapsible/Accordion';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Slider } from 'react-native-elements';

import Colors from '../constants/Colors';
import RoundButton from './buttons/RoundButton';
import SortFilters from './SortFilters';
import FormatFilters from './FormatFilters';
import GenreFilters from './GenreFilters';

const FilterDrawer = ({ handleFilter, numResults }) => {
    const [active, setActive] = useState([]);
    const [clear, setClear] = useState(false);
    const [format, setFormat] = useState([]);
    const [genre, setGenre] = useState([]);
    const [price, setPrice] = useState(100);
    const [sort, setSort] = useState(0);

    const handleFormat = (f) => {
        setFormat(f);
    };

    const handleGenre = (g) => {
        setGenre(g)
    };

    const handleSort = (s) => {
        setSort(s);
    };

    const handleApply = () => {
        handleFilter(format, genre, price, sort);
        setActive([]);
    };

    const handleClear = async () => {
        setClear(!clear);
        setPrice(100);
    };

    useEffect(() => {
    }, [format, genre, price, sort]);

    useEffect(() => {
        handleApply()
    }, []);

    const renderHeader = () => {
        return (
            active[0] == 0
                ? <View style={styles.header}>
                    <Text style={styles.headerText}>{numResults} Results</Text>
                    <Entypo size={EStyleSheet.value('30rem')} name='chevron-thin-up' color={Colors.nearWhite} />
                </View>
                : <View style={styles.header}>
                    <Text style={styles.headerText}>{numResults} Results</Text>
                    <Ionicons size={EStyleSheet.value('30rem')} style={{ marginRight: EStyleSheet.value('5rem') }} name='md-reorder' color={Colors.nearWhite} />
                </View>
        );
    };

    const renderContent = () => {
        return (
            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                <SortFilters
                    checkBoxes={[
                        { label: 'Newest' },
                        { label: 'Highest Price' },
                        { label: 'Lowest Price' }
                    ]}
                    onPress={(i) => handleSort(i)}
                    title={'Sort By'}
                    clear={clear}
                />

                <FormatFilters
                    checkBoxes={[
                        { label: 'Vinyl' },
                        { label: 'CD' },
                        { label: 'Cassette' }
                    ]}
                    onPress={(i) => handleFormat(i)}
                    title={'Format'}
                    clear={clear}
                />

                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentText}>Max Price</Text>
                    {price >= 100
                        ? <Text style={styles.contentText}>100+</Text>
                        : <Text style={styles.contentText}>{price}</Text>
                    }
                </View>
                <View style={styles.slider}>
                    <Slider
                        minimumValue={1}
                        maximumValue={100}
                        minimumTrackTintColor={Colors.seaGreen}
                        step={1}
                        thumbTintColor={Colors.seaGreen}
                        value={price}
                        onValueChange={value => setPrice(value)}
                        thumbStyle={styles.thumb}
                        thumbTouchSize={{ width: EStyleSheet.value('40rem'), height: EStyleSheet.value('40rem') }}
                    />
                </View>

                <GenreFilters
                    checkBoxes={[
                        { label: 'House' },
                        { label: 'Techno' },
                        { label: 'Drum N Bass' },
                        { label: 'Acid'},
                        { label: 'Hip Hop' },
                        { label: 'Electro'},
                        { label: 'Deep House' },
                        { label: 'Disco' },
                        { label: 'Rock' }
                    ]}
                    onPress={(g) => handleGenre(g)}
                    title={'Genre'}
                    clear={clear}
                />

                <View style={styles.buttonContainer}>
                    <RoundButton title='Apply' onPress={handleApply} />
                    <View style={{ height: EStyleSheet.value('20rem') }} />
                    <RoundButton title='Clear' onPress={handleClear} />
                </View>
            </ScrollView>
        );
    };

    return (
        <Accordion
            activeSections={active}
            containerStyle={styles.accordion}
            sections={['0']}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={activeSections => setActive(activeSections)}
        />
    );
};

export default FilterDrawer;

const styles = EStyleSheet.create({
    container: {
    },
    accordion: {
        backgroundColor: Colors.darkGray,
        borderRadius: 0,
        margin: 0
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray,
        paddingHorizontal: '10rem',
        height: '40rem'
    },
    headerText: {
        color: Colors.nearWhite,
        fontSize: '17rem'
    },
    contentTextContainer: {
        marginTop: '10rem',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '15rem',
        paddingVertical: '10rem',
        borderTopWidth: 1,
        borderColor: Colors.lightGray,
    },
    contentText: {
        color: Colors.nearWhite,
        fontSize: '15rem'
    },
    slider: {
        paddingHorizontal: '25rem',
        paddingBottom: '15rem',
    },
    thumb: {
        height: '20rem',
        width: '20rem',
        borderRadius: '10rem'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '25rem',
        paddingBottom: '15rem'
    }
});
