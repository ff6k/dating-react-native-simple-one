import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'

export default function imageShowModel(props) {
    const { visible, setIsVisible, images, index, getIndexImage } = props
    let indexImage = index
    const [isShowMenu, setIsShowMenu] = useState(false)

    const onClickImage = () => {
        setIsShowMenu(!isShowMenu)
    }

    const onLongPressImage = () => {
        isShowMenu && setIsShowMenu(false)
    }

    const onPressBack = () => {
        setIsVisible(false)
        getIndexImage && getIndexImage(indexImage)
    }

    const onChangeImage = (index) => {
        indexImage = index
    }

    return (
        <Modal visible={visible} transparent={true}
        >
            {isShowMenu && <View style={styles.containerTabHeader}>
                <TouchableOpacity
                    onPress={() => onPressBack()}
                >
                    <Icon
                        size={SIZE_ICON_HEADER}
                        color={'white'}
                        name="arrow-ios-back"></Icon>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Icon
                        size={SIZE_ICON_HEADER}
                        color={'white'}
                        name="menu"></Icon>
                </TouchableOpacity>
            </View>}
            <ImageViewer imageUrls={images}
                index={index}
                onClick={() => onClickImage()}
                onLongPress={() => onLongPressImage()}
                onSave={(index) => console.log(index)}
                onChange={(index) => onChangeImage(index)}
            />
            {isShowMenu && <View style={styles.containerTabFooter}>
                <TouchableOpacity>
                    <Icon
                        size={SIZE_ICON_FOOTER}
                        color={'white'}
                        name="edit"></Icon>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        size={SIZE_ICON_FOOTER}
                        color={'white'}
                        name="share"></Icon>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Icon
                        size={SIZE_ICON_FOOTER}
                        color={'white'}
                        name="trash-2"></Icon>
                </TouchableOpacity>
            </View>}
        </Modal>
    )
}

const SIZE_ICON_FOOTER = 25
const SIZE_ICON_HEADER = 30
const styles = StyleSheet.create({
    containerTabHeader: {
        ...Themes.Styles.TabMenu,
        justifyContent: 'space-between',

    },
    containerTabFooter: {
        ...Themes.Styles.TabMenu,
        justifyContent: 'space-around',
        bottom: 0
    }
})
