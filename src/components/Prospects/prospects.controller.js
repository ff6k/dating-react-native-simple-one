import React, { useState, useEffect } from 'react'
import Prospects from './prospects'
import { useSelector } from 'react-redux'
import Api from '/src/api'
import Const from '/src/const'
import { getTopPickApiRequest } from '../../api/requestApi'
// const dataLikes = [
//     { id: 1, name: 'Trần Dần, 18', isMale: true, isLike: true, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
//     { id: 2, name: 'Trần Dần, 20', isMale: true, isLike: true, uri: 'https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg' },
//     { id: 3, name: 'Trần Dần, 20', isMale: false, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
//     { id: 4, name: 'Trần Dần, 20', isMale: true, isLike: true, uri: 'https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg' },
//     { id: 5, name: 'Trần Dần, 20', isMale: false, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
//     { id: 6, name: 'Trần Dần, 21', isMale: true, isLike: true, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
// ]

const dataTopPicks = [
    { id: 1, name: 'Trần Dần, 18', isMale: true, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 2, name: 'Trần Dần, 20', isMale: true, isLike: false, uri: 'https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg' },
    { id: 3, name: 'Trần Dần, 20', isMale: false, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 4, name: 'Trần Dần, 20', isMale: true, isLike: false, uri: 'https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg' },
    { id: 5, name: 'Trần Dần, 20', isMale: false, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 6, name: 'Trần Dần, 21', isMale: true, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
]


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
                setIsShowAlertSuccess(true)
                const dataTopPickFilter = dataTopPick.filter(e => e.id !== item.id)
                // console.log(`dataTopPickFilter: ${JSON.stringify(dataTopPickFilter)}`);
                // setDataTopPick(dataTopPickFilter)
                getDataTopPickApi()
            })
            .catch(err => {
                console.log(err)
                setIsShowAlertFail(true)
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

