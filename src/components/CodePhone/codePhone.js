import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputPhone from '/src/components/UI/textInputPhone'
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

let numberPhoneValue
function CodePhone(props) {
    const { onSendCodePhone, t } = props

    const onSendCode = () => {
        // console.log(numberPhoneValue)
        if (numberPhoneValue !== undefined) {
            onSendCodePhone && onSendCodePhone(numberPhoneValue)
        }
    }

    const onChangeValue = (numberPhone) => {
        console.log("onChangeValue -> numberPhone", numberPhone)
        numberPhoneValue = numberPhone
    }

    return (
        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> {t('Sign In')} </Text>
            <TextInputPhone style={styles.txtPhoneCode} t={t}
                onChangeValue={onChangeValue}
            />
            <TouchableOpacity style={styles.btnSendCode}
                onPress={() => onSendCode()}
            >
                <Text style={styles.txtSendCode}>{t('Send code')}</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> {t('OR')} </Text>
            <TouchableOpacity style={styles.btnSignInFB}>
                <Text style={styles.txtLoginFB}>{t("Login With Facebook")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignInEmail}>
                <Text style={styles.txtSignInEmail}>{t('Login with E-mail')}</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

CodePhone.propTypes = {
    onSendCodePhone: PropTypes.func,
}

CodePhone.defaultProps = {
    onSendCodePhone: null
}

const styles = StyleSheet.create({
    txtPhoneCode: {
        marginTop: Themes.Const.MARGIN_TOP_V2,
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    btnSendCode: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.PINK,
        marginTop: Themes.Const.MARGIN_TOP,

    },
    txtSendCode: {
        ...Themes.Styles.TextButton
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_V1,
        marginBottom: Themes.Const.MARGIN_V1
    },
    btnSignInFB: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.FACEBOOK,
    },
    txtLoginFB: {
        ...Themes.Styles.TextButton
    },
    btnSignInEmail: {
        ...Themes.Styles.ButtonBottom,
        width: 200,
    },
    txtSignInEmail: {
        ...Themes.Styles.TextButtonBottom
    }
})

export default withTranslation()(CodePhone)