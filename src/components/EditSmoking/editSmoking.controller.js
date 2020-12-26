import React, { useEffect, useState } from 'react'
import Const from '/src/const'
import EditSmoking from './editSmoking'
import { useSelector } from 'react-redux'
import Utils from '/src/utils'
import Api from '/src/api'

const data = [
    { id: 0, label: `Yes` },
    { id: 1, label: `No` },
    { id: 2, label: `Sometimes` },
]

let idClick
let token
let idUser
export default function EditSmokingController(props) {
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

    const [indexSmoking, setIndexSmoking] = useState(() => {
        return data.findIndex(e => e.label == route.params.smoking)
    })

    const onPressBack = () => {
        if (idClick === undefined || (indexSmoking === -1 && idClick === undefined)
            || (indexSmoking !== -1 && data[indexSmoking].id === idClick)) {
            navigation.goBack()
        }
        else {
            const temp = data.find(e => e.id == idClick)
            if (temp === undefined) {
                navigation.goBack()
            }
            else { navigation.navigate(Const.NameScreens.MyProfile, { smoking: temp.label }) }
        }
    }

    const onChangeDataItemClick = (id) => {
        idClick = id
    }

    const onPressGetItem = (item) => {
        if (item.id !== idClick) {
            const params = {
                smoking: item.label,
                id: idUser,
                token: token
            }
            Api.RequestApi.putSmokingApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your smoking status successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your smoking status fail, error: ${err}`, 3000)
                })
        }
    }
    return (
        <EditSmoking
            onPressBack={onPressBack}
            isChange={true}
            data={data}
            indexSmoking={indexSmoking}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}

