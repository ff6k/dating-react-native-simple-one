import React from 'react'
import InterestInfomation from './interestInfomation'
export default function InterestInfomationController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <InterestInfomation
            onPressBack={onPressBack}
        />
    )
}

