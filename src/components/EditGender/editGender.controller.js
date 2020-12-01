import React from 'react'
import EditGender from './editGender'
export default function EditGenderController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <EditGender
            onPressBack={onPressBack}
        />
    )
}

