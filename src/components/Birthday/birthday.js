import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import DateTimePicker from '/src/components/UI/dateTimePicker'
import { withTranslation } from 'react-i18next'
import ButtonBack from '/src/components/UI/buttonBack'
import AwesomeAlert from 'react-native-awesome-alerts';
import ConfirmModal from '/src/components/Model/confirmModal'

function BirthDay(props) {
    const { t, onPressBackButton, onPressNextButton, onGetDate, isShowAlert, changeShowAlert, isShowAlertFail, changeShowAlertFail,
        isShowConfirmModal, onPressButtonLeft, onPressButtonRight } = props
    const onPressBack = () => {
        onPressBackButton && onPressBackButton()
    }

    const getDate = (date) => {
        onGetDate && onGetDate(date)
    }

    return (
        <View style={{ flex: 1 }}>
            <ButtonBack
                name="arrow-back-outline"
                onPress={onPressBack}
            />
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>{t("Enter your")}</Text>
                <Text style={styles.txtTitle2}>{t("Birthday")}</Text>
                <DateTimePicker
                    style={styles.inpDateTime}
                    styleText={styles.txtDateTime}
                    modeShow={'date'}
                    onGetDate={getDate}
                />
                <Text style={styles.txtDetail}>{t("Your age will be public")}</Text>
            </View>
            <ButtonNext isGradient={true}
                onPress={onPressNextButton}
            />
            <AwesomeAlert
                show={isShowAlert}
                title={"FBI Warning !"}
                message={"Only users who are 18 or older can use our app"}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                contentStyle={{ width: 300, height: 120, }}
                confirmText="Yes, i agree"
                messageStyle={styles.txtMessageAlert}
                confirmButtonColor="#DD6B55"
                confirmButtonTextStyle={styles.txtConfirm}
                titleStyle={styles.titleAlert}
                onConfirmPressed={() => {
                    changeShowAlert();
                }}
            />
            <AwesomeAlert
                show={isShowAlertFail}
                title={"Error !"}
                message={"Save your birthday fail. Try again ?"}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                contentStyle={{ width: 300, height: 120, }}
                confirmText="Yes, i agree"
                messageStyle={styles.txtMessageAlert}
                confirmButtonColor="#DD6B55"
                confirmButtonTextStyle={styles.txtConfirm}
                titleStyle={styles.titleAlert}
                onConfirmPressed={() => {
                    changeShowAlertFail();
                }}
            />
            <ConfirmModal
                isVisible={isShowConfirmModal}
                title={"Are you sure you want to log out?"}
                textButtonLeft={"Cancel"}
                txtButtonRight={"Quit"}
                onPressButtonLeft={onPressButtonLeft}
                onPressButtonRight={onPressButtonRight}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    txtConfirm: {
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    titleAlert: {
        fontSize: 17,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    txtMessageAlert: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    txtDetail: {
        ...Themes.Styles.txtDetail
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    },
    inpDateTime: {
        borderBottomWidth: 0.5
    },
    txtDateTime: {
        fontSize: Themes.Const.FONT_SIZE_V1 - 5,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontMediumDefault
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

export default withTranslation()(BirthDay)