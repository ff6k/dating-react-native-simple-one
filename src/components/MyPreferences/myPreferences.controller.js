import React, { useEffect, useState } from 'react'
import MyPreferences from './myPreferences'
import { readStorage } from '/src/configs/AsyncStorage'
import Const from '/src/const'
import FontAwesomeIcons from 'react-native-vector-icons/SimpleLineIcons'
import Themes from '/src/themes'
import { saveDataUserStorage, removeKeyStorage } from '/src/configs/AsyncStorage'
import { useSelector, useDispatch } from 'react-redux'
import { pushDataAgeAndGender, changeDataAgeAndGender } from '/src/slice/preferenceSlice'

const GENDER_ARRAY = [
    {
        label: 'Male', value: 'male', icon: () => <FontAwesomeIcons name={"symbol-male"} size={18} color={Themes.Colors.PINK_DARK} />
    },
    {
        label: 'Female', value: 'female', icon: () => <FontAwesomeIcons name={"symbol-female"} size={18} color={Themes.Colors.PINK_DARK} />
    },
]
let minAgeData
let maxAgeData
let genderData
export default function MyPreferencesController(props) {
    const { navigation, route } = props
    const [code, setCode] = useState(null)
    const [maxAge, setMaxAge] = useState()
    const [minAge, setMinAge] = useState()
    const [gender, setGender] = useState()
    const [isChange, setIsChange] = useState(false)
    const dispatch = useDispatch()

    const codeLang = route.params === undefined ? code : route.params.code
    const dataPre = useSelector(state => state.preference)
    console.log(`dataPre: ${JSON.stringify(dataPre)}`);

    const getDataStore = () => {
        // const [gender, minAge, maxAge] = dataPre
        minAgeData = dataPre[0].minAge
        maxAgeData = dataPre[0].maxAge
        genderData = dataPre[0].gender
        setMaxAge(maxAgeData)
        setMinAge(minAgeData)
        setGender(genderData)
    }
    useEffect(() => {
        getDataStore()
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

    const onChangeSlideAge = (MinAgeTemp, maxAgeTemp) => {
        if (genderData !== gender || minAge !== MinAgeTemp || maxAge !== maxAgeTemp) {
            setIsChange(true)
        }
        else {
            setIsChange(false)
        }
        minAgeData = MinAgeTemp
        maxAgeData = maxAgeTemp


    }

    const onPressSave = () => {
        // removeKeyStorage(Const.StorageKey.CODE_PREFERENCES)
        saveDataUserStorage(Const.StorageKey.CODE_PREFERENCES, [genderData, minAgeData, maxAgeData])
        setIsChange(false)
        const data = {
            gender: genderData,
            minAge: minAgeData,
            maxAge: maxAgeData
        }
        dispatch(changeDataAgeAndGender(data))
    }

    const onChangeGender = (genderTemp) => {
        if (genderTemp !== gender || minAge !== minAgeData || maxAge !== maxAgeData) {
            setIsChange(true)
        }
        else {
            setIsChange(false)
        }
        genderData = genderTemp
    }

    return (
        <MyPreferences
            codeLanguage={codeLang}
            onPressAppLanguages={onPressAppLanguages}
            onPressBack={onPressBack}
            onPressSave={onPressSave}
            onChangeSlideAge={onChangeSlideAge}
            onChangeGender={onChangeGender}
            dataGender={GENDER_ARRAY}
            minAge={minAge}
            maxAge={maxAge}
            gender={gender}
            isChange={isChange}
        />
    )
}

