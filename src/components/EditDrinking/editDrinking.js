import React from 'react'
import EditContentList from '/src/components/UI/editContentList'


export default function editDrinking(props) {
    const { onPressBack, isChange, indexDrinking, data, onChangeDataItemClick, onPressGetItem } = props

    return (
        <EditContentList
            title={'Drinking Status'}
            data={data}
            onPressBack={onPressBack}
            indexBegin={indexDrinking}
            isChange={isChange}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}

