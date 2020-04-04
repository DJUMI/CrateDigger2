import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Slider } from 'react-native-elements';

import Colors from '../constants/Colors';
import RoundButton from '../components/RoundButton';



const FilterDrawer = () => {
    const [active, setActive] = useState([]);

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
            <View style={styles.content}>
                <Text style={styles.contentText}>Sort By</Text>
                <Text style={styles.contentText}>Format</Text>
                <Text style={styles.contentText}>Max Price</Text>
                <Text style={styles.contentText}>Genre</Text>
                <View style={styles.buttonContainer}>
                    <RoundButton title='Apply' />
                    <View style={{ height: 20 }} />
                    <RoundButton title='Clear' />
                </View>
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
    content: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    contentText: {
        color: Colors.nearWhite
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingBottom: 15
    }
});
