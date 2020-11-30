import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'
import LinearGradientCircleButton from '/src/components/UI/linearGradientCircleButton'

export default function buttonSetting(props) {
    const { title, style, name, isGradient, onPress } = props
    const nameIcon = name ? name : 'question-mark-outline'

    return (
        <View style={{ ...styles.container, ...style }}>
            {isGradient ? <LinearGradientCircleButton style={styles.containIcon}
                onPress={onPress}
            >
                <Icon
                    color={'white'}
                    size={35}
                    name={nameIcon}
                />
            </LinearGradientCircleButton>
                :
                <TouchableOpacity style={[styles.containIcon, { backgroundColor: Themes.Colors.GRAY_BRIGHT_V }]}
                    onPress={() => onPress && onPress()}
                >
                    <Icon
                        color={Themes.Colors.GRAY_BRIGHT_II}
                        size={35}
                        name={nameIcon}
                    />
                </TouchableOpacity>}
            <Text style={styles.txtTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containIcon: {
        padding: 10,
        borderRadius: 30,
        ...Themes.Styles.shadowButton
    },
    container: {
        width: 90, alignItems: 'center',
    },
    txtTitle: {
        fontSize: 14,
        color: Themes.Colors.GRAY_BRIGHT_II,
        fontFamily: Themes.FontFamily.FontMediumDefault,
        marginTop: 5
    }
})
