import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import SpinnerLoading from '/src/components/UI/spinnerLoading'
import { withTranslation } from 'react-i18next';

function ForgetPassword(props) {
    const { onPressReset, isLoading, onPressBack, t } = props

    const [email, setEmail] = useState('')
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <SpinnerLoading isLoading={isLoading}
                source={require('/src/assets/lotties/9844-loading-40-paperplane.json')}
            />
            <ButtonBack
                title={t('Forgot Password')}
                onPress={onPressBack}
            />
            <View style={styles.container}>
                <Text style={styles.txtReset}>{t("Reset Password")}</Text>
                <Text style={styles.txtDetail}>{t("Please enter the email you used at the time of registration to get the password reset instructions")}</Text>
                <TextInput
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    keyboardType={'email-address'}
                    placeholder={t('Your Email')}
                    style={styles.inpEmail}
                />
                <TouchableOpacity style={styles.btnReset}
                    onPress={() => onPressReset && onPressReset(email)}
                >
                    <Text style={styles.txtBtnReset}>{t("RESET")}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txtBtnReset: {
        fontSize: 17,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        color: 'white'
    },
    btnReset: {
        backgroundColor: Themes.Colors.PINK_DARK,
        borderRadius: 5,
        paddingHorizontal: 40,
        paddingVertical: 15
    },
    inpEmail: {
        borderRadius: 5,
        width: '90%',
        paddingVertical: 10,
        paddingLeft: 20,
        fontSize: 17,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        borderWidth: 1,
        borderColor: Themes.Colors.PINK_DARK,
        color: 'black'

    },
    txtReset: {
        fontSize: 20,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
    txtDetail: {
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontThinDefault,
        marginHorizontal: 16,
        textAlign: 'center'
    },
    container: {
        alignItems: 'center',
        marginTop: 100,
        height: 300,
        justifyContent: 'space-between',
        marginBottom: 20
    }
})
export default withTranslation()(ForgetPassword)
