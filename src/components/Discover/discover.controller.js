import React, { useState, useEffect } from 'react'
import Discover from './discover'
import Const from '/src/const'
import Api from '/src/api'
import { useSelector } from 'react-redux'
import { connectServerNotifier, listenerConnect } from '/src/configs/Signalr'

let token
let idUser
export default function DiscoverController(props) {
    const { navigation } = props
    const [isModeDetail, setIsModeDetail] = useState(false)
    const [isSwipeRight, setIsSwipeRight] = useState(false)
    const [isSwipeLeft, setIsSwipeLeft] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dataUserSwipe, setDataUserSwipe] = useState([])
    const [dataDetailUser, setDataDetailUser] = useState(null)
    const [idCurrentUserSwipe, setIdCurrentUserSwipe] = useState(null)
    const [indexCurrentSwipe, setIndexCurrentSwipe] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

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

    //TODO: fix gender
    useEffect(() => {
        setIsLoading(true)
        getDataStore()

        getDataApi('male', pageNumber, token).then(res => {
            setDataUserSwipe(res.data)
            setIdCurrentUserSwipe(res.data[0].id)
        })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
        // }
        // return () => { unmounted = true }
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
        console.log('dataUserSwipe', JSON.stringify())
        // const params = {
        //     id: idCurrentUserSwipe,
        //     token: token
        // }
        // Api.RequestApi.getUserDetailApiRequest(params)
        //     .then(res => {
        setDataDetailUser(dataUserSwipe[indexCurrentSwipe])
        //     })
        //     .catch(err => console.log(err))
    }

    const onPressInfo = () => {
        setIsModeDetail(!isModeDetail)
        requestApiUserDetail()
        // .then(res => setDataDetailUser(res.data))
        // .catch(err => console.log(err))
    }

    const onPressBack = () => {
        console.log('back')
    }

    const getDataApi = async (gender, pageNumber, token) => {
        const params = {
            gender: gender,
            pageNumber: pageNumber,
            pageSize: 10,
            token
        }
        return Api.RequestApi.getRequestImageSwipe(params)
    }

    //TODO: fix gender
    const updateData = () => {
        getDataApi('male', pageNumber + 1, token).then(res => {
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
