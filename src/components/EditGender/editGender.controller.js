import React, { useEffect, useState } from 'react'
import EditGender from './editGender'
import Const from '/src/const'
import Utils from '/src/utils'
import { useSelector } from 'react-redux'
import Api from '/src/api'

const data = [
    { id: 1, label: 'male' },
    { id: 2, label: 'female' },
    { id: 3, label: 'other' }
]
let idClick
let token
let idUser
export default function EditGenderController(props) {
    const { navigation, route } = props

    const dataStore = useSelector(state => state.login)

    const getDataStore = () => {
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
        getDataStore()
    }, [])

    const [indexGender, setIndexGender] = useState(() => {
        return data.findIndex(e => e.label == route.params.gender)
    })
    const onPressBack = () => {
        if (data[indexGender].id === idClick || idClick === undefined) {
            navigation.goBack()
        }
        else {
            const genderTemp = data.find(e => e.id == idClick)
            navigation.navigate(Const.NameScreens.MyProfile, { gender: genderTemp.label })
        }
    }

    const onChangeDataItemClick = (id) => {
        idClick = id
    }

    const onPressGetItem = (item) => {
        if (item.id !== idClick) {
            const params = {
                gender: item.label,
                id: idUser,
                token: token
            }
            Api.RequestApi.putProfileGenderApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your gender successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your gender fail, error: ${err}`, 3000)
                    console.log(err)
                })
        }
    }

    return (
        <EditGender
            onPressBack={onPressBack}
            isChange={true}
            data={data}
            indexGender={indexGender}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}

