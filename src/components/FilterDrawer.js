import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Slider } from 'react-native-elements';

import Colors from '../constants/Colors';
import CheckBoxGroup from './CheckBoxGroup';
import RoundButton from './RoundButton';

 

const FilterDrawer = () => {
    const [active, setActive] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1000);
    const windowHeight = useWindowDimensions().height;
    //console.log(windowHeight);

    const renderHeader = () => {
        return (
            active[0] == 0
                ? <View style={styles.header}>
                    <Text style={styles.headerText}>3,000 Results</Text>
                    <Entypo size={30} name='chevron-thin-up' color={Colors.nearWhite} />
                </View>
                : <View style={styles.header}>
                    <Text style={styles.headerText}>3,000 Results</Text>
                    <Ionicons size={30} style={{ marginRight: 5 }} name='md-reorder' color={Colors.nearWhite} />
                </View>
        );
    };

    const renderContent = () => {
        return (
            <View style={{ height: windowHeight }}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
                        <View style={{ height: 20 }} />
                        <RoundButton title='Clear' />
                    </View>
                </ScrollView>
            </View>

        );
    };

    return (
        <View>
            <Accordion
                activeSections={active}
                containerStyle={styles.accordion}
                sections={['1']}
                renderHeader={renderHeader}
                renderContent={renderContent}
                onChange={activeSections => setActive(activeSections)}
            />
        </View>
    );
};

export default FilterDrawer;

const styles = StyleSheet.create({
    container: {
        //marginBottom: 200
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
        paddingHorizontal: 10,
        height: 40
    },
    headerText: {
        color: Colors.nearWhite,
        fontSize: 17
    },
    contentTextContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: Colors.lightGray,
    },
    contentText: {
        color: Colors.nearWhite
    },
    slider: {
        paddingHorizontal: 25,
        paddingBottom: 15
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingBottom: 15
    }
});
