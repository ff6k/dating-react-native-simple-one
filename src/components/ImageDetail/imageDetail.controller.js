import React, { useEffect, useState } from 'react'
import ImageDetail from './imageDetail'
import Api from '/src/api'
import { useSelector } from 'react-redux'
import Utils from '/src/utils'
import Const from '/src/const'
let token
let idUser
let isShowOffButton
export default function ImageDetailController(props) {
    const { route, navigation } = props
    const [dataDetailUser, setDataDetailUser] = useState([])
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

    const onPressInfo = () => {
        navigation.goBack()
    }

    let arrImage, name, work, location, religiousBelief, job, education, ethnicity, kids, height, drinking, smoking, familyPlans, gender, oldYear, dateOfBirth, bio
    if (dataDetailUser !== null) {
        arrImage = dataDetailUser['photos'] ? dataDetailUser['photos'] : []
        name = dataDetailUser['name'] ? dataDetailUser['name'] : 'NA'
        work = dataDetailUser['company'] ? dataDetailUser['company'] : 'NA'
        location = dataDetailUser['location'] ? dataDetailUser['location'] : 'NA'
        religiousBelief = dataDetailUser['religion'] ? dataDetailUser['religion'] : 'NA'
        job = dataDetailUser['jobTitle'] ? dataDetailUser['jobTitle'] : 'NA'
        education = dataDetailUser['school'] ? dataDetailUser['school'] : 'NA'
        // politics=dataDetailUser['dataDetailUser']
        ethnicity = dataDetailUser['ethnicity'] ? dataDetailUser['ethnicity'] : 'NA'
        kids = dataDetailUser['children'] ? dataDetailUser['children'] : 'NA'
        height = dataDetailUser['height'] ? dataDetailUser['height'] : 'NA'
        drinking = dataDetailUser['drinking'] ? dataDetailUser['drinking'] : 'NA'
        smoking = dataDetailUser['smoking'] ? dataDetailUser['smoking'] : 'NA'
        familyPlans = dataDetailUser['sexualOrientation'] ? dataDetailUser['sexualOrientation'] : 'NA'
        gender = dataDetailUser['gender'] ? dataDetailUser['gender'] : 'NA'
        oldYear = dataDetailUser['dateOfBirth'] ? Utils.Calculator.getOldYear(dataDetailUser['dateOfBirth']).toString() : 'NA'
        dateOfBirth = dataDetailUser['dateOfBirth'] ? Utils.Format.formatDateUTC(dataDetailUser['dateOfBirth'], Const.DateFormat.DATE_LONG) : 'NA'
        bio = dataDetailUser['bio'] ? dataDetailUser['bio'] : ''
    }

    useEffect(() => {
        getDataStore()
        const params = route.params
        const paramRequest = {
            id: params.item.id,
            token: token
        }
        async function getDataApi() {
            return Api.RequestApi.getUserDetailApiRequest(paramRequest)
        }
        getDataApi().then(res => {
            setDataDetailUser(res.data)
        })
            .catch(err => console.log(err))
        // requestApiUserDetail(params.item.id)
        //     .then(res => setDataDetailUser(res.data))
        //     .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const { isOffShowButton } = route.params
        isShowOffButton = isOffShowButton
    }, [route.params])

    const onPressLike = () => {
        const { item } = route.params
        const params = {
            token,
            idLiked: item.id,
            idLiker: idUser
        }

        Api.RequestApi.postLikeImageSwipe(params)
            .then(res => {
                navigation.navigate(Const.NameScreens.Prospects, { removed: true, id: item.id })
            })
            .catch(err => {
                console.log(err)
                navigation.navigate(Const.NameScreens.Prospects, { removed: false, id: item.id })
            })
    }
    return (
        // <Text>123</Text>
        <ImageDetail
            onPressInfo={onPressInfo}
            name={name}
            work={work}
            location={location}
            religiousBelief={religiousBelief}
            job={job}
            education={education}
            dateOfBirth={dateOfBirth}
            oldYear={oldYear}
            ethnicity={ethnicity}
            familyPlans={familyPlans}
            kids={kids}
            height={height}
            drinking={drinking}
            smoking={smoking}
            arrImage={arrImage}
            gender={gender}
            bio={bio}
            onPressLike={onPressLike}
            isOffShowButton={isShowOffButton}
        />
    )
}

