import React from 'react'
import Ethnicity from './ethnicity'
export default function EthnicityController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <Ethnicity
            onPressBack={onPressBack}
        />
    )
}

