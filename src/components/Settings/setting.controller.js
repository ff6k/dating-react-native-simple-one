import React, { useState } from 'react'
import Settings from './settings'
import { removeKeyStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'
import { resetData } from '/src/slice/loginSlice'
import { useDispatch } from 'react-redux'

export default function SettingController(props) {
    const { navigation } = props
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const dispatch = useDispatch()

    const onPressLogout = () => {
        setIsShowConfirmModal(true)
    }

    const logoutUser = () => {
        const isSuccess = removeKeyStorage(Const.StorageKey.CODE_LOGIN_TOKEN)
        if (isSuccess) {
            navigation.replace(Const.NameScreens.SingInOrUp)
        }
    }

    const onPressMyProfile = () => {
        // console.log('object')
        navigation.navigate(Const.NameScreens.MyProfile)
    }


    const onPressMyPreferences = () => {
        navigation.navigate(Const.NameScreens.MyPreferences)
    }

    const onPressMyAlbums = () => {
        navigation.navigate(Const.NameScreens.MyAlbums)
        // console.log('albums')
    }

    const onPressButtonLeft = () => {
        setIsShowConfirmModal(false)
    }

    const onPressButtonRight = () => {
        setIsShowConfirmModal(false)
        dispatch(resetData())
        logoutUser()
    }

    return (
        <Settings
            onPressLogout={onPressLogout}
            isShowConfirmModal={isShowConfirmModal}
            setIsShowConfirmModal={setIsShowConfirmModal}
            onPressMyProfile={onPressMyProfile}
            onPressMyPreferences={onPressMyPreferences}
            onPressMyAlbums={onPressMyAlbums}
            onPressButtonLeft={onPressButtonLeft}
            onPressButtonRight={onPressButtonRight}
        />
    )
}

