import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '/src/components/UI/icon'
import AnimLottieView from '/src/components/UI/animLottieView'
export default function buttonSend(props) {
    const { style, disabled, onPress, isLoadingSend } = props
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 3, y: 0 }}
            colors={['pink', 'orange']}
            style={{ ...styles.linearContain, ...style }}>
            {!isLoadingSend ? <TouchableOpacity style={[styles.btnSend, disabled && { backgroundColor: Themes.Colors.GRAY_BRIGHT_II }]} disabled={disabled}
                onPress={() => onPress()}
            >
                <Icon name="paper-plane" size={25} color={disabled ? "gray" : "white"}></Icon>
            </TouchableOpacity> :
                <AnimLottieView
                    source={require('/src/assets/lotties/9953-loading-round.json')}
                    style={{ width: 120, height: 120 }}
                />}
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
