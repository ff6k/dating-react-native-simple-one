import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native'
import PreferNotSay from '/src/components/UI/preferNotSay'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { withTranslation } from 'react-i18next'
import TextInputVirtues from '/src/components/UI/textInputVirtues'

function Job(props) {
    const { t, onPressNext } = props

    const [isReset, setIsReset] = useState(false)
    const [isWriting, setIsWriting] = useState(false)
    const [isDisable, setIsDisable] = useState(false)

    const onCheckPrefer = (isCheck) => {
        isCheck ? setIsWriting(true) : setIsWriting(false)
    }

    const onChangeText = (value) => {
        if (value === "") {
            setIsWriting(false)
            setIsDisable(false)
        } else {
            setIsWriting(true)
            setIsReset(true)
            setIsDisable(true)
        }
    }

    // useEffect(() => {
    //     if (isReset) {
    //         setIsReset(false);
    //     }

    // }, [isReset])

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSkip}>
                <Text style={styles.txtSkip}>{t("Skip")}</Text>
            </TouchableOpacity>
            <TextInputVirtues t={t}
                onChangeText={onChangeText}
                title={t("My virtues")}
                titleContent={t("Job")}
                placeholder={"UI Designer"}
                detail={t("This is how it will appear in datum")}
            />
            <ButtonNext isGradient={isWriting}
                onPress={() => isWriting && onPressNext && onPressNext()}
            />
            <PreferNotSay onCheckPrefer={onCheckPrefer} isReset={isReset} t={t} />
        </View>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        ...Themes.Styles.txtTitle
    },
    txtTitle2: {
        ...Themes.Styles.txtTitle2
    },
    containerContent: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    },
    txtDetail: {
        ...Themes.Styles.txtDetail
    },
    inpWork: {
        fontSize: Themes.Const.FONT_SIZE_V3,
        borderBottomWidth: Themes.Const.BORDER_TEXT_INPUT
    },
    txtSkip: {
        fontSize: 20,
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    btnSkip: {
        ...Themes.Styles.IconSkip
    }
})

export default withTranslation()(Job)