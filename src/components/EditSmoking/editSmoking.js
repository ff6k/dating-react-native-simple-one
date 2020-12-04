import React from 'react'
import EditContentList from '/src/components/UI/editContentList'


export default function editSmoking(props) {
    const { onPressBack, onPressSave, data, onChangeDataItemClick } = props
    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            onPressSave={onPressSave}
            title={'Smoking Status'}
            onChangeDataItemClick={onChangeDataItemClick}
        />
    )
}

