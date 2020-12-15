import React from 'react'
import EditContentList from '/src/components/UI/editContentList'


export default function editKids(props) {
    const { onPressBack, isChange, indexKids, data, onChangeDataItemClick, onPressGetItem } = props
    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            title={'Child status'}
            indexBegin={indexKids}
            isChange={isChange}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}
