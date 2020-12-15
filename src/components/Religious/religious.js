import React from 'react'
import MyVirtues from '/src/components/UI/myVirtues'



function Religious(props) {
    const { onPressBack, onPressGetItem, religiousBegin, dataList } = props

    return (
        <MyVirtues
            title={'My Religious'}
            itemBegin={religiousBegin}
            dataList={dataList}
            onPressBack={onPressBack}
            onPressGetItem={onPressGetItem}
            content={'RELIGIOUS'}
            detail={`Select your religious that you'd like to share`}
        />
    )
}

export default Religious
