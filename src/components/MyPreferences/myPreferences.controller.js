import React, { useEffect, useState } from 'react'
import MyPreferences from './myPreferences'
import { readStorage } from '/src/configs/AsyncStorage'
import { withTranslation } from 'react-i18next';
import Const from '/src/const'
import FontAwesomeIcons from 'react-native-vector-icons/SimpleLineIcons'
import Themes from '/src/themes'
import { saveDataUserStorage, removeKeyStorage } from '/src/configs/AsyncStorage'
import { useSelector, useDispatch } from 'react-redux'
import Utils from '/src/utils'
import { pushDataAgeAndGender, changeDataAgeAndGender } from '/src/slice/preferenceSlice'

const GENDER_ARRAY_EN = [
    {
        label: 'Male', value: 'male', icon: () => <FontAwesomeIcons name={"symbol-male"} size={18} color={Themes.Colors.PINK_DARK} />
    },
    {
        label: 'Female', value: 'female', icon: () => <FontAwesomeIcons name={"symbol-female"} size={18} color={Themes.Colors.PINK_DARK} />
    },
]
const GENDER_ARRAY_VI = [
    {
        label: 'Nam', value: 'male', icon: () => <FontAwesomeIcons name={"symbol-male"} size={18} color={Themes.Colors.PINK_DARK} />
    },
    {
        label: 'Nữ', value: 'female', icon: () => <FontAwesomeIcons name={"symbol-female"} size={18} color={Themes.Colors.PINK_DARK} />
    },
]
// let minDistance
// let maxDistance
let genderData
let minAgeData
let maxAgeData
let maxDistanceData

let isChangeGender
let isChangeAge
let isChangeDistance
function MyPreferencesController(props) {
    const { t, navigation, route, i18n } = props
    const [code, setCode] = useState(null)
    const [maxAge, setMaxAge] = useState()
    const [minAge, setMinAge] = useState()
    const [gender, setGender] = useState()
    const [minDistance, setMinDistance] = useState()
    const [maxDistance, setMaxDistance] = useState()
    const [isChange, setIsChange] = useState(false)
    const [dataGenderBegin, setDataGenderBegin] = useState(() => {
        const { language } = i18n
        switch (language) {
            case "vi":
                return GENDER_ARRAY_VI
            default:
                return GENDER_ARRAY_EN
        }
    })
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
        setMinDistance(10)
        setMaxDistance(22)
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
        navigation.goBack()
    }

    const onChangeSlideAge = (MinAgeTemp, maxAgeTemp) => {
        if (minAge !== MinAgeTemp || maxAge !== maxAgeTemp) {
            isChangeAge = true
            setIsChange(true)
        }
        else {
            if (!isChangeGender && !isChangeDistance) {
                setIsChange(false)
            }
            isChangeAge = false
        }
        minAgeData = MinAgeTemp
        maxAgeData = maxAgeTemp


    }

    const onPressSave = () => {
        // removeKeyStorage(Const.StorageKey.CODE_PREFERENCES)
        try {
            saveDataUserStorage(Const.StorageKey.CODE_PREFERENCES, [genderData, minAgeData, maxAgeData, maxDistanceData])
            setIsChange(false)
            const data = {
                gender: genderData,
                minAge: minAgeData,
                maxAge: maxAgeData,
                maxDistance: maxDistanceData
            }
            dispatch(changeDataAgeAndGender(data))
            Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your setting successfully, You must restart your app to apply change', 3000)
        }
        catch (err) {
            console.log(err)
            Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your setting fail, error: ${err}`, 3000)
        }

    }

    const onChangeGender = (genderTemp) => {
        if (genderTemp !== gender) {
            isChangeGender = true
            setIsChange(true)
        }
        else {
            if (!isChangeAge && !isChangeDistance) {
                setIsChange(false)
            }
            isChangeGender = false
        }
        genderData = genderTemp
    }

    const onChangeSlideDistance = (minDistanceTemp, maxDistanceTemp) => {
        if (minDistance !== minDistanceTemp || maxDistance !== maxDistanceTemp) {
            isChangeDistance = true
            setIsChange(true)
        }
        else {
            if (!isChangeAge && !isChangeGender) {
                setIsChange(false)
            }
            isChangeDistance = false
        }
        maxDistanceData = maxDistanceTemp
    }

    return (
        <MyPreferences
            codeLanguage={codeLang}
            onPressAppLanguages={onPressAppLanguages}
            onPressBack={onPressBack}
            onPressSave={onPressSave}
            onChangeSlideAge={onChangeSlideAge}
            onChangeGender={onChangeGender}
            dataGender={dataGenderBegin}
            minAge={minAge}
            maxAge={maxAge}
            gender={gender}
            isChange={isChange}
            onChangeSlideDistance={onChangeSlideDistance}
        />
    )
}

export default withTranslation()(MyPreferencesController)
