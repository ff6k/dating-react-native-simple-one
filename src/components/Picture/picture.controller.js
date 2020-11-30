import React, { useEffect, useState } from 'react'
import Picture from './picture'
import { launchCamera, launchImageLibrary } from '/src/configs/Camera'
import Api from '/src/api'
import Const from '/src/const'
import { useSelector } from 'react-redux'


let token
let idUser
export default function PictureController(props) {
    const { route, navigation } = props
    const [isVisible, setIsVisible] = useState(false)
    const [uriImage, setUriImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [dataImage, setDataImage] = useState(null)

    const dataStore = useSelector(state => state.login)
    const getDataStore = () => {
        if (dataStore.length > 0) {
            const { jwtToken, id } = dataStore[0]
            token = jwtToken
            idUser = id
        }
        else {
            return null // empty data
        }
    }

    useEffect(() => {
        getDataStore()
    }, [])

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
            setUriImage(uri)
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
                    const dataSave = { date, gender, urlPhoto: data.url }
                    saveDataInfoLogin(dataSave)
                }
            ).catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    //TODO: request api info login if fix api server
    const saveDataInfoLogin = (data) => {
        const { urlPhoto, date, gender } = data

        const params = {
            id: idUser,
            token: token,
            gender: gender,
            dateOfBirth: date,
            urlPhoto: urlPhoto
        }
        // Api.RequestApi.putProfileApiRequest(params)
        //     .then(response => {
        //         console.log(response)
        //     }).catch(err => console.log(err))
    }

    const onPressNext = () => {
        setIsLoading(true)
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
            isLoading={isLoading}
        />
    )
}
