import React, { useEffect } from 'react'
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

let token
let idUser
let idSelected
export default function EditSmokingController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
        // navigation.navigate(Const.NameScreens.MyProfile, { drinking: data[idSelected].label })
    }

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

    const onPressSave = () => {
        const statusSmoking = data[idSelected].label
        const params = {
            token: token,
            id: idUser,
            smoking: statusSmoking
        }
        Api.RequestApi.putSmokingApiRequest(params)
            .then(res => {
                Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your status smoking', 3000)
            })
            .catch(err => {
                console.log(err)
                Utils.Toast.ToastModal('error', 'top', 'Fail', err, 3000)
            })
    }
    const onChangeDataItemClick = (id) => {
        idSelected = id
    }
    return (
        <EditSmoking
            data={data}
            onPressBack={onPressBack}
            onPressSave={onPressSave}
            onChangeDataItemClick={onChangeDataItemClick}
        />
    )
}

