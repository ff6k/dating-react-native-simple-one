import React, { useEffect, useState } from 'react'
import Messages from './messages'
import Const from '/src/const'
import Api from '/src/api'
import { useSelector } from 'react-redux'
import { connectServer, listenerConnect } from '/src/configs/Signalr'

let isChange
let token
let idUser
const item = {
    uriImage: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg",
    isActive: true,
    name: "Long"
}
export default function MessagesController(props) {

    const { navigation, route } = props
    const dataStore = useSelector(state => state.login)
    const [dataMessages, setDataMessages] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [maxPage, setMaxPage] = useState(null)
    // const [isConnected, setIsConnected] = useState(false)
    const [dataItem, setDataItem] = useState(() => {
        return route.params.item
    })
    const refModalSlide = React.createRef()
    console.log(JSON.stringify(dataMessages))
    // const itemHeader = {
    //     uriImage: ,
    // isActive: true,
    // name: "Long"
    // }

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
        const params = route.params
        const { isMark } = params
        isChange = isMark
    }, [])

    const loadDataApi = (page) => {
        const { idPeople } = route.params
        // const { idPeople } = item
        const params = {
            idUser: idUser,
            idPeople: idPeople,
            pageNumber: page,
            pageSize: 20,
            token
        }
        console.log(`params: ${JSON.stringify(params)}`);

        getDataApi(params).then(res => {
            setDataMessages(res.data)
            console.log('object')
            console.log(res.data)
        })
            .catch(err => console.log(err))
    }

    const loadDataMore = (page) => {
        if (page < 20) {
            const { idPeople } = route.params
            // const { senderId } = dataItem
            setLoading(true)
            const params = {
                idUser: idUser,
                idPeople: idPeople,
                pageNumber: page,
                pageSize: 20,
                token
            }
            getDataApi(params).then(res => {
                const data = res.data
                if (data.length !== 0) { setDataMessages(temp => [...temp, ...data]) }
                else {
                    setMaxPage(page)
                }
            })
                .catch(err => {
                    setError(err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    useEffect(() => {
        const _hubConnection = connectServer(token)
        listenerConnect(_hubConnection, Const.CodeListener.CODE_RECEIVE_MESSAGE, data => {
            setDataMessages(dataTemp => [data, ...dataTemp])
        })
    }, [])

    const postMarkMessages = async (params) => {
        return Api.RequestApi.postMarkMessagesApiRequest(params)
    }

    async function getDataApi(params) {
        return Api.RequestApi.getMessagesConversationApiRequest(params)
    }

    useEffect(() => {
        getDataStore()
        loadDataApi(pageNumber)
        // .finally(() => setIsLoading(false))
    }, [])

    const onPressBack = () => {
        if (isChange) {
            navigation.navigate(Const.NameScreens.Chats, true)
        } else {
            navigation.navigate(Const.NameScreens.Chats)
        }
    }

    const onPressMenu = () => {
        refModalSlide.current.open()
    }

    const handleLoadMore = () => {
        console.log(maxPage)
        if (!loading) {
            if (maxPage === null) {
                const pageNext = pageNumber + 1
                if (pageNext !== pageNumber) {
                    setPageNumber(pageNext)
                    loadDataMore(pageNext)
                }
            }
            else {
                console.log('ok chua')
            }
        }
    }
    return (
        <Messages
            onPressBack={onPressBack}
            dataMessages={dataMessages}
            idUser={idUser}
            ref={refModalSlide}
            onPressMenu={onPressMenu}
            handleLoadMore={handleLoadMore}
            loading={loading}
            dataHeader={dataItem}
        />
    )
}

