import React, { useState } from 'react'
import SignUpEmail from './signUpEmail'
import { useNavigation } from '@react-navigation/native'
import Const from '/src/const'
import Api from '/src/api'

export default function SignUpEmailController() {
    const [isLoading, setIsLoading] = useState(false)
    const [isShowModalSuccess, setIsShowModalSuccess] = useState(false)
    const [isShowModalFail, setIsShowModalFail] = useState(false)
    const [message, setMessage] = useState('')
    const navigation = useNavigation()
    const onSignUpEmail = (params) => {
        const { name, email, confirmPassword, password } = params
        requestPostSignUpApi(name, email, confirmPassword, password)
    }

    const requestApiSuccess = (json) => {
        if (json.errors === undefined) {
            setIsShowModalSuccess(true)
            setMessage(json.message)
        } else {
            setIsShowModalFail(true)
            setMessage(json.title)
        }

    }

    // network fail
    const requestApiFail = (error) => {
        setIsShowModalFail(true)
        setMessage("Network connect fail")
    }

    const requestPostSignUpApi = async (name, email, confirmPassword, password) => {
        setIsLoading(true)
        const params = {
            email,
            confirmPassword: confirmPassword,
            password: password,
            name: name,
        }
        Api.RequestApi.signUpEmail(params)
            .then((response) => response.json())
            .then((json) => requestApiSuccess(json))
            .catch((error) => requestApiFail(error))
            .finally(() => setIsLoading(false));
    }

    const onPressButtonModal = () => {
        isShowModalSuccess && setIsShowModalSuccess(false)
        isShowModalFail && setIsShowModalFail(false)
    }

    const onPressBack = () => {
        navigation.navigate(Const.NameScreens.SingInOrUp)
    }

    return (
        <SignUpEmail
            onSignUpEmail={onSignUpEmail}
            onPressBack={onPressBack}
            isLoading={isLoading}
            isShowModalSuccess={isShowModalSuccess}
            isShowModalFail={isShowModalFail}
            onPressButtonModal={onPressButtonModal}
            message={message}
        />
    )
}
