import React, { useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import Themes from '/src/themes'
import Icon from 'react-native-vector-icons/Ionicons';
import AvatarCircle from 'src/components/UI/avatarCircle.js'
import TextInputPhone from '/src/components/UI/textInputPhone'
import { withTranslation } from 'react-i18next';
function SignUpPhone(props) {
    const { t, tReady } = props;

    const refInpPhone = useRef()

    return (

        <ScrollView>
            <TouchableOpacity style={styles.btnIcon}>
                <Icon name="chevron-back-outline" color={Themes.Colors.PINK} size={Themes.Const.SIZE_ICON}></Icon>
            </TouchableOpacity>
            <Text style={styles.txtTitle}> {t('Create new account')} </Text>
            <TextInput style={styles.inpEnter} placeholder={t('Name')} autoCompleteType={'username'}
                onSubmitEditing={() => refInpPhone.current.focus()}
            />
            <TextInputPhone t={t} forwardRef={refInpPhone} />
            <TouchableOpacity style={styles.btnSendCode}>
                <Text style={styles.txtSendCode}>{t('Send code')}</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> {t('OR')} </Text>
            <TouchableOpacity style={styles.btnSignUpEmail}>
                <Text style={styles.txtSignUpEmail}>{t('Sign up with E-mail')}</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    avatar: {
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    inpEnter: {
        ...Themes.Styles.TextInput,
        fontSize: Themes.Const.FONT_SIZE,
        marginTop: Themes.Const.MARGIN_TOP,
    },
    btnSendCode: {
        ...Themes.Styles.Button,
        backgroundColor: Themes.Colors.PINK,
        marginTop: Themes.Const.MARGIN_TOP,
    },
    txtSendCode: {
        ...Themes.Styles.TextButton,
    },
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_V1,
        marginBottom: Themes.Const.MARGIN_V1,
    },
    btnSignUpEmail: {
        ...Themes.Styles.ButtonBottom,
        width: 150,
        marginTop: 0,
    },
    txtSignUpEmail: {
        ...Themes.Styles.TextButtonBottom,
    },



})

export default withTranslation()(SignUpPhone)