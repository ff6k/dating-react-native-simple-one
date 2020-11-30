import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '/src/components/UI/icon'
export default function buttonSend(props) {
    const { style, disabled } = props
    const onPressSend = () => {
        console.log('send')
    }
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 3, y: 0 }}
            colors={['pink', 'orange']}
            style={{ ...styles.linearContain, ...style }}>
            <TouchableOpacity style={[styles.btnSend, disabled && { backgroundColor: Themes.Colors.GRAY_BRIGHT_II }]} disabled={disabled}
                onPress={() => onPressSend()}
            >
                <Icon name="paper-plane" size={25} color={disabled ? "gray" : "white"}></Icon>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearContain: {
        width: Themes.Const.SIZE_ICON_MESSAGES, height: Themes.Const.SIZE_ICON_MESSAGES,
        borderRadius: Themes.Const.SIZE_ICON_MESSAGES / 2
    },
    btnSend: {
        width: Themes.Const.SIZE_ICON_MESSAGES, height: Themes.Const.SIZE_ICON_MESSAGES,
        borderRadius: Themes.Const.SIZE_ICON_MESSAGES / 2,
        alignItems: 'center', paddingTop: 6
    }
})
