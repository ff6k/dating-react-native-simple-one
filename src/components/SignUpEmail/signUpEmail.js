import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { withTranslation } from 'react-i18next';
import AlertModal from '/src/components/Model/alertModal'
import PassMeter from "react-native-passmeter";
import Const from '/src/const'
import Themes from '/src/themes'
import Utils from '/src/utils'
import Icon from '/src/components/UI/icon'
import SpinnerLoading from '/src/components/UI/spinnerLoading'

/**
 * UNIT TEST
 * not input data : Finish
 * not enter name : Finish
 * not enter email address : Finish
 * not enter confirm email : Finish
 * not enter password : Finish
 * incorrect email format : Finish
 * check password strong : Finish
 * 
 */
function SignUpEmail(props) {
    const { t, isLoading, onSignUpEmail, isShowModalSuccess, isShowModalFail,
        onPressButtonModal,
        onPressBack,
        message } = props;

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const refEmail = useRef()
    const refConfirmPassword = useRef()
    const refPassword = useRef()

    let isVisible = true
    let emailCheck = false
    let nameCheck = false
    let confirmPasswordCheck = false
    let strongPassCheck = false

    const onPressSignUp = () => {
        onSignUpEmail && onSignUpEmail({ name, email, confirmPassword, password })
    }

    const onBack = () => {
        onPressBack && onPressBack()
    }

    // check name input
    if (name !== "") {
        nameCheck = true
    }

    // check email input
    if (email !== "") {
        const emailValid = Utils.ValidateInput.validateEmail(email)
        if (emailValid) {
            emailCheck = true
        }
    }

    // check confirm email
    if (confirmPassword !== "") {
        if (confirmPassword === password) {
            confirmPasswordCheck = true
        }
    }

    // check password strong
    if (password !== "") {
        const checkPass = Utils.ValidateInput.validatePassword(password, Const.Common.MIN_LEN_PASSWORD)
        if (checkPass > 1) {
            strongPassCheck = true
        }
    }

    // check no data input
    if (emailCheck && nameCheck && confirmPasswordCheck && strongPassCheck) {
        isVisible = !isVisible
    }

    const colorCheck = "green"
    return (
        <ScrollView>
            <SpinnerLoading isLoading={isLoading}
                source={require('/src/assets/lotties/9844-loading-40-paperplane.json')}
            />
            <TouchableOpacity style={styles.btnIcon}
                onPress={() => onBack()}
            >
                <Icon name="arrow-ios-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> {t('Create new account')} </Text>
            <View
                style={[styles.inpEnter, { marginTop: Themes.Const.MARGIN_TOP_V3 }]}
            >
                <TextInput
                    style={styles.inpData}
                    placeholder={t('Name')}
                    onChangeText={(value) => setName(value)}
                    onSubmitEditing={() => refEmail.current.focus()}
                />
                {nameCheck && <Icon name="checkmark-outline"
                    size={25}
                    color={colorCheck}
                    style={styles.icoCheck}></Icon>}
            </View>

            <View
                style={[styles.inpEnter]}>
                <TextInput
                    style={styles.inpData}
                    placeholder={t('Email Address')} keyboardType={'email-address'}
                    onChangeText={(value) => setEmail(value)}
                    ref={refEmail}
                    onSubmitEditing={() => refPassword.current.focus()}
                />
                {emailCheck && <Icon name="checkmark-outline"
                    size={25}
                    color={colorCheck}
                    style={styles.icoCheck}></Icon>}
            </View>
            <View
                style={[styles.inpEnter]}>
                <TextInput
                    ref={refPassword}
                    style={styles.inpData}
                    maxLength={Const.Common.MAX_LEN_PASSWORD}
                    placeholder={t('Password')}
                    secureTextEntry
                    onSubmitEditing={() => refConfirmPassword.current.focus()}
                    onChangeText={password => setPassword(password)}
                />
                {strongPassCheck && <Icon name="checkmark-outline"
                    size={25}
                    color={colorCheck}
                    style={styles.icoCheck}></Icon>}
            </View>
            <PassMeter
                maxStrong={1}
                height={2}
                width={270}
                showLabels
                password={password}
                maxLength={Const.Common.MAX_LEN_PASSWORD}
                minLength={Const.Common.MIN_LEN_PASSWORD}
                labels={Const.Common.PASS_LABELS}
            />
            <View
                style={[styles.inpEnter]}>
                <TextInput
                    style={styles.inpData}
                    placeholder={t('Confirm Password')}
                    onChangeText={(value) => setConfirmPassword(value)}
                    secureTextEntry
                    ref={refConfirmPassword}
                    onSubmitEditing={() => !isVisible && onPressSignUp()}
                />
                {confirmPasswordCheck && <Icon name="checkmark-outline"
                    size={25}
                    color={colorCheck}
                    style={styles.icoCheck}></Icon>}
            </View>


            <TouchableOpacity
                disabled={isVisible}
                style={[styles.btnSignUpEmail, !isVisible ? { backgroundColor: Themes.Colors.PINK } : { backgroundColor: 'gray' }]}
                onPress={() => onPressSignUp()}
            >
                <Text style={styles.txtSignUpEmail}>{t('Sign Up')}</Text>
            </TouchableOpacity>
            <AlertModal visible={isShowModalSuccess}
                title={"Successful"}
                detail={message}
                textButton={"OK"}
                colorButton={Themes.Colors.GREEN_BRIGHT_I}
                onPressButton={onPressButtonModal}
            />
            <AlertModal
                visible={isShowModalFail}
                urlImage={require('/src/assets/images/warning.png')}
                title={"Error"}
                detail={message}
                textButton={"Try Again"}
                colorButton={"#FF0000"}
                onPressButton={onPressButtonModal}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inpData: {
        flex: 1,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    icoCheck: {
        alignSelf: 'center'
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    avatar: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_TOP,
    },
    inpEnter: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
        alignItems: 'center',
        flexDirection: 'row', justifyContent: 'space-between',
    },
    btnSignUpEmail: {
        ...Themes.Styles.Button,
        // backgroundColor: Themes.Colors.PINK,
        marginTop: Themes.Const.MARGIN_TOP,
    },
    txtSignUpEmail: {
        ...Themes.Styles.TextButton,
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_TOP,
    },
    btnSignUpPhone: {
        ...Themes.Styles.ButtonBottom,
        width: 200,
    },
    txtPhone: {
        ...Themes.Styles.TextButtonBottom
    }
})

export default withTranslation()(SignUpEmail)
