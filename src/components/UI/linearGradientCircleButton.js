import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Themes from '/src/themes'

export default function linearGradientCircleButton(props) {
    const { children, style, onPress } = props
    return (
        <LinearGradient
            onTouchStart={() => onPress && onPress()}
            start={{ x: 0, y: 1 }}
            end={{ x: 2, y: 0 }}
            colors={[Themes.Colors.PINK_DARK, 'orange']}
            // style={{
            //     position: 'absolute', width: 50, height: 50,
            //     bottom: 10, alignSelf: 'center', borderRadius: 50 / 2,
            //     justifyContent: 'center', alignItems: 'center'
            // }}
            style={{ ...styles.container, ...style }}
        >
            {children}
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        ...Themes.Styles.linearGradientCircleAdd
        // width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 60 / 2,
        // alignSelf: 'center',
    }
})
