import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Themes from '/src/themes'

export default function itemConversition(props) {
    const { item } = props
    const size = item.message.length
    return (
        <View style={[{ margin: 10, }, item.role === "1" ? { flexWrap: 'wrap' } : { flexWrap: 'wrap-reverse' }]}>
            <View style={{
                alignItems: 'center',
                padding: 10,
                backgroundColor: 'white', borderRadius: 5, ...Themes.Styles.shadowButton
            }}>
                <Text style={styles.txtMessage}>{item.message}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    txtMessage: {
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontMediumDefault
    }
})
