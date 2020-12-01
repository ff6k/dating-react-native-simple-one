import React from 'react'
import EditContentList from '/src/components/UI/editContentList'

const data = [
    { id: 1, label: `Don't have kids` },
    { id: 2, label: `Have kids` },
]
export default function editKids(props) {
    const { onPressBack } = props
    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            title={'Child status'}
        />
    )
}
