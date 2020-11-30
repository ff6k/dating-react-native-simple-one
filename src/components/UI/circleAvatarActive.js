import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Themes from '/src/themes'

export default function circleAvatarActive(props) {
    const { item, sizeAvatar, sizeActive, isShowActive } = props
    const { photoUrl, isActive } = item
    return (
        <View
            style={[styles.containerAvatar, { width: sizeAvatar }]}
        >
            <Image
                // source={{
                //     uri: uriImage
                // }
                // }
                source={{ uri: photoUrl }}
                style={[styles.imgAvatar, { width: sizeAvatar, height: sizeAvatar, borderRadius: sizeAvatar / 2 }]}
            />
            {
                isShowActive && isActive &&
                <View style={[styles.viewActive, { backgroundColor: Themes.Colors.GREEN_BRIGHT, right: sizeActive, bottom: sizeActive }]} />
                ||
                isShowActive && !isActive &&
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
        position: 'absolute'
    },
})
