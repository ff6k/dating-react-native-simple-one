import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Themes from '/src/themes'

export default function Card(props) {
    const { children, content, styleContent, customHeader, style } = props
    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={[styles.containerHeader, customHeader ? styles.containerHeaderRight : null]}>
                <Text style={styles.txtTitle}>{content}</Text>
                {customHeader}
            </View>
            <View style={{ ...styles.containerContent, ...styleContent }}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeaderRight: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerHeader: {
        justifyContent: 'center', flex: 1,
    },
    container: {
        ...Themes.Styles.Card,
    },
    containerContent: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtTitle: {
        ...Themes.Styles.TitleCard,
    },
})
