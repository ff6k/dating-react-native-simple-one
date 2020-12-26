import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import PropTypes from 'prop-types'
import Icons from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';
import BottomHalfModel from '/src/components/Model/bottomHalfModel'
export default function avatarCircle(props) {
    const { url, style } = props;
    const [isVisible, setIsVisible] = useState(false);
    function setVisibleModel(isVisible) {
        setIsVisible(isVisible);
    }

    return (
        <View>
            <TouchableOpacity style={{ ...styles.container, ...style }}
                onPress={() => setVisibleModel(true)}>
                <Image style={styles.imgAvatar}
                    source={url}
                />
                <View style={styles.containerIcon}>
                    <Icons name="camera" color={'white'} size={13} style={styles.icon} />
                </View>
            </TouchableOpacity>
            <BottomHalfModel isVisible={isVisible} setVisibleModel={setVisibleModel} />
        </View>
    )
}


const sizeImage = 130;
const sizeIcon = 30;

const styles = StyleSheet.create({
    container: {
        width: sizeImage,
        height: sizeImage,
    },
    imgAvatar: {
        width: sizeImage,
        height: sizeImage,
        borderRadius: sizeImage / 2
    },
    containerIcon: {
        width: sizeIcon,
        height: sizeIcon,
        borderRadius: sizeIcon / 2,
        backgroundColor: '#C6CACB',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    icon: {
        alignSelf: 'center',
        fontSize: 18
    }
})
