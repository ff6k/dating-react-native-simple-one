import React, { useState } from 'react'
import Picture from './picture'
import { launchCamera, launchImageLibrary } from '/src/configs/Camera'
import Const from '/src/const'
import { useSelector } from 'react-redux'

export default function PictureController(props) {
    const { route, navigation } = props
    const [isVisible, setIsVisible] = useState(false)
    const [uriImage, setUriImage] = useState(null)
    const [dataImage, setDataImage] = useState(null)

    const setVisibleModel = () => {
        setIsVisible(!isVisible)
    }

    const onPressBack = () => {
        navigation.goBack()
    }

    const pressUploadPhoto = () => {
        setVisibleModel()
        launchImageLibrary(res => {
            const { uri, fileName, type } = res
            const name = fileName
            setDataImage({ uri, name, type })
        })
    }

    const onPressAdd = () => {
        setVisibleModel();
    }

    const pressTakePhoto = async () => {
        launchCamera(res => setUriImage(res.fileUri))
        setVisibleModel()
    }

    const uploadImage = async () => {
        const data = new FormData(dataImage)
        data.append('file', dataImage)
        data.append('upload_preset', 'date_app')
        data.append('cloud_name', 'dating-app-2020')
        fetch("https://api.cloudinary.com/v1_1/dating-app-2020/image/upload", {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.json())
            .then(
                data => {
                    const { date, gender } = route.params
                    const dataSave = { date, gender, data: data.url }
                    saveDataInfoLogin(dataSave)
                }
            ).catch(err => console.log(err))
    };

    const saveDataInfoLogin = (data) => {
        console.log(data)
    }

    const onPressNext = () => {
        uploadImage()
    }

    return (
        <Picture
            onPressBack={onPressBack}
            pressUploadPhoto={pressUploadPhoto}
            pressTakePhoto={pressTakePhoto}
            uri={uriImage}
            onPressNext={onPressNext}
            isVisible={isVisible}
            setVisibleModel={setVisibleModel}
            onPressAddButton={onPressAdd}
        />
    )
}
