import React, { useState } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CheckBox } from 'react-native-elements';

import Colors from '../constants/Colors';

const FormatFilters = ({ checkBoxes, onPress, title }) => {
    const [selected, setSelected] = useState([]);

    const onSelect = (item) => {
        var updatedSelections = selected;
        if (!updatedSelections.includes(item.label)) {
            updatedSelections.push(item.label);
        } else {
            updatedSelections = selected.filter(i => !i.includes(item.label));
        }
        setSelected(updatedSelections);
        console.log(updatedSelections);
    };

    return (
        <>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.container}>
                {checkBoxes.map((checkBox, index) => {
                    return (
                        <CheckBox
                            key={index}
                            checkedColor={Colors.nearWhite}
                            checked={selected.includes(checkBox.label)}
                            containerStyle={styles.checkBox}
                            iconRight
                            onPress={() => {
                                onSelect(checkBox)
                                onPress(selected);
                            }}
                            right
                            textStyle={styles.text}
                            title={checkBox.label}
                            uncheckedColor={Colors.nearWhite}
                            size={EStyleSheet.value('24rem')}
                        />
                    );
                })}
            </View>
        </>
    );
};

export default FormatFilters;

const styles = EStyleSheet.create({
    title: {
        borderColor: Colors.lightGray,
        paddingHorizontal: '15rem',
        paddingVertical: '10rem',
        borderTopWidth: 1
    },
    titleText: {
        color: Colors.nearWhite,
        fontSize: '15rem'
    },
    container: {
        flexDirection: 'row',
        paddingVertical: '10rem',
        marginRight: '15rem'
    },
    checkBox: {
        flex: 1,
        padding: 0,
        borderWidth: 0,
        backgroundColor: Colors.darkGray
    },
    text: {
        color: Colors.nearWhite,
        fontSize: '15rem',
        fontWeight: 'normal',
        marginRight: '10rem'
    }
});