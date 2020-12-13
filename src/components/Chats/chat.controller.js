import React, { useEffect, useState } from 'react'
import Chats from './chats'
import Api from '/src/api'
import { useSelector } from 'react-redux'
import Const from '/src/const'
import { connectServer, listenerConnect } from '/src/configs/Signalr'

let token
let idUser
let dataMessagesTemp
export default function ChatsController(props) {
    const { navigation, route } = props
    console.log(`route: ${JSON.stringify(route)}`);

    const dataStore = useSelector(state => state.login)
    const [dataMessages, setDataMessages] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [dataMatched, setDataMatched] = useState([])
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
        if (route.params) {
            loadDataMessApi()
        }
    }, [route.params])
    useEffect(() => {
        let unmounted = false;
        console.log('chat connect')
        const _hubConnection = connectServer(token)
        listenerConnect(_hubConnection, Const.CodeListener.CODE_RECEIVE_MESSAGE, data => {
            console.log(data)
            loadDataMessApi()
            // setIsLoading(true)
            // const params = {
            //     id: idUser,
            //     pageNumber: 1,
            //     pageSize: 10,
            //     token
            // }
            // if (!unmounted) {
            //     getDataApi(params).then(res => {
            //         setDataMessages(res.data)
            //         dataMessagesTemp = res.data
            //     })
            //         .catch(err => console.log(err))
            //     // .finally(() => setIsLoading(false))
            // }
        })

        return () => { unmounted = true }
    }, [])
    async function getDataApi(params) {
        return Api.RequestApi.getMessagesApiRequest(params)
    }
    async function getDataApiMatched(params) {
        return Api.RequestApi.getMatchedMeApiRequest(params)
    }
    const loadDataMatchedMe = () => {
        console.log(idUser)
        const params = {
            isMatched: true,
            pageNumber: 1,
            pageSize: 20,
            token
        }

        getDataApiMatched(params).then(res => {
            setDataMatched(res.data)
        })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        let unmounted = false;
        setIsLoading(true)
        getDataStore()

        if (!unmounted) {
            loadDataMatchedMe()
            loadDataMessApi()
        }
        return () => { unmounted = true }
    }, [])

    const loadDataMessApi = () => {
        const params = {
            id: idUser,
            pageNumber: 1,
            pageSize: 10,
            token
        }
        getDataApi(params).then(res => {
            setDataMessages(res.data)
            dataMessagesTemp = res.data
        })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    const onChangeInputSearch = (text) => {
        if (text === "") {
            setDataMessages(dataMessagesTemp)
        }
        else {
            const lowerText = text.toLowerCase()
            const dataFilter = dataMessagesTemp.filter(item => {
                if (item.name.toLowerCase().includes(lowerText)) {
                    return true
                }
                return false
            })
            setDataMessages(dataFilter)
        }
    }

    const postMarkMessages = async (params) => {
        return Api.RequestApi.postMarkMessagesApiRequest(params)
    }

    const setDataPressMarked = (id) => {
        let dataMessagesTemp = dataMessages
        dataMessagesTemp.forEach(element => {
            if (element.id === id) {
                element.dateRead = true
            }
        });
        setDataMessages(dataMessagesTemp)
    }

    const onPressMessages = (item) => {
        console.log(`item: ${JSON.stringify(item)}`);
        const { dateRead, id, recipientId, senderId } = item

        if (dateRead === null && recipientId === idUser) {
            const params = {
                idUser: idUser,
                idMessages: id,
                token: token
            }
            setDataPressMarked(id)
            postMarkMessages(params).then(res => {
                setDataPressMarked(id)
                navigation.navigate(Const.NameScreens.Messages, { isMark: true, idPeople: senderId, item: item })
            }).catch(err => {
                console.log(err)
            })
        } else {
            if (recipientId === idUser) {
                navigation.navigate(Const.NameScreens.Messages, { isMark: false, idPeople: senderId, item: item })
            }
            else {
                navigation.navigate(Const.NameScreens.Messages, { isMark: false, idPeople: recipientId, item: item })
            }
        }
    }

    const onPressAvatar = (item) => {
        const { id } = item
        navigation.navigate(Const.NameScreens.Messages, { isMark: false, idPeople: id, item: item })
    }

    return (
        <Chats
            dataMessages={dataMessages}
            onChangeInput={onChangeInputSearch}
            onPressMessages={onPressMessages}
            idUser={idUser}
            isLoading={isLoading}
            dataMatched={dataMatched}
            onPressAvatar={onPressAvatar}
        />
    )
}

