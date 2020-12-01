import React from 'react'
import Religious from './religious'
import Const from '/src/const'
export default function ReligiousController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <Religious
            onPressBack={onPressBack}
        />
    )
}

