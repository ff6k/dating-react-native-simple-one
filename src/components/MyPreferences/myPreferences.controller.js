import React, { useEffect, useState } from 'react'
import MyPreferences from './myPreferences'
import { readStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'


export default function MyPreferencesController(props) {
    const { navigation, route } = props
    const [code, setCode] = useState(null)

    const codeLang = route.params === undefined ? code : route.params.code

    useEffect(() => {
        const getCodeFromStorage = async () => {
            const data = await readStorage(Const.StorageKey.CODE_LANGUAGES)
            setCode(data)
        }
        getCodeFromStorage()
    }, [])

    const onPressAppLanguages = () => {
        navigation.navigate(Const.NameScreens.MultiLanguages, { code: codeLang })
    }

    const onPressBack = () => {
        // console.log('back')
        navigation.goBack()
    }

    return (
        <MyPreferences
            codeLanguage={codeLang}
            onPressAppLanguages={onPressAppLanguages}
            onPressBack={onPressBack}
        />
    )
}

