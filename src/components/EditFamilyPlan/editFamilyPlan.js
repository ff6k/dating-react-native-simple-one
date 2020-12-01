import React from 'react'
const data = [
    { id: 1, label: `Don't want kids` },
    { id: 2, label: 'Want kids' },
    { id: 3, label: 'Open to kids' }
]
import EditContentList from '/src/components/UI/editContentList'
export default function editFamilyPlan(props) {
    const { onPressBack } = props
    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            title={'My Family Plan'}
        />
    )
}
