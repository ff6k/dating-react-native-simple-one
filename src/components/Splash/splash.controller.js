import React, { useEffect } from 'react'
import Splash from './splash'
import { readStorage, saveStorage, saveDataUserStorage, removeKeyStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'
import { changeLanguage } from '/src/translations'
import { useDispatch } from 'react-redux'
import { pushDataLoginEmail } from '/src/slice/loginSlice'
import { pushDataAgeAndGender } from '/src/slice/preferenceSlice'
import Api from '/src/api'

export default function SplashController(props) {
    const { navigation } = props

    const dispatch = useDispatch()

    useEffect(() => {
        const setDataStoreReduxProfile = (token, id, preferences, data) => {
            Api.RequestApi.getProfileApiRequest({ token, id })
                .then(res => {
                    console.log('vo day')
                    console.log(JSON.stringify(res.data))
                    const { dateOfBirth, gender, photos, name } = res.data
                    dispatch(pushDataLoginEmail(res.data))

                    if ((preferences === null || preferences === undefined)) {
                        console.log('save gender')
                        if (gender !== null) {
                            let genderOpposite
                            if (gender === 'male') {
                                genderOpposite = 'female'
                            }
                            else {
                                genderOpposite = 'male'
                            }
                            const data = {
                                gender: genderOpposite,
                                minAge: 18,
                                maxAge: 22
                            }
                            saveDataUserStorage(Const.StorageKey.CODE_PREFERENCES, [genderOpposite, 18, 22])
                            dispatch(pushDataAgeAndGender(data))
                        }
                    }
                    if (dateOfBirth === null) {
                        navigation.replace(Const.NameScreens.Birthday)
                    }
                    else if (gender === null) {
                        navigation.replace(Const.NameScreens.Gender)
                    }
                    else if (photos === null || photos.length === 0) {
                        navigation.replace(Const.NameScreens.Picture)
                    }
                    else {
                        // const dataTemp = { ...data, photos: photos, name: name, dateOfBirth }
                        // console.log(`dataTemp: ${JSON.stringify(dataTemp)}`);
                        navigation.replace(Const.NameScreens.BottomNavigation)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

        const checkNavigationScreen = (dataLogin, codeApp, preferences) => {
            if (dataLogin !== undefined) {
                const [jwtToken, id, exp] = JSON.parse(dataLogin)
                console.log(`jwtToken: ${jwtToken}`);
                const timeNow = Math.round(new Date().getTime() / 1000)
                if (timeNow < exp) {
                    const data = {
                        jwtToken: jwtToken,
                        id: id
                    }
                    dispatch(pushDataLoginEmail(data))
                    setDataStoreReduxProfile(jwtToken, id, preferences, data)

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

        const savePreferencesStore = (dataPre) => {
            const [gender, minAge, maxAge] = JSON.parse(dataPre)
            const data = {
                gender,
                minAge,
                maxAge
            }
            dispatch(pushDataAgeAndGender(data))
        }

        const run = async () => {
            Promise.all([
                readStorage(Const.StorageKey.CODE_LANGUAGES),
                readStorage(Const.StorageKey.CODE_LOGIN_TOKEN),
                readStorage(Const.StorageKey.CODE_OPEN_APP),
                readStorage(Const.StorageKey.CODE_PREFERENCES)
            ]).then(async ([codeLang, dataLogin, codeApp, preferences]) => {
                if (codeLang !== null && codeLang !== undefined) {
                    changeLanguage(codeLang)
                } else {
                    saveStorage(Const.StorageKey.CODE_LANGUAGES, 'en')
                }
                if (preferences !== null && preferences !== undefined) {
                    savePreferencesStore(preferences)
                }
                checkNavigationScreen(dataLogin, codeApp, preferences)

            })
                .catch(err => console.log(err))

        }
        setTimeout(
            () => run(), 1500
        )
    }, [])
    return (
        <Splash />
    )
}

