import React, { useEffect, useState } from 'react'
import MyProfile from './myProfile'

import Const from '/src/const'
import Api from '/src/api'
import Utils from '/src/utils'
import { useSelector } from 'react-redux'

let token
let indexPhoto
let idUser
export default function MyProfileController(props) {
    const { navigation } = props
    const [dataProfile, setDataProfile] = useState(null)
    const [dataPhotos, setDataPhotos] = useState(null)
    const dataStore = useSelector(state => state.login)
    const refSlideModal = React.createRef()

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

    const checkAndFillPhotos = (data, count) => {
        if (data.length < count) {
            const numFill = count - data.length
            for (let i = 1; i < numFill + 1; i++) {
                data.push({ id: i * 999, url: undefined })
            }
        }
        return data
    }


    useEffect(() => {
        getDataStore()
        const params = {
            id: idUser,
            token: token
        }
        async function getApiProfile() {
            return Api.RequestApi.getProfileApiRequest(params)
        }
        getApiProfile().then(res => {
            const photos = res.data.photos
            const dataPhotos = checkAndFillPhotos(photos, 9)
            setDataPhotos(dataPhotos)
            setDataProfile(res.data)
        })
            .catch(err => console.log(err))
        // .finally(() => setIsLoading(false))
    }, [])

    const onPressBack = () => {
        navigation.goBack()
    }

    const onPressInterest = () => {
        navigation.navigate(Const.NameScreens.InterestInfomation)
    }

    const onPressGender = () => {
        navigation.navigate(Const.NameScreens.EditGender)
    }

    const onPressReligious = () => {
        navigation.navigate(Const.NameScreens.Religious)
    }

    const onPressEthnicity = () => {
        navigation.navigate(Const.NameScreens.Ethnicity)
    }

    const onPressKids = () => {
        navigation.navigate(Const.NameScreens.EditKids)
    }

    const onPressFamilyPlans = () => {
        navigation.navigate(Const.NameScreens.EditFamilyPlan)
    }

    const onPressSmoking = () => {
        navigation.navigate(Const.NameScreens.EditSmoking)
    }

    const onPressDrinking = () => {
        navigation.navigate(Const.NameScreens.EditDrinking)
    }

    const onPressAddImage = (index) => {
        indexPhoto = index
        refSlideModal.current.open()
    }

    const onTakePhoto = () => {
        refSlideModal.current.close()
        Utils.Images.openCameraCropImage()
            .then(res => handleDataImage(res.path, indexPhoto))
            .catch(err => console.log(err))
    }

    const onUploadPhoto = () => {
        refSlideModal.current.close()
        Utils.Images.openPickerCropImage()
            .then(res => handleDataImage(res.path, indexPhoto))
            .catch(err => console.log(err))
    }
    const handleDataImage = (url, index) => {
        const data = [...dataPhotos]
        data[index].url = url
        setDataPhotos(data)

    }


    return (
        <MyProfile
            onPressDrinking={onPressDrinking}
            onPressSmoking={onPressSmoking}
            onPressBack={onPressBack}
            data={dataProfile}
            dataPhotos={dataPhotos}
            onPressInterest={onPressInterest}
            onPressGender={onPressGender}
            onPressReligious={onPressReligious}
            onPressEthnicity={onPressEthnicity}
            onPressKids={onPressKids}
            onPressFamilyPlans={onPressFamilyPlans}
            onPressAddImage={onPressAddImage}
            onUploadPhoto={onUploadPhoto}
            onTakePhoto={onTakePhoto}
            ref={refSlideModal}
        />
    )
}

