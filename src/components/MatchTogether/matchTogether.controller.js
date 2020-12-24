import React from 'react'
import MatchTogether from './matchTogether'
import Const from '/src/const'
import { useSelector } from 'react-redux'

export default function MatchTogetherController(props) {
    const { navigation, route } = props

    const dataStore = useSelector(state => state.login)
    const onPressGoBack = () => {
        navigation.goBack()
    }

    const onPressGoChat = () => {
        navigation.replace(Const.NameScreens.Messages, {
            isMark: false, idPeople: route.params.data.id, item: {
                name: route.params.data.name,
                photoUrl: route.params.data.photoUrl,
                isActive: true
            }
        })
    }

    return (
        <MatchTogether
            nameMatched={route.params.data.name}
            urlPhotoMatched={route.params.data.photoUrl}
            urlPhotoMe={dataStore[0].photos[0].url}
            onPressGoBack={onPressGoBack}
            onPressGoChat={onPressGoChat}
        />
    )
}

