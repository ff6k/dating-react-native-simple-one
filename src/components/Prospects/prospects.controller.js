import React, { useState, useEffect } from 'react'
import Prospects from './prospects'
import { useSelector } from 'react-redux'
import Api from '/src/api'
import Const from '/src/const'

let token
let idUser
export default function ProspectsController(props) {
    const { navigation, route } = props
    const dataStore = useSelector(state => state.login)
    const [dataLikes, setDataLikes] = useState([])
    const [dataTopPick, setDataTopPick] = useState([])
    const [isShowAlertSuccess, setIsShowAlertSuccess] = useState(false)
    const [isShowAlertFail, setIsShowAlertFail] = useState(false)
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
            gender: 'female',
            minAge: 18,
            maxAge: 99,
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

    const onPressLoveStatus = (item, index) => {
        const { id } = item
        const params = {
            token,
            idLiked: id,
            idLiker: idUser
        }
        Api.RequestApi.postLikeImageSwipe(params)
            .then(res => {
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

