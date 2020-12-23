import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import BottomHalfModel from '/src/components/Model/bottomHalfModel'
import Themes from '/src/themes'
import { withTranslation } from 'react-i18next';

function UploadImageModal(props) {
    const { isVisible, setVisibleModel, t, onUploadPhoto, onTakePhoto } = props
    return (
        <BottomHalfModel
            numberRow={3}
            isVisible={isVisible} setVisibleModel={setVisibleModel}
        >
            <TouchableOpacity style={styles.btnBetweenContent}
                onPress={() => onUploadPhoto && onUploadPhoto()}>
                <Text style={styles.txtContentButton}>{t("Upload photo from gallery")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottomContent}
                onPress={() => onTakePhoto && onTakePhoto()}>
                <Text style={styles.txtContentButton}>{t('Take photo with camera')}</Text>
            </TouchableOpacity>
        </BottomHalfModel>
    )
}

const styles = StyleSheet.create({
    btnBetweenContent: {
        ...Themes.Styles.BtnBetweenContent
    },
    txtContentButton: {
        ...Themes.Styles.TxtContentButton
    },
    btnBottomContent: {
        ...Themes.Styles.BtnBottomContent
    },
})

export default withTranslation()(UploadImageModal)

