import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import BottomHalfModel from '/src/components/Model/bottomHalfModel'
import Themes from '/src/themes'

export default function uploadImageModal(props) {
    const { isVisible, setVisibleModel, t, onUploadPhoto, onTakePhoto } = props
    return (
        <BottomHalfModel
            numberRow={3}
            isVisible={isVisible} setVisibleModel={setVisibleModel}
        >
            <TouchableOpacity style={styles.btnBetweenContent}
                onPress={() => onUploadPhoto()}>
                <Text style={styles.txtContentButton}>{"Upload photo from gallery"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottomContent}
                onPress={() => onTakePhoto()}>
                <Text style={styles.txtContentButton}>{'Take photo with camera'}</Text>
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
