import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import Themes from '/src/themes'
import { withTranslation } from 'react-i18next';
import Const from '/src/const'
import HeaderSave from '/src/components/UI/headerSave'
import CardDropDown from './subComponents/cardDropDown'
import CardClick from './subComponents/cardClick'
import CardSlider from './subComponents/cardSlider'



let nameLang
function MyPreferences(props) {
    const { t, dataGender, codeLanguage, onPressAppLanguages, onPressBack, onChangeSlideAge, onPressSave, onChangeGender,
        minAge, maxAge, gender, isChange } = props

    if (codeLanguage === Const.Languages.languageCountry[0].code) {
        nameLang = Const.Languages.languageCountry[0].country
    }
    if (codeLanguage === Const.Languages.languageCountry[1].code) {
        nameLang = Const.Languages.languageCountry[1].country
    }

    const onSlideAge = (arrange) => {
        // let arrangeSplice = arrange.split(',')
        onChangeSlideAge && onChangeSlideAge(arrange[0], arrange[1])
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <HeaderSave
                t={t}
                title={t("Settings")}
                onPressBack={onPressBack}
                onPressSave={onPressSave}
                isChange={isChange}
            />
            <Text style={styles.txtHeader}>{t("My Preferences")}</Text>
            {/* <CardClick content={t("Ho Chi Minh City, VietNam")}
                title={t("My current location")}
            /> */}
            <CardDropDown
                content={t("Gender")}
                data={dataGender}
                onChangeGender={onChangeGender}
                itemDefault={gender ? gender : 'male'}
            />
            {/* <CardSlider
                content={"Height"}
                textSwitchLeft={"ft"}
                textSwitchRight={"cm"}
                valueStart={3}
                valueEnd={5}
                minValue={1}
                maxValue={10}
                isSwitch={true}
            /> */}
            <CardSlider
                content={t("Age")}
                isSwitch={false}
                onSlide={onSlideAge}
                valueStart={minAge}
                valueEnd={maxAge}
                minValue={18}
                maxValue={44}
            />
            {/* <CardSlider
                content={"Distance"}
                textSwitchLeft={"km"}
                textSwitchRight={"mi"}
                valueStart={10}
                valueEnd={20}
                minValue={0}
                maxValue={100}
                isSwitch={true}
            /> */}
            {/* <CardClick content={"Hetero"}
                title={"Sex Orientation"}
                nameIcon={"arrow-ios-forward-outline"}
            /> */}
            <Text style={styles.txtHeader}>{t("App Settings")}</Text>
            <CardClick content={nameLang}
                title={t("Your App Languages")}
                nameIcon={"arrow-ios-forward-outline"}
                onPress={onPressAppLanguages}
            />
        </ScrollView>
    )
}

export default withTranslation()(MyPreferences)

const FONT_SIZE = 18
const styles = StyleSheet.create({
    txtHeader: {
        fontSize: FONT_SIZE,
        marginLeft: 15,
        marginVertical: 10,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    container: {
        flex: 1,
        // backgroundColor: Themes.Colors.GRAY_BRIGHT_II
        // backgroundColor: 'white'
    },
})
