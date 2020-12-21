import React, { useState } from 'react'
import ForgetPassword from './forgetPassword'
import Api from '/src/api'
import Utils from '/src/utils'

export default function ForgetPasswordController(props) {
    const { navigation } = props
    const [isLoading, setIsLoading] = useState(false)
    const onPressReset = (email) => {
        if (Utils.ValidateInput.validateEmail(email)) {
            setIsLoading(true)
            const emailFormat = email.toLowerCase()
            const params = {
                email: emailFormat
            }
            Api.RequestApi.postForgotPasswordApiRequest(params)
                .then(res => {
                    console.log(`res: ${JSON.stringify(res.data)}`);
                    Utils.Toast.ToastModal('success', 'top', 'Success', res.data.message, 3000)
                })
                .catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your children fail, error: ${err}`, 3000)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
        else {
            Utils.Toast.ToastModal('error', 'top', 'Fail', `You entered email not correct format`, 3000)
        }
    }

    const onPressBack = () => {
        navigation.goBack()
    }

    return (
        <ForgetPassword
            onPressReset={onPressReset}
            isLoading={isLoading}
            onPressBack={onPressBack}
        />
    )
}

