import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import DateTimePicker from '/src/components/UI/dateTimePicker'
import { withTranslation } from 'react-i18next'
import ButtonBack from '/src/components/UI/buttonBack'
function BirthDay(props) {
    const { t, onPressBackButton, onPressNextButton, onGetDate } = props

    const onPressBack = () => {
        onPressBackButton && onPressBackButton()
    }

    const onPressNext = () => {
        onPressNextButton && onPressNextButton()
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
                onPress={onPressNext}
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