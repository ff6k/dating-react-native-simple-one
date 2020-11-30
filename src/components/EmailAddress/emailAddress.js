import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native'
import Themes from '/src/themes'
import ButtonNext from '/src/components/UI/buttonNext'
import { withTranslation } from 'react-i18next'
import IntroductionHelper from '/src/components/UI/introductionHelper'
import ButtonBack from '/src/components/UI/buttonBack'
import Utils from '/src/utils'
function EmailAddress(props) {
    const { t, isVisible, onPressLetsGo, email, onClickNextButton,
        onPressBack } = props

    const [inpEmail, setInpEmail] = useState(() => {
        return email
    });
    let isGradient = false
    const onChangeInputEmail = (value) => {
        setInpEmail(value)
    }

    const isValidateEmail = (email) => {
        return Utils.ValidateInput.validateEmail(email)
    }

    if (isValidateEmail(inpEmail)) {
        isGradient = true
    }

    const onClickNext = () => {
        onClickNextButton && onClickNextButton(inpEmail)
    }
    return (
        <View style={{ flex: 1 }}>
            <IntroductionHelper isVisible={isVisible} onPressLetsGo={onPressLetsGo} />
            <ButtonBack
                name="arrow-back-outline"
                onPress={() => onPressBack && onPressBack()}
            />
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>{t("Enter your")}</Text>
                <Text style={styles.txtTitle2}>{t("Email Address")}</Text>
                <TextInput placeholder={t('Enter your email address')}
                    value={inpEmail}
                    style={styles.inpEmail}
                    keyboardType={'email-address'}
                    onChangeText={(value) => onChangeInputEmail(value)}
                    onSubmitEditing={() => isValidateEmail(inpEmail) && onClickNext()}
                />
                <Text style={styles.txtDetail}>{t("Please enter your email in order to recover your account later")}</Text>
            </View>
            <ButtonNext isGradient={isGradient}
                onPress={onClickNext}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    txtDetail: {
        ...Themes.Styles.txtDetail
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    },
    inpEmail: {
        fontSize: Themes.Const.FONT_SIZE_V3,
        borderBottomWidth: Themes.Const.BORDER_TEXT_INPUT
    },
    txtTitle: {
        ...Themes.Styles.txtTitle
    },
    txtTitle2: {
        ...Themes.Styles.txtTitle2
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },

})

export default withTranslation()(EmailAddress)