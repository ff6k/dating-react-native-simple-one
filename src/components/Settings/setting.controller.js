import React, { useState } from 'react'
import Settings from './settings'
import { removeKeyStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'
import { resetData } from '/src/slice/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
export default function SettingController(props) {
    const { navigation } = props
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const dispatch = useDispatch()

    const dataStore = useSelector(state => state.login)
    const onPressLogout = () => {
        setIsShowConfirmModal(true)
    }

    const logoutUser = () => {
        dispatch(resetData())
        const isSuccess = removeKeyStorage(Const.StorageKey.CODE_LOGIN_TOKEN)
        const isSuccessPre = removeKeyStorage(Const.StorageKey.CODE_PREFERENCES)
        if (isSuccess && isSuccessPre) {
            navigation.replace(Const.NameScreens.SingInOrUp)
        }
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
            dataInfo={dataStore[1]}
        />
    )
}

