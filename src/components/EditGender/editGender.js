import React from 'react'

import EditContentList from '/src/components/UI/editContentList'
export default function editGender(props) {
    const { onPressBack, isChange, indexGender, data, onChangeDataItemClick, onPressGetItem } = props
    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            title={'I Am'}
            indexBegin={indexGender}
            isChange={isChange}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}

