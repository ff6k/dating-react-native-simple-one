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
    const { navigation } = props

    const dataStore = useSelector(state => state.login)
    const [dataMessages, setDataMessages] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
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
        const _hubConnection = connectServer(token)
        listenerConnect(_hubConnection, Const.CodeListener.CODE_RECEIVE_MESSAGE, data => {
            console.log(data)
        })
    }, [])
    useEffect(() => {
        setIsLoading(true)
        getDataStore()
        const params = {
            id: idUser,
            pageNumber: 1,
            pageSize: 10,
            token
        }
        async function getDataApi() {
            return Api.RequestApi.getMessagesApiRequest(params)
        }
        getDataApi().then(res => {
            setDataMessages(res.data)
            dataMessagesTemp = res.data
        })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])

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
        const { dateRead, id, recipientId } = item

        if (dateRead === null && recipientId === idUser) {
            const params = {
                idUser: idUser,
                idMessages: id,
                token: token
            }
            setDataPressMarked(id)
            postMarkMessages(params).then(res => {
                console.log(res)
                setDataPressMarked(id)
                navigation.navigate(Const.NameScreens.Messages, { isMark: true })
            }).catch(err => {
                console.log(err)
            })
        } else {
            navigation.navigate(Const.NameScreens.Messages, { isMark: false })
        }
    }

    return (
        <Chats
            dataMessages={dataMessages}
            onChangeInput={onChangeInputSearch}
            onPressMessages={onPressMessages}
            idUser={idUser}
            isLoading={isLoading}
        />
    )
}

