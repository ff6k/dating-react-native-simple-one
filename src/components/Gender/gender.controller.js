import React, { useEffect } from 'react'
import Gender from './gender'
import Const from '/src/const'
import Api from '/src/api'
import { BackHandler } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

let genderTemp = ""
let token
let idUser
export default function GenderController(props) {
    const { navigation } = props

    const dataStore = useSelector(state => state.login)

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

    const onPressBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        } else {
            BackHandler.exitApp()
        }
    }

    const onPressNext = () => {
        const params = {
            id: idUser,
            token: token,
            gender: genderTemp
        }
        Api.RequestApi.putProfileGenderApiRequest(params)
            .then(res => {
                console.log(JSON.stringify(res.data))
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
            onPressBack={onPressBack}
            onPressNext={onPressNext}
            getGender={getGender}
        />
    )
}

