import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

export default function fastImageTest() {
    return (
        <FastImage
            style={styles.image}
            source={{
                uri: 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900',
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300, height: 300
    }
})
