import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from '/src/components/UI/icon'
import PropTypes from 'prop-types'

buttonSettingItem.propTypes = {
    title: PropTypes.string.isRequired,
    nameIonIcons: PropTypes.string.isRequired,
    isUnderline: PropTypes.bool,
}

buttonSettingItem.defaultPropTypes = {
    isUnderline: false
}

export default function buttonSettingItem(props) {
    const { title, nameIonIcons, isUnderline, onPress } = props

    return (
        <TouchableOpacity
            onPress={() => onPress && onPress()}
            style={styles.button}>
            <View
                style={[
                    styles.container,
                    isUnderline ? styles.underLine : null
                ]}
            >
                <Text style={styles.txtTitle}>{title}</Text>
                <Icon name={nameIonIcons} size={30} color={Themes.Colors.GRAY_BRIGHT}></Icon>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 17, color: Themes.Colors.GRAY_BRIGHT,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    underLine: {
        borderBottomWidth: 0.5,
        borderBottomColor: Themes.Colors.GRAY_BRIGHT_I,
        color: Themes.Colors.GRAY_BRIGHT_II
    },
    button: {
        height: 70,
        backgroundColor: 'white'
    },
    container: {
        marginHorizontal: 10 * 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1
    }
})
