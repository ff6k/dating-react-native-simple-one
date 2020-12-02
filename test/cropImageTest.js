import React, { useState } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import Const from '/src/const'
const height_image = 600
const width_image = 400

export default function cropImageTest() {
    const [urlFile, setUrlFile] = useState(null)
    const open = () => {
        ImagePicker.openPicker({
            width: width_image,
            height: height_image,
            cropping: true
        }).then(image => {
            setUrlFile(image.path)
        });
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
                urlFile !== null ? <Image
                    resizeMode={'stretch'}
                    style={{ width: width_image, height: height_image, backgroundColor: 'yellow' }}
                    source={{ uri: urlFile }}
                />
                    :
                    <TouchableOpacity
                        onPress={() => open()}
                    >
                        <Text>Add</Text>

                    </TouchableOpacity>
            }
        </View>

    )
}

const styles = StyleSheet.create({})
