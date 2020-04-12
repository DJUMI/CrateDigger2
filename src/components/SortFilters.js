import React, { useState } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CheckBox } from 'react-native-elements';

import Colors from '../constants/Colors';

const SortFilters = ({ checkBoxes, onPress, title }) => {
    const [checked, setChecked] = useState(0);

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
                            checked={checked == index}
                            containerStyle={styles.checkBox}
                            iconRight
                            onPress={() => {
                                setChecked(index);
                                onPress(index);
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

export default SortFilters;

const styles = EStyleSheet.create({
    title: {
        borderColor: Colors.lightGray,
        paddingHorizontal: '15rem',
        paddingVertical: '10rem'
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