import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Accordion from 'react-native-collapsible/Accordion';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Slider } from 'react-native-elements';

import Colors from '../constants/Colors';
import CheckBoxGroup from './CheckBoxGroup';
import RoundButton from './RoundButton';



const FilterDrawer = () => {
    const [active, setActive] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1000);

    const renderHeader = () => {
        return (
            active[0] == 0
                ? <View style={styles.header}>
                    <Text style={styles.headerText}>3,000 Results</Text>
                    <Entypo size={EStyleSheet.value('30rem')} name='chevron-thin-up' color={Colors.nearWhite} />
                </View>
                : <View style={styles.header}>
                    <Text style={styles.headerText}>3,000 Results</Text>
                    <Ionicons size={EStyleSheet.value('30rem')} style={{ marginRight: EStyleSheet.value('5rem') }} name='md-reorder' color={Colors.nearWhite} />
                </View>
        );
    };

    const renderContent = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <CheckBoxGroup
                    checkBoxes={[
                        { label: 'Newest', selected: true },
                        { label: 'Highest Price', selected: false },
                        { label: 'Lowest Price', selected: false }
                    ]}
                    onPress={() => { console.log('hi') }}
                    title={'Sort By'}
                    noBorderTop
                />

                <CheckBoxGroup
                    checkBoxes={[
                        { label: 'Vinyl', selected: false },
                        { label: 'CD', selected: false },
                        { label: 'Cassette', selected: false }
                    ]}
                    onPress={() => { console.log('hi') }}
                    title={'Format'}
                />

                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentText}>Max Price</Text>
                    {maxPrice >= 100
                        ? <Text style={styles.contentText}>100+</Text>
                        : <Text style={styles.contentText}>{maxPrice}</Text>
                    }
                </View>
                <View style={styles.slider}>
                    <Slider
                        minimumValue={1}
                        maximumValue={100}
                        minimumTrackTintColor={Colors.seaGreen}
                        step={1}
                        thumbTintColor={Colors.seaGreen}
                        value={maxPrice}
                        onValueChange={value => { setMaxPrice(value) }}
                        thumbStyle={styles.thumb}
                        thumbTouchSize={{ width: EStyleSheet.value('40rem'), height: EStyleSheet.value('40') }}
                    />
                </View>

                <CheckBoxGroup
                    checkBoxes={[
                        { label: 'House', selected: false },
                        { label: 'Techno', selected: false },
                        { label: 'DnB', selected: false }
                    ]}
                    onPress={() => { console.log('hi') }}
                    title={'Genre'}
                />
                <CheckBoxGroup
                    checkBoxes={[
                        { label: 'Acid', selected: false },
                        { label: 'Hip-Hop', selected: false },
                        { label: 'Electro', selected: false }
                    ]}
                    onPress={() => { console.log('hi') }}
                />
                <CheckBoxGroup
                    checkBoxes={[
                        { label: 'Deep House', selected: false },
                        { label: 'Disco', selected: false },
                        { label: 'Rock', selected: false }
                    ]}
                    onPress={() => { console.log('hi') }}
                />

                <View style={styles.buttonContainer}>
                    <RoundButton title='Apply' />
                    <View style={{ height: EStyleSheet.value('20rem') }} />
                    <RoundButton title='Clear' />
                </View>
            </ScrollView>
        );
    };

    return (
        <Accordion
            activeSections={active}
            containerStyle={styles.accordion}
            sections={['1']}
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
    thumb:{
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
