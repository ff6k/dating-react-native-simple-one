import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
export default function myAlbumsTest() {
    const images = [{
        // Simplest usage.
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

        // width: number
        // height: number
        // Optional, if you know the image size, you can set the optimization performance

        // You can pass props to <Image />.
        props: {

        }
    }, {
        url: '',
        props: {
            // Or you can set source directory.
            source: require('/src/assets/images/my_avatar.jpg')
        }
    }]

    const [visible, setIsVisible] = useState(true);
    return (
        <Modal visible={visible} transparent={true}>
            <Text>Close</Text>
            <ImageViewer imageUrls={images} />
        </Modal>
    )
}

const styles = StyleSheet.create({})
