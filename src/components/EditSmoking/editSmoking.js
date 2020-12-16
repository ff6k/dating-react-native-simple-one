import React from 'react'
import EditContentList from '/src/components/UI/editContentList'


export default function editSmoking(props) {
    const { onPressBack, isChange, indexSmoking, data, onChangeDataItemClick, onPressGetItem } = props

    return (
        <EditContentList
            title={'Smoking Status'}
            data={data}
            onPressBack={onPressBack}
            indexBegin={indexSmoking}
            isChange={isChange}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}

