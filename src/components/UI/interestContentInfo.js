import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Themes from '/src/themes'
const TagInterest = (props) => {
    const { label } = props
    return (
        // <View style={styles.containInterest}>
        <Text style={styles.txtLabel}>{label}</Text>
        // </View>
    )
}

const renderTagInterest = (data) => {
    return (
        data.map(e => {
            return <TagInterest
                key={e.id}
                label={e.label}
            />
        })
    )
}

export default function interestContentInfo(props) {
    const { data } = props
    return (
        <View style={styles.container}>
            {renderTagInterest(data)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    txtLabel: {
        marginBottom: 10,
        marginRight: 10,
        // paddingHorizontal: 15,
        // paddingVertical: 6,
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        // borderWidth: 1,
        // borderRadius: 20,
        color: Themes.Colors.GRAY_BRIGHT_I,
        borderColor: Themes.Colors.GRAY_BRIGHT_II,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
})
