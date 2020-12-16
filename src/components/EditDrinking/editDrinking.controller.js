import React, { useEffect, useState } from 'react'
import EditDrinking from './editDrinking'
import Const from '/src/const'
import Utils from '/src/utils'
import { useSelector } from 'react-redux'
import Api from '/src/api'
const data = [
    { id: 0, label: `Yes` },
    { id: 1, label: `No` },
    { id: 2, label: `Sometimes` },
]

let idClick
let token
let idUser
export default function EditDrinkingController(props) {
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

    const [indexDrinking, setIndexKids] = useState(() => {
        return data.findIndex(e => e.label == route.params.drinking)
    })

    const onPressBack = () => {
        if (idClick === undefined || (indexDrinking === -1 && idClick === undefined)
            || (indexDrinking !== -1 && data[indexDrinking].id === idClick)) {
            navigation.goBack()
        }
        else {
            const temp = data.find(e => e.id == idClick)
            navigation.navigate(Const.NameScreens.MyProfile, { drinking: temp.label })
        }
    }

    const onChangeDataItemClick = (id) => {
        idClick = id
    }

    const onPressGetItem = (item) => {
        if (item.id !== idClick) {
            const params = {
                drinking: item.label,
                id: idUser,
                token: token
            }
            Api.RequestApi.putDrinkingsApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your drinking status successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('fail', 'top', 'Fail', `You have saved your drinking status fail, error: ${err}`, 3000)
                    console.log(err)
                })
        }
    }
    return (
        <EditDrinking
            onPressBack={onPressBack}
            isChange={true}
            data={data}
            indexDrinking={indexDrinking}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}

