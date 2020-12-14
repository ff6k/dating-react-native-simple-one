import React from 'react'
import CheckOneItem from './editGender'
export default function EditGenderController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <CheckOneItem
            onPressBack={onPressBack}
            isChange={true}
        />
    )
}

