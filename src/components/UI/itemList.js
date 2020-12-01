import React from 'react'
import Themes from '/src/themes'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Icon from '/src/components/UI/icon'

export default function ItemsReligious(props) {
    const { item, onPressItem, isCheck } = props;
    const { id, name } = item;

    return (
        <TouchableOpacity
            style={styles.containerReligious}
            onPress={() => onPressItem(item)}
            disabled={isCheck ? true : false}>
            <Text style={[
                styles.txtReligious,
                isCheck ? { color: Themes.Colors.PINK_DARK } : { color: 'gray' }
            ]}>
                {name}
            </Text>
            {isCheck && <Icon
                size={23}
                color={Themes.Colors.PINK_DARK}
                name="checkmark"></Icon>}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    containerReligious: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 1.3,
        justifyContent: 'space-between'
    },
    txtReligious: {
        fontSize: Themes.Const.SIZE_TEXT_ITEM,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
})
