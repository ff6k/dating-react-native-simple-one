import React from 'react'
import EditFamilyPlan from './editFamilyPlan'
export default function EditFamilyPlanController(props) {
    const { navigation } = props

    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <EditFamilyPlan
            onPressBack={onPressBack}
        />
    )
}

