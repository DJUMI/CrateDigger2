import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CheckBox } from 'react-native-elements';

import Colors from '../constants/Colors';

const CheckBoxGroup = ({ checkBoxes, onPress, title, noBorderTop }) => {
    let borderTop;
    noBorderTop ? borderTop = 0 : borderTop = 1
    const titleStyle = EStyleSheet.create({
        title: {
            borderColor: Colors.lightGray,
            paddingHorizontal: '15rem',
            paddingVertical: '10rem',
            borderTopWidth: borderTop
        }
    })
    return (
        <>
            {title
                ? <View style={titleStyle.title}>
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
                            size={EStyleSheet.value('24rem')}
                        />
                    );
                })}
            </View>
        </>
    );
};

export default CheckBoxGroup;

const styles = EStyleSheet.create({
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
