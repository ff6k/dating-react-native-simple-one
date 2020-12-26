
import React, { useEffect, useState } from 'react'
import Const from '/src/const'
import EditKids from './editKids'
import Utils from '/src/utils'
import { useSelector } from 'react-redux'
import Api from '/src/api'

const data = [
    { id: 1, label: `Don't have kids` },
    { id: 2, label: `Have kids` },
]
let idClick
let token
let idUser
export default function EditKidsController(props) {
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

    const [indexKids, setIndexKids] = useState(() => {
        return data.findIndex(e => e.label == route.params.kids)
    })
    const onPressBack = () => {
        if (idClick === undefined || data[indexKids].id === idClick) {
            navigation.goBack()
        }
        else {
            const KidsTemp = data.find(e => e.id == idClick)
            navigation.navigate(Const.NameScreens.MyProfile, { kids: KidsTemp.label })
        }
    }

    const onChangeDataItemClick = (id) => {
        idClick = id

    }

    const onPressGetItem = (item) => {
        if (item.id !== idClick) {
            const params = {
                children: item.label,
                id: idUser,
                token: token
            }
            Api.RequestApi.putProfileKidsApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your children successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your children fail, error: ${err}`, 3000)
                })
        }
    }
    return (
        <EditKids
            onPressBack={onPressBack}
            isChange={true}
            data={data}
            indexKids={indexKids}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}

