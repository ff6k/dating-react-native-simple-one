import React from 'react'
import SignInOrUp from './signInOrUp'

import { useNavigation } from '@react-navigation/native'
import Const from '/src/const'

export default function SignInOrUpController() {
    const navigation = useNavigation()

    const onPressLogin = () => {
        navigation.navigate(Const.NameScreens.Login)
    }

    const onPressSignUp = () => {
        navigation.navigate(Const.NameScreens.SignUpEmail)
    }
    return (
        <SignInOrUp onPressLogin={onPressLogin}
            onPressSignUp={onPressSignUp}
        />
    )
}

