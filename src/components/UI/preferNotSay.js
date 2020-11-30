import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
export default function preferNotSay(props) {
    const { t, onCheck, isCheck } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnIco}
                onPress={() => onCheck && onCheck()}
                disabled={isCheck}
            >
                {
                    !isCheck ?
                        <Ionicons name="ellipse-outline" style={styles.icoCheck} />
                        :
                        <Ionicons name="checkmark-circle-outline" style={styles.icoUnCheck} />
                }
            </TouchableOpacity>
            <Text
                style={[
                    styles.txtContent, isCheck ?
                        { color: Themes.Colors.PINK_DARK } :
                        { color: Themes.Colors.GRAY_BRIGHT_I }
                ]}>
                {t("Prefer not to say")}
            </Text>
        </View>
    )
}

preferNotSay.propTypes = {
    onCheckPrefer: PropTypes.func,
    setReset: PropTypes.bool,
    isDisable: PropTypes.bool,
    t: PropTypes.func.isRequired,
}

preferNotSay.defaultProps = {
    preferNotSay: null,
    isReset: false,
    isDisable: false
}

const SIZE_ICON = 25;

const styles = StyleSheet.create({
    btnIco: {
        width: SIZE_ICON,
        height: SIZE_ICON,
        alignSelf: 'center',
        marginRight: 5
    },
    icoCheck: {
        fontSize: SIZE_ICON,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
    icoUnCheck: {
        fontSize: SIZE_ICON,
        color: Themes.Colors.PINK_DARK
    },
    txtContent: {
        fontSize: 20,
        // color: Themes.Colors.GRAY_BRIGHT_I,
        alignSelf: 'center'
    },
    container: {
        position: 'absolute',
        bottom: Themes.Const.ABSOLUTE_BOTTOM + 10,
        left: Themes.Const.ABSOLUTE_BOTTOM,
        flexDirection: 'row',
    }
})
