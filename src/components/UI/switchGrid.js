import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';
import PropTypes from 'prop-types'

export default function switchGrid(props) {

    const { style } = props
    console.log("switchGrid -> style", style)

    const [valueTransLeft, setValueTransLeft] = useState(new Animated.Value(0))
    const [isRight, setIsRight] = useState(false)
    const onSwitch = () => {
        setIsRight(!isRight)
        Animated.timing(valueTransLeft, {
            toValue: isRight ? 0 : WIDTH_SWITCH / 2,
            duration: 100,
            easing: Easing.linear
        }).start()
    }

    return (
        <View
            style={
                { ...styles.container, ...style }
            }>
            <View style={styles.containerIcon}>
                <Ionicons
                    onPress={() => onSwitch()}
                    name="square"
                    color={isRight ? Themes.Colors.GRAY_BRIGHT_II : 'white'}
                    size={SIZE_ICON}
                    style={styles.ico}
                />
            </View>
            <View style={styles.containerIcon}>
                <Ionicons
                    onPress={() => onSwitch()}
                    name="grid"
                    color={!isRight ? Themes.Colors.GRAY_BRIGHT_II : 'white'}
                    size={SIZE_ICON}
                    style={styles.ico}
                />
            </View>
            <Animated.View
                onStartShouldSetResponder={() => true}
                onResponderGrant={() => onSwitch()}
                style={[styles.btnSwitch, { marginLeft: valueTransLeft }]}>
                <LinearGradient
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[Themes.Colors.PINK_DARK, Themes.Colors.ORANGE_DARK]}
                >
                </LinearGradient>
            </Animated.View>


        </View>
    )
}

switchGrid.propTypes = {
    style: PropTypes.object,
}

switchGrid.defaultProps = {
    style: null
}

const SIZE_ICON = 15;
const WIDTH_SWITCH = 100
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', width: WIDTH_SWITCH, height: 40,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: Themes.Colors.GRAY_BRIGHT_I,
    },
    containerIcon: {
        flex: 1, justifyContent: 'center'
    },
    ico: {
        alignSelf: 'center'
    },
    gradient: {
        width: '100%', height: '100%'
        , borderRadius: 30
    },
    btnSwitch: {
        width: WIDTH_SWITCH / 2, height: 37.5,
        borderRadius: 30,
        position: 'absolute',
        zIndex: -1
    }
})
