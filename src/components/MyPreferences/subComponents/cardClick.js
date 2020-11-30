import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Card from '/src/components/UI/card'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'

export default function cardClick(props) {
    const { content, title, nameIcon, onPress } = props
    const icon = nameIcon ? nameIcon : "navigation-2"
    return (
        <Card content={title}>
            <TouchableOpacity style={styles.btnContent}
                onPress={() => onPress && onPress()}>
                <Text style={styles.txtContent}>{content}</Text>
                <Icon name={icon} size={25} color={Themes.Colors.GRAY_BRIGHT_I} />
            </TouchableOpacity>
        </Card>
    )
}

const styles = StyleSheet.create({
    btnContent: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtContent: {
        fontSize: Themes.Const.FONT_SIZE_V4,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
})
