import React from 'react'
import EditKids from './editKids'
export default function EditKidsController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <EditKids
            onPressBack={onPressBack}
        />
    )
}

