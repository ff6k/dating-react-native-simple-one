import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function buttonItemEdit(props) {
    const { title, content, isUnderline, styleContent } = props
    return (
        <View style={[
            styles.container,
            isUnderline && { paddingBottom: HEIGHT + 5, ...Themes.Styles.UnderlineBottom }
        ]}>
            <Text style={{ fontSize: FONT_SIZE, color: Themes.Colors.GRAY_BRIGHT_III }}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: FONT_SIZE, color: Themes.Colors.GRAY_DARK, ...styleContent }}>{content}</Text>
                <Ionicons name="chevron-forward-outline" size={25}
                    style={{ alignSelf: 'center', marginLeft: 10 }} color={Themes.Colors.GRAY_BRIGHT_III} />
            </View>
        </View>
    )
}

buttonItemEdit.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isUnderline: PropTypes.bool,
    styleContent: PropTypes.object,
}

buttonItemEdit.defaltProps = {
    isUnderline: false
}

const HEIGHT = 30
const FONT_SIZE = 22
const styles = StyleSheet.create({
    container: {
        flexDirection: "row", justifyContent: 'space-between', alignItems: 'center',
        marginTop: HEIGHT,
    }
})
