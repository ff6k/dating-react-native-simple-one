import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AnimLottieView from '/src/components/UI/animLottieView'
import Themes from '/src/themes'

export default function Splash() {

    return (
        <View style={styles.container}>
            <AnimLottieView source={require('../../assets/lotties/16555-firery-passion.json')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', backgroundColor: Themes.Colors.PINK_BRIGHT
    }
})
