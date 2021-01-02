import React, { useState, useEffect } from 'react'
import Prospects from './prospects'
import { useSelector } from 'react-redux'
import Api from '/src/api'
import Const from '/src/const'

let token
let idUser
let minAgeData
let maxAgeData
let genderData

let nameUser
let photoUrlUser
export default function ProspectsController(props) {
    const { navigation, route } = props

    const dataStore = useSelector(state => state.login)
    const dataPre = useSelector(state => state.preference)

    const [dataLikes, setDataLikes] = useState([])
    const [dataTopPick, setDataTopPick] = useState([])
    const [isShowAlertSuccess, setIsShowAlertSuccess] = useState(false)
    const [isShowAlertFail, setIsShowAlertFail] = useState(false)

    // const [maxAge, setMaxAge] = useState()
    // const [minAge, setMinAge] = useState()
    // const [gender, setGender] = useState()

    const getDataStore = () => {
        if (dataStore.length > 0) {
            const { jwtToken, id, name, photoUrl } = dataStore[0]
            token = jwtToken
            idUser = id
            nameUser = name
            photoUrlUser = photoUrl
            minAgeData = dataPre[0].minAge
            maxAgeData = dataPre[0].maxAge
            genderData = dataPre[0].gender
            // setMaxAge(maxAgeData)
            // setMinAge(minAgeData)
            // setGender(genderData)
        }
        else {
            return null // empty data
        }
    }

    const getDataLikedApi = () => {
        const params = {
            token,
            pageNumber: 1,
            pageSize: 10,
            likers: true
        }
        Api.RequestApi.getUserLikeMeApiRequest(params)
            .then(res => {
                setDataLikes(res.data)
            })
            .catch(err => console.log(err))
    }

    const getDataTopPickApi = () => {
        const params = {
            token,
            pageNumber: 1,
            pageSize: 10,
            gender: genderData,
            minAge: minAgeData,
            maxAge: maxAgeData,
            topPicks: true
        }
        Api.RequestApi.getTopPickApiRequest(params)
            .then(res => {
                setDataTopPick(res.data)
            })
            .catch(err => console.log(err))
        // idUser = id
    }

    const onPressUserLikedMe = (item) => {
        navigation.navigate(Const.NameScreens.ImageDetail, { item })
    }

    const notificationMessages = (data) => {
        const { fcmTokens } = data
        // console.log(`fcmTokens: ${fcmTokens}`);
        if (fcmTokens.length > 0) {
            const dataSend = {
                id: idUser,
                name: nameUser,
                photoUrl: photoUrlUser,
            }
            fcmTokens.forEach(element => {
                // console.log(`element: ${element}`);
                const params = {
                    fcmToken: element,
                    bodyNotification: "Congratulation! You have a new match!",
                    titleNotification: "Match Success",
                    bodyData: dataSend,
                    titleData: 'dataMatch'
                }
                Api.RequestApi.postFirebaseMessage(params)
                // .then(res => console.log(res))
                // .catch(err => console.log(err))
            });
        }
    }

    const onPressLoveStatus = (item, index) => {
        const { id } = item
        const params = {
            token,
            idLiked: id,
            idLiker: idUser
        }
        Api.RequestApi.postLikeImageSwipe(params)
            .then(res => {
                if (res.data !== '') {
                    notificationMessages(res.data)
                }
                setIsShowAlertSuccess(true)
                const dataLikesFilter = dataLikes.filter(e => e.id !== item.id)
                setDataLikes(dataLikesFilter)
            })
            .catch(err => {
                console.log(err)
                setIsShowAlertFail(true)
            })
    }

    const onPressLoveStatusTopPick = (item, index) => {
        const { id } = item
        const params = {
            token,
            idLiked: id,
            idLiker: idUser
        }
        Api.RequestApi.postLikeImageSwipe(params)
            .then(res => {
                getDataTopPickApi()
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getDataStore()
        getDataLikedApi()
        getDataTopPickApi()
    }, [])

    useEffect(() => {
        if (route.params !== undefined) {
            const { removed, id } = route.params
            if (removed) {
                setIsShowAlertSuccess(true)
                const dataLikesFilter = dataLikes.filter(e => e.id !== id)
                setDataLikes(dataLikesFilter)
            }
            else {
                setIsShowAlertFail(true)
            }
        }
    }, [route.params])

    const closeAlert = () => {
        if (isShowAlertSuccess) setIsShowAlertSuccess(false)
        if (isShowAlertFail) setIsShowAlertFail(false)
    }
    return (
        <Prospects
            dataLikes={dataLikes}
            dataTopPicks={dataTopPick}
            onPressUserLikedMe={onPressUserLikedMe}
            onPressLoveStatus={onPressLoveStatus}
            onPressLoveStatusTopPick={onPressLoveStatusTopPick}
            isShowAlertSuccess={isShowAlertSuccess}
            isShowAlertFail={isShowAlertFail}
            closeAlert={closeAlert}
            countLikes={dataLikes.length}
        />
    )
}

