import React, { useState } from 'react'
import EmailAddress from './emailAddress'
import Const from '/src/const'
export default function EmailAddressController(props) {
    const { route, navigation } = props
    const params = route.params
    const { email } = params
    const [isVisible, setIsVisible] = useState(false)

    const onPressLetsGo = () => {
        setIsVisible(false)
    }

    const onClickNextButton = (email) => {
        navigation.navigate(Const.NameScreens.Birthday, { email: email })
    }

    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <EmailAddress
            isVisible={isVisible}
            onPressLetsGo={onPressLetsGo}
            email={email}
            onClickNextButton={onClickNextButton}
            onPressBack={onPressBack}
        />
    )
}

