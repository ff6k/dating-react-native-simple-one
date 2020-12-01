import React from 'react'
import EditDrinking from './editDrinking'
export default function EditDrinkingController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <EditDrinking
            onPressBack={onPressBack}
        />
    )
}

