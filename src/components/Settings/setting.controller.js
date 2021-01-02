import React, { useState, useEffect } from 'react'
import Settings from './settings'
import { removeKeyStorage, readStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'
import { resetData as resetDataPre } from '/src/slice/preferenceSlice'
import { resetData as resetDataLogin } from '/src/slice/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import Api from '/src/api'

let token
export default function SettingController(props) {
    const { navigation } = props
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const dispatch = useDispatch()
    const dataStore = useSelector(state => state.login)

    const getDataStore = () => {
        if (dataStore.length > 0) {
            const { jwtToken } = dataStore[0]
            token = jwtToken
        }
        else {
            return null // empty data
        }
    }

    useEffect(() => {
        getDataStore()
    }, [])

    const onPressLogout = () => {
        setIsShowConfirmModal(true)
    }

    const logoutUser = async () => {

        const tokenFcm = await readStorage(Const.StorageKey.CODE_FRM_TOKEN)
        const params = {
            token,
            fcmToken: tokenFcm
        }

        Promise.all([
            Api.RequestApi.postDeleteFcmTokenApiRequest(params),
            dispatch(resetDataLogin()),
            dispatch(resetDataPre()),
            removeKeyStorage(Const.StorageKey.CODE_LOGIN_TOKEN),
            removeKeyStorage(Const.StorageKey.CODE_PREFERENCES),
            removeKeyStorage(Const.StorageKey.CODE_FRM_TOKEN)
        ]).then(async ([]) => {
            navigation.replace(Const.NameScreens.SingInOrUp)
        })
            .catch(err => {
                console.log(err)
            })
    }

    const onPressMyProfile = () => {
        navigation.navigate(Const.NameScreens.MyProfile)
    }


    const onPressMyPreferences = () => {
        navigation.navigate(Const.NameScreens.MyPreferences)
    }

    const onPressButtonLeft = () => {
        setIsShowConfirmModal(false)
    }

    const onPressButtonRight = () => {
        setIsShowConfirmModal(false)
        logoutUser()
    }

    return (
        <Settings
            onPressLogout={onPressLogout}
            isShowConfirmModal={isShowConfirmModal}
            setIsShowConfirmModal={setIsShowConfirmModal}
            onPressMyProfile={onPressMyProfile}
            onPressMyPreferences={onPressMyPreferences}
            onPressButtonLeft={onPressButtonLeft}
            onPressButtonRight={onPressButtonRight}
            dataInfo={dataStore[0]}
        />
    )
}

