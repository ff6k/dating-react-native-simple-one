import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'

export default function coupleButtonImage(props) {
    const { onTakePhoto, onUploadPhoto } = props
    return (
        <View>
            <TouchableOpacity style={styles.containItemModal}
                onPress={() => onTakePhoto && onTakePhoto()}
            >
                <View style={styles.containIconModal}>
                    <Icon
                        size={25}
                        color={'black'}
                        name="radio-button-on"></Icon>
                </View>
                <Text style={styles.txtModal}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containItemModal}
                onPress={() => onUploadPhoto && onUploadPhoto()}
            >
                <View style={styles.containIconModal}>
                    <Icon
                        size={25}
                        color={'black'}
                        name="image"></Icon>
                </View>
                <Text style={styles.txtModal}>Upload Gallery</Text>
            </TouchableOpacity>
        </View>
    )
}
const SIZE_RADIUS = 40

const styles = StyleSheet.create({
    containItemModal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    txtModal: {
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    containIconModal: {
        backgroundColor: Themes.Colors.GRAY_BRIGHT_II,
        width: SIZE_RADIUS,
        height: SIZE_RADIUS,
        borderRadius: SIZE_RADIUS / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
})
