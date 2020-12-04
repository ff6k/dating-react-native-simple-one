import React from 'react'
import EditContentList from '/src/components/UI/editContentList'


export default function editDrinking(props) {
    const { onPressBack, onPressSave, onChangeDataItemClick, data } = props

    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            title={'Drinking Status'}
            onPressSave={onPressSave}
            onChangeDataItemClick={onChangeDataItemClick}
        />
    )
}

