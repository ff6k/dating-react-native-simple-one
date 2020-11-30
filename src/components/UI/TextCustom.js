import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function TextCustom(props) {
    const { style } = props
    return (
        <Text style={{ ...styles.txtCustom, ...style }}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    txtCustom: {
        fontFamily: 'Montserrat-ExtraBold'
    }
})
