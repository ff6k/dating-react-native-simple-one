import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'

export default function CustomHeader(props) {
    const { textSwitchLeft, textSwitchRight, textLeft, textRight, isSwitch } = props
    const [isLeft, setIsLeft] = useState(true)
    // const onPressLeft = () => {
    //     !isLeft && setIsLeft(true)
    //     onChangeSwitch && onChangeSwitch(textSwitchLeft)
    // }

    // const onPressRight = () => {
    //     isLeft && setIsLeft(false)
    //     onChangeSwitch && onChangeSwitch(textSwitchRight)
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.txtContent}>{`${textLeft} - ${textRight}`}</Text>
            {isSwitch && <Text style={styles.txtKm}>Km</Text>}
            {/* {isSwitch && <View style={styles.containerSwitch}>
                <TouchableOpacity style={[styles.btnLeft, isLeft ? styles.active : styles.unActive]}
                    onPress={() => onPressLeft()}
                >
                    <Text style={[isLeft ? styles.txtActive : styles.txtUnActive]}>{textSwitchLeft}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnRight, !isLeft ? styles.active : styles.unActive]}
                    onPress={() => onPressRight()}
                >
                    <Text style={[!isLeft ? styles.txtActive : styles.txtUnActive]}>{textSwitchRight}</Text>
                </TouchableOpacity>
            </View>} */}
        </View>
    )
}

const FONT_SIZE = 15
const SIZE_RADIUS = 4
const styles = StyleSheet.create({
    txtKm: {
        color: Themes.Colors.PINK_DARK,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        marginLeft: 10
    },
    btnRight: {
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS
    },
    btnLeft: {
        borderTopLeftRadius: SIZE_RADIUS,
        borderBottomLeftRadius: SIZE_RADIUS
    },
    txtUnActive: {
        color: Themes.Colors.PINK_DARK,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    unActive: {
        flex: 1, borderColor: Themes.Colors.PINK_DARK, borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtActive: {
        color: 'white',
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    active: {
        flex: 1, borderColor: Themes.Colors.PINK_DARK, borderWidth: 1,
        backgroundColor: Themes.Colors.PINK_DARK,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row', alignItems: 'center'
    },
    txtContent: {
        fontSize: FONT_SIZE,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    containerSwitch: {
        flexDirection: 'row', width: 80, height: 35, marginLeft: 5,
    }
})
