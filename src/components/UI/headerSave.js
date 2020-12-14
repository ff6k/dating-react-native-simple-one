import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'

export default function headerSave(props) {
    const { title, onPressBack, onPressSave, isChange } = props
    return (
        <View style={styles.header}>
            <View style={styles.containLeft}>
                <TouchableOpacity style={styles.btnIcon}
                    onPress={() => onPressBack && onPressBack()}
                >
                    <Icon name="arrow-ios-back-outline"
                        color={Themes.Colors.PINK_DARK}
                        size={Themes.Const.SIZE_ICON} />
                </TouchableOpacity>
                <Text style={styles.txtTitle}>{title}</Text>
            </View>

            <TouchableOpacity style={styles.containSave}
                disabled={!isChange}
                onPress={() => onPressSave && onPressSave()}
            >
                <Text style={[styles.txtSave, !isChange && { color: 'gray' }]}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 20,
        color: Themes.Colors.GRAY_DARK,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    containLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        ...Themes.Styles.HeaderApp
    },
    btnIcon: {
        ...Themes.Styles.IconBack,
        marginRight: 30
    },
    containSave: {
        justifyContent: 'center',
        paddingRight: 17
    },
    txtSave: {
        fontSize: 17,
        // fontWeight: 'bold',
        color: Themes.Colors.PINK_DARK,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
})
