import React, { useEffect, useState } from 'react'
import MyProfile from './myProfile'
import Const from '/src/const'
import Api from '/src/api'
import { useSelector } from 'react-redux'

let token
let idUser
export default function MyProfileController(props) {
    const { navigation } = props
    const [dataProfile, setDataProfile] = useState(null)
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

    const checkAndFillPhotos = (data, count) => {
        if (data.length < count) {
            const numFill = count - data.length
            for (let i = 1; i < numFill + 1; i++) {
                data.push({ id: i * 999, url: undefined })
            }
        }
        return data
    }


    useEffect(() => {
        getDataStore()
        const params = {
            id: idUser,
            token: token
        }
        async function getApiProfile() {
            return Api.RequestApi.getProfileApiRequest(params)
        }
        getApiProfile().then(res => {
            const data = res.data
            const { name, dateOfBirth, location, religion, company, jobTitle, school, ethnicity,
                children, smoking, interests, drinking, bio } = data
            const dataPhotos = checkAndFillPhotos(res.data.photos, 9)
            data.photos = dataPhotos
            setDataProfile(data)
        })
            .catch(err => console.log(err))
        // .finally(() => setIsLoading(false))
    }, [])

    const onPressDrinking = () => {
        navigation.navigate(Const.NameScreens.Work)
    }
    const onPressSmoking = () => {
        console.log('smoking')
    }

    const onPressBack = () => {
        navigation.goBack()
    }

    return (
        <MyProfile
            onPressDrinking={onPressDrinking}
            onPressSmoking={onPressSmoking}
            onPressBack={onPressBack}
            data={dataProfile}
        />
    )
}

