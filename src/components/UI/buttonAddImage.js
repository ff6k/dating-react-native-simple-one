import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes';
import LinearGradientCircleButton from '/src/components/UI/linearGradientCircleButton'
export default function buttonAddImage(props) {
    const { style } = props
    return (
        <LinearGradientCircleButton
            style={{ ...style }}
        >
            <Icon name="camera" size={40} color={"white"}></Icon>
            <View style={{
                width: 15, height: 15, position: 'absolute', backgroundColor: 'white', bottom: 0,
                right: 0, borderRadius: 15 / 2, justifyContent: 'center', alignItems: 'center'
            }}>
                <Icon name="plus" color={Themes.Colors.PINK_DARK} size={20}></Icon>
            </View>
        </LinearGradientCircleButton>
    )
}

const styles = StyleSheet.create({

})
