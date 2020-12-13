import React from 'react'
import { StyleSheet, View } from 'react-native'
import Themes from '/src/themes'
import Image from 'react-native-fast-image'
export default function circleAvatarActive(props) {
    const { dataHeader, sizeAvatar, sizeActive, isShowActive } = props
    let photoUrlTemp, isActiveTemp
    if (dataHeader !== undefined) {
        const { photoUrl, isActive } = dataHeader
        photoUrlTemp = photoUrl
        isActiveTemp = isActive
    }
    return (
        <View
            style={[styles.containerAvatar, { width: sizeAvatar }]}
        >
            <Image
                // source={{
                //     uri: uriImage
                // }
                // }
                resizeMode={'stretch'}
                source={{ uri: photoUrlTemp }}
                style={[styles.imgAvatar, { width: sizeAvatar, height: sizeAvatar, borderRadius: sizeAvatar / 2 }]}
            />
            {
                isShowActive &&
                <View style={[styles.viewActive, { backgroundColor: Themes.Colors.GREEN_BRIGHT, right: sizeActive, bottom: sizeActive }]} />
                ||
                isShowActive &&
                <View style={[styles.viewActive, { backgroundColor: 'gray', right: sizeActive, bottom: sizeActive }]} />
            }
        </View>
    )
}

const SIZE_CIRCLE_ACTIVE = 13
const styles = StyleSheet.create({
    imgAvatar: {},
    containerAvatar: {
    },
    viewActive: {
        width: SIZE_CIRCLE_ACTIVE, height: SIZE_CIRCLE_ACTIVE, borderRadius: SIZE_CIRCLE_ACTIVE / 2,
        position: 'absolute',
    },
})
