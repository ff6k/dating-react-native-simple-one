import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Themes from '/src/themes'

export default function textInputVirtues(props) {
    const { onChangeText, title, titleContent, placeholder, detail } = props
    return (
        <View style={styles.containerContent}>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text style={styles.txtTitle2}>{titleContent}</Text>
            <TextInput placeholder={placeholder}
                style={styles.inpWork}
                keyboardType={'default'}
                onChangeText={value => onChangeText && onChangeText(value)}
            />
            <Text style={styles.txtDetail}>{detail}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    },
    txtTitle: {
        ...Themes.Styles.txtTitle
    },
    txtTitle2: {
        ...Themes.Styles.txtTitle2
    },
    inpWork: {
        fontSize: Themes.Const.FONT_SIZE_V3,
        borderBottomWidth: Themes.Const.BORDER_TEXT_INPUT
    },
    txtDetail: {
        ...Themes.Styles.txtDetail
    },
})
