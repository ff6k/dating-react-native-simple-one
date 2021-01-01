import React, { useState, useEffect } from 'react'
import { BackHandler, Alert } from "react-native";
import Discover from './discover'
import Const from '/src/const'
import Api from '/src/api'
import { useSelector } from 'react-redux'
import { connectServerNotifier, listenerConnect } from '/src/configs/Signalr'

let token
let idUser
let minAgeData
let maxAgeData
let genderData
let maxDistanceData
export default function DiscoverController(props) {
    const { navigation, route } = props
    const [isModeDetail, setIsModeDetail] = useState(false)
    const [isSwipeRight, setIsSwipeRight] = useState(false)
    const [isSwipeLeft, setIsSwipeLeft] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dataUserSwipe, setDataUserSwipe] = useState([])
    const [dataDetailUser, setDataDetailUser] = useState(null)
    const [idCurrentUserSwipe, setIdCurrentUserSwipe] = useState(null)
    const [indexCurrentSwipe, setIndexCurrentSwipe] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    // const [maxAge, setMaxAge] = useState()
    // const [minAge, setMinAge] = useState()
    // const [gender, setGender] = useState()

    const dataStore = useSelector(state => state.login)
    const dataPre = useSelector(state => state.preference)

    const getDataStore = () => {
        if (dataStore.length > 0) {
            const { jwtToken, id } = dataStore[0]
            if (dataPre.length > 0) {
                minAgeData = dataPre[0].minAge
                maxAgeData = dataPre[0].maxAge
                genderData = dataPre[0].gender
                maxDistanceData = dataPre[0].maxDistance
            }
            // setMaxAge(maxAgeData)
            // setMinAge(minAgeData)
            // setGender(genderData)
            token = jwtToken
            idUser = id
        }
        else {
            return null // empty data
        }
    }

    //TODO: fix gender
    useEffect(() => {
        setIsLoading(true)
        getDataStore()

        getDataApi(pageNumber, token).then(res => {
            // console.log('asd', JSON.stringify(res.data))
            setDataUserSwipe(res.data)
            setIdCurrentUserSwipe(res.data[0].id)
        })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        connectServerNotifier(token, Const.CodeListener.CODE_RECEIVE_NOTIFICATION, data => {
            navigation.navigate(Const.NameScreens.MatchTogether, { data })
        })
    }, [])

    const getUserCurrent = (id, index) => {
        setIdCurrentUserSwipe(id)
        setIndexCurrentSwipe(index)
    }

    const requestApiUserDetail = async () => {
        setDataDetailUser(dataUserSwipe[indexCurrentSwipe])
    }

    const onPressInfo = () => {
        setIsModeDetail(!isModeDetail)
        requestApiUserDetail()
    }

    const onPressBack = () => {
    }

    const getDataApi = async (pageNumber, token) => {
        const params = {
            gender: genderData,
            pageNumber: pageNumber,
            pageSize: 10,
            token,
            maxAge: maxAgeData,
            maxDistance: maxDistanceData
        }
        return Api.RequestApi.getRequestImageSwipe(params)
    }

    //TODO: fix gender
    const updateData = () => {
        getDataApi(pageNumber + 1, token).then(res => {
            const data = dataUserSwipe.concat(res.data)
            setDataUserSwipe(data)
            setPageNumber(pageNumber => pageNumber + 1)
        })
            .catch(err => console.log(err))
    }

    const postDataImageSwipeApi = async (idUser, idLiked, token) => {
        const params = {
            idLiker: idUser,
            idLiked: idLiked,
            token
        }

        return Api.RequestApi.postLikeImageSwipe(params)
    }

    const onLike = () => {
        postDataImageSwipeApi(idUser, idCurrentUserSwipe, token).then(res => {
            handleLikeUser(res)
        }).catch(err => console.log(err))
    }
    const handleLikeUser = (res) => {
        const { data } = res
        if (data !== '') {
            navigation.navigate(Const.NameScreens.MatchTogether, { data })
        }
    }

    const onPressLike = () => {
        if (!isModeDetail) {
            setIsSwipeRight(true)
            if (idCurrentUserSwipe !== null) {
                postDataImageSwipeApi(idUser, idCurrentUserSwipe, token).then(res => {
                    handleLikeUser(res)
                }).catch(err => console.log(err))
            }
        }
    }

    const onPressUnlike = () => {
        if (!isModeDetail) {
            setIsSwipeLeft(true)
        }
    }

    useEffect(() => {
        if (isSwipeRight) {
            setIsSwipeRight(false)
        }
    }, [isSwipeRight])

    useEffect(() => {
        if (isSwipeLeft) {
            setIsSwipeLeft(false)
        }
    }, [isSwipeLeft])
    return (
        <Discover
            isModeDetail={isModeDetail}
            onPressInfo={onPressInfo}
            onPressBack={onPressBack}
            dataImage={dataUserSwipe}
            updateData={updateData}
            onLike={onLike}
            onPressLike={onPressLike}
            onPressUnlike={onPressUnlike}
            getUserCurrent={getUserCurrent}
            isSwipeRight={isSwipeRight}
            isSwipeLeft={isSwipeLeft}
            // idCurrentUserSwipe={idCurrentUserSwipe}
            dataDetailUser={dataDetailUser}
            isLoading={isLoading}
            arrImage={dataDetailUser && dataDetailUser.photos}
        />
    )
}
