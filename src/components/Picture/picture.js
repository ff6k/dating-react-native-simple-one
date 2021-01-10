import React from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View, ScrollView } from 'react-native'
import Themes from '/src/themes'
import ButtonNext from '/src/components/UI/buttonNext'
import ImagePicker from '/src/components/UI/imagePicker'
import ButtonBack from '/src/components/UI/buttonBack'
import Const from '/src/const'
import BottomModalSlide from '/src/components/UI/bottomModalSlide'
import CoupleButtonImage from '/src/components/UI/coupleButtonImage'
import ConfirmModal from '/src/components/Model/confirmModal'
import SpinnerLoading from '/src/components/UI/spinnerLoading'
const Picture = React.forwardRef((props, ref) => {
    const { t, onPressBack, pressUploadPhoto, pressTakePhoto,
        uri, onPressNext, onPressAddButton, isLoading, onShowModalSlide,
        isShowConfirmModal,
        setIsShowConfirmModal, onPressButtonLeft, onPressButtonRight
    } = props


    const onChangeImage = () => {
        onShowModalSlide && onShowModalSlide()
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
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}>
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
                    onPressAdd={onPressAdd} />
            </View>
            <View style={styles.containButton}>
                {uri ? <TouchableOpacity
                    onPress={() => onChangeImage()}
                    style={styles.btnChange}
                >
                    <Text style={styles.txtChange}>{t("Change")}</Text>
                </TouchableOpacity> :
                    <View></View>}
                <ButtonNext
                    style={{ position: 'relative', marginTop: 10, marginRight: -20 }}
                    isGradient={uri ? true : false}
                    onPress={() => onPressNext && onPressNext()}
                />
            </View>

            <BottomModalSlide
                ref={ref}
                height={150}
            >
                <CoupleButtonImage
                    onTakePhoto={onTakePhoto}
                    onUploadPhoto={onUploadPhoto}
                />
            </BottomModalSlide>
            <ConfirmModal
                isVisible={isShowConfirmModal}
                setVisibleModel={setIsShowConfirmModal}
                title={"Are you sure you want to log out?"}
                textButtonLeft={"Cancel"}
                txtButtonRight={"Quit"}
                onPressButtonLeft={onPressButtonLeft}
                onPressButtonRight={onPressButtonRight}
            />
        </ScrollView>
    )
}
)

const styles = StyleSheet.create({

    containButton: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        marginHorizontal: 20, marginBottom: 20
    },

    btnChange: {
        // position: 'absolute',
        // left: Themes.Const.ABSOLUTE_BOTTOM,
        // bottom: Themes.Const.ABSOLUTE_BOTTOM + 20,
        marginTop: -60,
        marginLeft: 10
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
        height: Const.Common.deviceHeight - 150
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

// export default withTranslation()(Picture)
export default Picture