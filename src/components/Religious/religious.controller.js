import React, { useEffect, useState } from 'react'
import Religious from './religious'
import Const from '/src/const'
import Api from '/src/api'
import Utils from '/src/utils'
import { withTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
let dataList
let idUser
let token
let dataBegin
function ReligiousController(props) {
    const { navigation, route, i18n } = props

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
        dataBegin = route.params.religion
        getDataStore()
    }, [])
    // const [dataList, setDataList] = useState([])
    const onPressBack = () => {
        if (dataBegin == route.params.religion) { navigation.goBack() }
        else {
            navigation.navigate(Const.NameScreens.MyProfile, { religion: dataBegin })
        }
    }
    const onPressGetItem = (item) => {
        if (item.name !== dataBegin) {
            dataBegin = item.name
            const params = {
                religion: item.name,
                id: idUser,
                token: token
            }
            Api.RequestApi.putProfileReligiousApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your religious successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your religious fail, error: ${err}`, 3000)
                })
        }
    }

    const { language } = i18n
    switch (language) {
        case "vi":
            dataList = Const.Religious.dataReligiousVI
            break;
        default:
            dataList = Const.Religious.dataReligiousEN
    }

    return (
        <Religious
            onPressBack={onPressBack}
            onPressGetItem={onPressGetItem}
            religiousBegin={route.params.religion}
            dataList={dataList}
        />
    )
}

export default withTranslation()(ReligiousController)
