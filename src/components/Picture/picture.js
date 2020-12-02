import React from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native'
import Themes from '/src/themes'
import ButtonNext from '/src/components/UI/buttonNext'
import ImagePicker from '/src/components/UI/imagePicker'
import { withTranslation } from 'react-i18next'
import ButtonBack from '/src/components/UI/buttonBack'
import UploadImageModal from '/src/components/UI/uploadImageModal'
import SpinnerLoading from '/src/components/UI/spinnerLoading'
function Picture(props) {
    const { t, onPressBack, pressUploadPhoto, pressTakePhoto,
        uri, onPressNext, isVisible, setVisibleModel, onPressAddButton, isLoading } = props


    const onChangeImage = () => {
        setVisibleModel()
    }

    const onPressAdd = () => {
        onPressAddButton && onPressAddButton()
    }

    const onUploadPhoto = () => {
        pressUploadPhoto && pressUploadPhoto()
    }

    const onTakePhoto = () => {
        pressTakePhoto && pressTakePhoto()
    }

    return (
        <View style={{ flex: 1 }}>
            <SpinnerLoading isLoading={isLoading}
                source={require('/src/assets/lotties/9844-loading-40-paperplane.json')}
            />
            <ButtonBack
                name="arrow-back-outline"
                onPress={() => onPressBack && onPressBack()}
            />
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>{t("My best")}</Text>
                <Text style={styles.txtTitle2}>{t("Picture")}</Text>
                <ImagePicker
                    urlImage={uri}
                    onPressAdd={onPressAdd} t={t} />
            </View>
            <TouchableOpacity
                onPress={() => onChangeImage()}
                style={styles.btnChange}
            >
                <Text style={styles.txtChange}>{t("Change")}</Text>
            </TouchableOpacity>
            <ButtonNext isGradient={true}
                onPress={() => onPressNext && onPressNext()}
            />
            <UploadImageModal
                isVisible={isVisible}
                setVisibleModel={setVisibleModel}
                t={t}
                onUploadPhoto={onUploadPhoto}
                onTakePhoto={onTakePhoto}
            />
        </View>
    )
}

const styles = StyleSheet.create({



    btnChange: {
        position: 'absolute',
        left: Themes.Const.ABSOLUTE_BOTTOM,
        bottom: Themes.Const.ABSOLUTE_BOTTOM + 20,
    },
    txtChange: {
        fontSize: 22,
        color: '#323033',
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    containerBottom: {
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

export default withTranslation()(Picture)