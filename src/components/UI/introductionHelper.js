import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import Themes from '/src/themes'
import AnimLottieView from '/src/components/UI/animLottieView'
export default function introductionHelper(props) {
    const { isVisible, onPressLetsGo } = props
    return (
        <Spinner
            visible={isVisible}
            textContent={'Loading...'}
            textStyle={Themes.Styles.spinnerTextStyle}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AnimLottieView
                    style={styles.animWelcome}
                    source={require('/src/assets/lotties/34858-hands-for-friends-sticker-3.json')} />
                <Text style={styles.txtWelcome}>Welcome</Text>
                <Text style={styles.txtDetail}>Congratulations on your successful registration,
                Thanks for choosing us
                </Text>
                <TouchableOpacity style={styles.btnNext}
                    onPress={() => onPressLetsGo && onPressLetsGo()}
                >
                    <Text style={styles.txtNext}>Let's Go</Text>
                </TouchableOpacity>
            </View>
        </Spinner>
    )
}

const styles = StyleSheet.create({
    txtDetail: {
        textAlign: 'center',
        fontSize: 15,
        marginHorizontal: 10,
        color: Themes.Colors.GRAY_DARK
    },
    txtNext: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    btnNext: {
        backgroundColor: Themes.Colors.PINK_DARK,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 200
    },
    txtWelcome: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    animWelcome: {
        width: 250,
        height: 250
    }
})
