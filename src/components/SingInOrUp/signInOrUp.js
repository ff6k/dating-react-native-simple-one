import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withTranslation } from 'react-i18next';
import Themes from '/src/themes'

export function SignInOrUp(props) {
    const { t, onPressLogin, onPressSignUp } = props;

    const onLogin = () => {
        onPressLogin && onPressLogin()
    }

    const onSignUp = () => {
        onPressSignUp && onPressSignUp()
    }

    return (
        <ScrollView>
            <Image
                style={styles.imgLogo}
                source={require('src/assets/images/Tinder-Logo.png')}
            />
            <View style={styles.boxText}>
                <Text
                    style={[styles.txtTitle]}
                >{t('Find your soul mate')}</Text>
                <Text
                    style={styles.txtIntro}
                >{t('Match and chat with people you like from your area')}</Text>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => onLogin()}
                >
                    <Text style={styles.txtLogin}>{t('Log In')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnSignUp}
                    onPress={() => onSignUp()}
                >
                    <Text style={styles.txtSignUp}>{t('Sign Up')}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const PADDING_VERTICAL = 10;

const styles = StyleSheet.create({
    imgLogo: {
        width: 100,
        height: 110,
        resizeMode: 'stretch',
        alignSelf: 'center',
        marginTop: 150
    },
    boxText: {
        width: 265,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: Themes.Const.MARGIN_TOP_V3,
        marginBottom: 30
    },
    txtTitle: {
        color: Themes.Colors.PINK,
        fontSize: 23,
        textAlign: 'center',
        fontFamily: Themes.FontFamily.FontBoldDefault
    },
    txtIntro: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    btnLogin: {
        alignSelf: 'center',
        backgroundColor: Themes.Colors.PINK,
        width: '100%',
        marginTop: Themes.Const.MARGIN_TOP_V3,
        borderRadius: Themes.Const.BORDER_RADIUS,
    },
    txtLogin: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'white',
        paddingVertical: PADDING_VERTICAL,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    btnSignUp: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 20,
        borderRadius: Themes.Const.BORDER_RADIUS,
        borderColor: Themes.Colors.PINK,
        borderWidth: 1
    },
    txtSignUp: {
        fontSize: 15,
        alignSelf: 'center',
        paddingVertical: PADDING_VERTICAL,
        color: Themes.Colors.PINK,
        fontFamily: Themes.FontFamily.FontBoldSemi
    }
})
export default withTranslation()(SignInOrUp)
