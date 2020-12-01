import React from 'react'
import EditContentList from '/src/components/UI/editContentList'

const data = [
    { id: 1, label: `Yes` },
    { id: 2, label: `No` },
    { id: 3, label: `Sometimes` },
]
export default function editSmoking(props) {
    const { onPressBack } = props
    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            title={'Smoking Status'}
        />
    )
}

