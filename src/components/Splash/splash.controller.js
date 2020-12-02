import React, { useEffect } from 'react'
import Splash from './splash'
import { readStorage, saveStorage, getDataUserStorage, removeKeyStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'
import { changeLanguage } from '/src/translations'
import { useDispatch } from 'react-redux'
import { pushDataLoginEmail } from '/src/slice/loginSlice'

export default function SplashController(props) {
    const { navigation } = props

    const dispatch = useDispatch()

    useEffect(() => {
        const checkNavigationScreen = (dataLogin, codeApp) => {
            if (dataLogin !== undefined) {
                const [jwtToken, id, exp] = JSON.parse(dataLogin)
                const timeNow = Math.round(new Date().getTime() / 1000)
                if (timeNow < exp) {
                    const data = {
                        jwtToken: jwtToken,
                        id: id
                    }
                    dispatch(pushDataLoginEmail(data))
                    navigation.replace(Const.NameScreens.BottomNavigation)
                } else {
                    removeKeyStorage(Const.StorageKey.CODE_LOGIN_TOKEN)
                    navigation.replace(Const.NameScreens.SingInOrUp)
                }

            } else {
                if (codeApp !== undefined) {
                    navigation.replace(Const.NameScreens.SingInOrUp)
                }
                else {
                    saveStorage(Const.StorageKey.CODE_OPEN_APP, 'App_Dating')
                    navigation.replace(Const.NameScreens.Introduction)
                }
            }
        }

        const run = async () => {
            Promise.all([
                readStorage(Const.StorageKey.CODE_LANGUAGES),
                readStorage(Const.StorageKey.CODE_LOGIN_TOKEN),
                readStorage(Const.StorageKey.CODE_OPEN_APP)
            ]).then(async ([codeLang, dataLogin, codeApp]) => {
                if (codeLang !== null && codeLang !== undefined) {
                    changeLanguage(codeLang)
                    checkNavigationScreen(dataLogin, codeApp)
                } else {
                    saveStorage(Const.StorageKey.CODE_LANGUAGES, 'en')
                    checkNavigationScreen(dataLogin, codeApp)
                }
            })

        }
        setTimeout(
            () => run(), 1500
        )
    }, [])
    return (
        <Splash />
    )
}

