import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import MultiLanguages from './multiLanguages'
import { changeLanguage } from '/src/translations'
import { readStorage, saveStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'

export default function MultiLanguagesController(props) {
    const { route, navigation } = props
    // const { code } = route.prams

    const [code, setCode] = useState(() => {
        const params = route.params
        const { code } = params
        return code
    })

    const [isLoading, setIsLoading] = useState(false)
    const onPressCountry = (item) => {
        setIsLoading(true)
        saveStorage(Const.StorageKey.CODE_LANGUAGES, item.code)
        changeLanguage(item.code)
        setCode(item.code)
        setIsLoading(false)
    }

    const onPressBack = () => {
        navigation.navigate(Const.NameScreens.MyPreferences, { code: code })
    }
    if (code === null) {
        return (<View style={{ alignItems: 'center' }}>
            <Text>Loading</Text>
        </View>)
    }
    else {
        return (
            <MultiLanguages onPressCountry={onPressCountry} code={code}
                isLoading={isLoading}
                onPressBack={onPressBack}
            />
        )
    }
}
