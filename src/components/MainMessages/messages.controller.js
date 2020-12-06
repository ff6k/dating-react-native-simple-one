import React, { useEffect, useState } from 'react'
import Messages from './messages'
import Const from '/src/const'
import Api from '/src/api'
import { useSelector } from 'react-redux'

let isChange
let token
let idUser
export default function MessagesController(props) {
    const { navigation, route } = props
    const dataStore = useSelector(state => state.login)
    const [dataMessages, setDataMessages] = useState([])
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

    useEffect(() => {
        const { idPeople } = route.params
        getDataStore()
        const params = {
            idUser: idUser,
            idPeople: idPeople,
            pageNumber: 1,
            pageSize: 20,
            token
        }
        async function getDataApi() {
            return Api.RequestApi.getMessagesConversationApiRequest(params)
        }
        getDataApi().then(res => {
            setDataMessages(res.data)
        })
            .catch(err => console.log(err))
        // .finally(() => setIsLoading(false))
    }, [])
    const onPressBack = () => {
        if (isChange) {
            navigation.navigate(Const.NameScreens.Chats, true)
        } else {
            navigation.navigate(Const.NameScreens.Chats)
        }
    }
    return (
        <Messages
            onPressBack={onPressBack}
            dataMessages={dataMessages}
            idUser={idUser}
        />
    )
}

