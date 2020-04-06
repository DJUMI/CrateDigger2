import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Colors from '../constants/Colors';

const CheckBoxGroup = ({ checkBoxes, onPress, title, noBorderTop }) => {
    let borderTop;
    noBorderTop ? borderTop = {borderTopWidth: 0} : borderTop = {borderTopWidth: 1}
    return (
        <>
            {title
                ? <View style={StyleSheet.flatten([styles.title, borderTop])}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                : null
            }
            <View style={styles.container}>
                {checkBoxes.map((checkBox, index) => {
                    return (
                        <CheckBox
                            key={index}
                            checkedColor={Colors.nearWhite}
                            checked={checkBox.selected}
                            containerStyle={styles.checkBox}
                            iconRight
                            onPress={onPress}
                            right
                            textStyle={styles.text}
                            title={checkBox.label}
                            uncheckedColor={Colors.nearWhite}
                        />
                    );
                })}
            </View>
        </>
    );
};

export default CheckBoxGroup;

const styles = StyleSheet.create({
    title: {
        //borderTopWidth: 1,
        borderColor: Colors.lightGray,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    titleText: {
        color: Colors.nearWhite
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginRight: 15
    },
    checkBox: {
        flex: 1,
        padding: 0,
        borderWidth: 0,
        backgroundColor: Colors.darkGray
    },
    text: {
        color: Colors.nearWhite,
        fontSize: 15,
        fontWeight: 'normal'
    }
});
