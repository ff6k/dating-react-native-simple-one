import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function Ethnicity(props) {
    const { onPressBack, onPressGetItem, religiousBegin, dataList } = props

    return (
        <MyVirtues
            title={'My Ethnicity'}
            itemBegin={religiousBegin}
            dataList={dataList}
            onPressBack={onPressBack}
            onPressGetItem={onPressGetItem}
            content={'ETHNICITY'}
            detail={`Select your ethnicity that you'd like to share`}
        />
    )
}

export default Ethnicity