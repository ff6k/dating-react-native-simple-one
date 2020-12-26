import React, { useEffect, useState } from 'react'
import Gender from './gender'
import Const from '/src/const'
import Api from '/src/api'
import { BackHandler } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { resetData } from '/src/slice/loginSlice'
import { removeKeyStorage } from '/src/configs/AsyncStorage'

let genderTemp = ""
let token
let idUser
export default function GenderController(props) {
    const { navigation } = props
    const dispatch = useDispatch()

    const dataStore = useSelector(state => state.login)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    const getDataStore = (dataStore) => {
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
        getDataStore(dataStore)
    }, [])

    const onPressBackButton = () => {
        setIsShowConfirmModal(true)
        // if (navigation.canGoBack()) {
        //     navigation.goBack()
        // } else {
        //     BackHandler.exitApp()
        // }
    }

    const onPressButtonLeft = () => {
        setIsShowConfirmModal(false)
    }

    const logoutUser = () => {
        dispatch(resetData())
        const isSuccess = removeKeyStorage(Const.StorageKey.CODE_LOGIN_TOKEN)
        const isSuccessPre = removeKeyStorage(Const.StorageKey.CODE_PREFERENCES)
        if (isSuccess && isSuccessPre) {
            navigation.replace(Const.NameScreens.Login)
        }
    }

    const onPressButtonRight = () => {
        setIsShowConfirmModal(false)
        logoutUser()
    }

    const onPressNext = () => {
        const params = {
            id: idUser,
            token: token,
            gender: genderTemp
        }
        Api.RequestApi.putProfileGenderApiRequest(params)
            .then(res => {
                navigation.navigate(Const.NameScreens.Picture)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getGender = (gender) => {
        genderTemp = gender
    }
    return (
        <Gender
            onPressBack={onPressBackButton}
            onPressNext={onPressNext}
            getGender={getGender}
            isShowConfirmModal={isShowConfirmModal}
            setIsShowConfirmModal={setIsShowConfirmModal}
            onPressButtonLeft={onPressButtonLeft}
            onPressButtonRight={onPressButtonRight}
        />
    )
}

