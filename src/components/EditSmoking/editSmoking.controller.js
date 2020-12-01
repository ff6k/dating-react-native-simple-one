import React from 'react'
import EditSmoking from './editSmoking'
export default function EditSmokingController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <EditSmoking
            onPressBack={onPressBack}
        />
    )
}

