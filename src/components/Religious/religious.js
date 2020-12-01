import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function Religious(props) {
    const { i18n, onPressBack, t } = props
    const { language } = i18n
    let dataList
    switch (language) {
        case "vi":
            dataList = Const.Religious.dataReligiousVN
            break;
        default:
            dataList = Const.Religious.dataReligiousEN
    }

    return (
        <MyVirtues
            title={'My Religious'}
            dataList={dataList}
            onPressBack={onPressBack}
            content={'RELIGIOUS'}
            detail={`Select your religious that you'd like to share`}
        />
    )
}

export default withTranslation()(Religious)
