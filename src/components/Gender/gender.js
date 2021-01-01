import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Themes from '/src/themes'
import ButtonNext from '/src/components/UI/buttonNext'
import { withTranslation } from 'react-i18next'
import ButtonBack from '/src/components/UI/buttonBack'
import Icon from '/src/components/UI/icon'
import ConfirmModal from '/src/components/Model/confirmModal'

const GENDER = {
    MALE: "male",
    FEMALE: "female"
}
function Gender(props) {
    const { t, onPressBack, onPressNext, getGender,
        isShowConfirmModal,
        setIsShowConfirmModal, onPressButtonLeft, onPressButtonRight
    } = props

    const [gender, setGender] = useState(GENDER.MALE);
    const onCheck = (gender) => {
        setGender(gender);
    }

    const pressBack = () => {
        onPressBack && onPressBack()
    }

    useEffect(() => {
        getGender && getGender(gender)
    }, [gender])

    return (
        <View style={{ flex: 1 }}>
            <ButtonBack
                name="arrow-back-outline"
                onPress={pressBack}
            />
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>{t("Specify your")}</Text>
                <Text style={styles.txtTitle2}>{t("Gender")}</Text>
                <TouchableOpacity style={styles.btnGender}
                    onPress={() => onCheck(GENDER.MALE)}
                >
                    <Text style={[styles.txtGender,
                    gender === GENDER.MALE ? { color: 'black' } : { color: 'gray' }]} >{t("Male")}</Text>
                    {gender === GENDER.MALE && <Icon
                        name="checkmark-outline"
                        color={Themes.Colors.PINK_DARK}
                        size={30}
                    />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGender}
                    onPress={() => onCheck(GENDER.FEMALE)}
                >
                    <Text style={[styles.txtGender, gender === GENDER.FEMALE ? { color: 'black' } : { color: 'gray' }]} >{t("Female")}</Text>
                    {gender === GENDER.FEMALE && <Icon
                        name="checkmark-outline"
                        color={Themes.Colors.PINK_DARK}
                        size={30}
                    />}
                </TouchableOpacity>
            </View>
            <ButtonNext isGradient={true}
                onPress={() => onPressNext && onPressNext()}
            />
            <ConfirmModal
                isVisible={isShowConfirmModal}
                setVisibleModel={setIsShowConfirmModal}
                title={"Are you sure you want to log out?"}
                textButtonLeft={"Cancel"}
                txtButtonRight={"Quit"}
                onPressButtonLeft={onPressButtonLeft}
                onPressButtonRight={onPressButtonRight}
            />
        </View>
    )
}
const PADDING_VERTICAL = 10;
const styles = StyleSheet.create({
    txtGender: {
        fontSize: 20,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    btnGender: {
        paddingVertical: PADDING_VERTICAL,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
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

export default withTranslation()(Gender)
