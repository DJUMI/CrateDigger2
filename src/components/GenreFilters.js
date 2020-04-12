import React, { useState } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CheckBox } from 'react-native-elements';

import Colors from '../constants/Colors';

const GenreFilters = ({ checkBoxes, onPress, title }) => {
    const [genres, setGenres] = useState([]);
    const [selected, setSelected] = useState([]);

    const onSelect = (item, index) => {
        let updatedSelections = [...selected];
        updatedSelections[index] = !updatedSelections[index];
        setSelected(updatedSelections);
        let updatedGenres = [...genres];
        if (!updatedGenres.includes(item.label)) {
            updatedGenres.push(item.label);
        } else {
            updatedGenres = genres.filter(i => !i.includes(item.label));
        }
        setGenres(updatedGenres);
    };

    return (
        <>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.row}>
                    {checkBoxes.slice(0, 3).map((checkBox, index) => {
                        return (
                            <CheckBox
                                key={index}
                                checkedColor={Colors.nearWhite}
                                checked={selected[index]}
                                containerStyle={styles.checkBox}
                                iconRight
                                onPress={() => {
                                    onSelect(checkBox, index);
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
                <View style={styles.row}>
                    {checkBoxes.slice(3, 6).map((checkBox, index) => {
                        return (
                            <CheckBox
                                key={index}
                                checkedColor={Colors.nearWhite}
                                checked={selected[index+3]}
                                containerStyle={styles.checkBox}
                                iconRight
                                onPress={() => {
                                    onSelect(checkBox, index+3)
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
                <View style={styles.row}>
                    {checkBoxes.slice(6, 9).map((checkBox, index) => {
                        return (
                            <CheckBox
                                key={index}
                                checkedColor={Colors.nearWhite}
                                checked={selected[index+6]}
                                containerStyle={styles.checkBox}
                                iconRight
                                onPress={() => {
                                    onSelect(checkBox, index+6)
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
            </View>
        </>
    );
};

export default GenreFilters;

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
    },
    row: {
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