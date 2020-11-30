import React, { useEffect } from 'react'
import Messages from './messages'
import Const from '/src/const'
let isChange
export default function MessagesController(props) {
    const { navigation, route } = props
    useEffect(() => {
        const params = route.params
        const { isMark } = params
        isChange = isMark
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
        />
    )
}

