import React from 'react'
const data = [
    { id: 1, label: 'male' },
    { id: 2, label: 'female' },
    { id: 3, label: 'other' }
]
import EditContentList from '/src/components/UI/editContentList'
export default function editGender(props) {
    const { onPressBack } = props
    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            title={'I Am'}
        />
    )
}

