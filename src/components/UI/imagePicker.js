import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View, TextInput } from 'react-native'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'

export default function imagePicker(props) {
    const { onPressAdd, t, urlImage } = props;
    console.log("imagePicker -> urlImage", urlImage)

    return (
        <View style={styles.containerViewImage}>
            <View style={styles.containerRotate} />
            <View style={styles.containerImage} />
            {
                urlImage !== null ?
                    (<View style={styles.containerImagePicker}>
                        <Image source={{ uri: urlImage }} resizeMode={'stretch'}
                            style={styles.imgPicker} />
                    </View>)
                    :
                    (<View style={styles.containerPicker}>
                        <TouchableOpacity style={styles.containerIcon} onPress={() => onPressAdd()}>
                            <Icon name="plus-outline"
                                size={60}
                                style={styles.icoAdd}
                                color={"#BDB6BB"}
                            />
                        </TouchableOpacity>
                        <Text style={styles.txtAddPhoto}>{t("Add your photo")}</Text>
                    </View>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerImagePicker: {
        elevation: 7,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        position: 'absolute', zIndex: 1,
    },
    imgPicker: {
        width: '100%',
        height: '100%',
        borderRadius: 10,

    },
    image: {
        backgroundColor: 'red', width: '100%', height: '100%', alignSelf: 'center',
        borderRadius: 10,
    },
    txtAddPhoto: {
        color: '#BDB6BB',
        fontSize: 22,
        alignSelf: 'center',
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    icoAdd: {
        alignSelf: 'center'
    },
    containerIcon: {
        justifyContent: 'center',
        borderWidth: 2.5,
        borderColor: '#BDB6BB',
        width: 90,
        height: 90,
        borderRadius: 100 / 2,
        alignSelf: 'center'
    },
    containerPicker: {
        width: 200,
        height: 150,
        alignSelf: 'center',
        justifyContent: 'space-between',
        elevation: 7,
        position: 'absolute', zIndex: 1,
        // marginTop: 160,
        top: '35%'
    },
    containerImage: {
        ...Themes.Styles.shadowButton,
        justifyContent: 'center',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        borderRadius: 10,

        alignSelf: 'center',
    },
    containerViewImage: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
        height: Themes.Const.SIZE_CONTENT_INSIDE,
    },
    containerRotate: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3,
        transform: [{ rotate: "-7deg" }],
    },

})
