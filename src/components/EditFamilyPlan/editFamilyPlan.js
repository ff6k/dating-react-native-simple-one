import React from 'react'
import EditContentList from '/src/components/UI/editContentList'
export default function editFamilyPlan(props) {
    const { onPressBack, isChange, indexFamilyPlan, data, onChangeDataItemClick, onPressGetItem } = props
    return (
        <EditContentList
            title={'My Family Plan'}
            data={data}
            onPressBack={onPressBack}
            indexBegin={indexFamilyPlan}
            isChange={isChange}
            onChangeDataItemClick={onChangeDataItemClick}
            onPressGetItem={onPressGetItem}
        />
    )
}
