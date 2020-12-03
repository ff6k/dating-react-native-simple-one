import React, { useEffect, useState } from 'react'
import Picture from './picture'
import { launchCamera, launchImageLibrary } from '/src/configs/Camera'
import Api from '/src/api'
import Const from '/src/const'
import { useSelector } from 'react-redux'
import Utils from '/src/utils'
import { BackHandler } from 'react-native'


let token
let idUser
export default function PictureController(props) {
    const { navigation } = props
    const [uriImage, setUriImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [dataImage, setDataImage] = useState(null)

    const refModalSlide = React.createRef()
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

    const onPressBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        } else {
            BackHandler.exitApp()
        }
    }

    const handImageData = (res) => {
        const { path, mime } = res
        const typeImage = mime.split('/')[1]
        const nameFile = new Date().getTime().toString() + `.${typeImage}`
        setUriImage(path)
        setDataImage({ uri: path, name: nameFile, type: mime })
    }
    const pressTakePhoto = () => {
        onCloseModalSlide()
        Utils.Images.openCameraCropImage()
            .then(res => handImageData(res))
            .catch(err => console.log(err))
    }
    const pressUploadPhoto = () => {
        onCloseModalSlide()
        Utils.Images.openPickerCropImage()
            .then(res => handImageData(res))
            .catch(err => console.log(err))
    }

    const onPressAdd = () => {
        onOpenModalSlide()
    }

    const uploadImage = async () => {
        console.log(dataImage)
        setIsLoading(true)
        Api.CloudinaryApi.postImageApiRequest(dataImage)
            .then(res => res.json())
            .then(
                data => {
                    saveDataPhotoApi(data)
                }
            ).catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    const saveDataPhotoApi = (data) => {
        const { public_id, url } = data
        const params = {
            url: url,
            publicId: public_id,
            id: idUser,
            token: token
        }
        Api.RequestApi.putPhotosApiRequest(params)
            .then(response => {
                navigation.replace(Const.NameScreens.BottomNavigation)
            }).catch(err => console.log(err))
    }

    const onPressNext = () => {
        uploadImage()
    }

    const onOpenModalSlide = () => {
        refModalSlide.current.open()
    }

    const onCloseModalSlide = () => {
        refModalSlide.current.close()
    }

    return (
        <Picture
            onPressBack={onPressBack}
            pressUploadPhoto={pressUploadPhoto}
            pressTakePhoto={pressTakePhoto}
            uri={uriImage}
            onPressNext={onPressNext}
            onPressAddButton={onPressAdd}
            isLoading={isLoading}
            ref={refModalSlide}
            onShowModalSlide={onOpenModalSlide}
        />
    )
}
