
import React, { useEffect, useState } from 'react'
import Const from '/src/const'
import Utils from '/src/utils'
import { useSelector } from 'react-redux'
import Api from '/src/api'
import EditFamilyPlan from './editFamilyPlan'
const data = [
    { id: 1, label: `Don't want kids` },
    { id: 2, label: 'Want kids' },
    { id: 3, label: 'Open to kids' }
]
let idClick
let token
let idUser
export default function EditFamilyPlanController(props) {
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

    const [indexFamilyPlan, setIndexKids] = useState(() => {
        return data.findIndex(e => e.label == route.params.familyPlan)
    })

    const onPressBack = () => {
        if (idClick === undefined || idClick === null || (indexFamilyPlan === -1 && idClick === undefined)
            || (indexFamilyPlan !== -1 && data[indexFamilyPlan].id === idClick)) {
            navigation.goBack()
        }
        else {
            const temp = data.find(e => e.id == idClick)
            navigation.navigate(Const.NameScreens.MyProfile, { familyPlan: temp.label })
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
            Api.RequestApi.putProfileFamilyPlanApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your children successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your children fail, error: ${err}`, 3000)
                })
        }
    }
    return (
        <EditFamilyPlan
            onPressBack={onPressBack}
            isChange={true}
            data={data}
            indexFamilyPlan={indexFamilyPlan}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}

