import React from 'react'
import {
    StyleSheet, TouchableOpacity, View, Text
} from 'react-native'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
export default function buttonBack(props) {
    const { onPress, name, title } = props
    const nameIcon = name ? name : "arrow-ios-back-outline"
    return (
        <View style={styles.header}>
            <View style={styles.containLeft}>
                <TouchableOpacity style={styles.btnIcon}
                    onPress={() => onPress && onPress()}
                >
                    <Icon name={nameIcon} size={Themes.Const.SIZE_ICON} color={Themes.Colors.PINK} />
                </TouchableOpacity>
                <Text style={styles.txtTitle}>{title}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        ...Themes.Styles.HeaderApp,
    },
    containLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnIcon: {
        ...Themes.Styles.IconBack,
        marginRight: 30
    },
    txtTitle: {
        fontSize: 20,
        color: Themes.Colors.GRAY_DARK,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
})
