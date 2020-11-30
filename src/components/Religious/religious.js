import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function Religious(props) {
    const { t, i18n, onPressNext } = props
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
        <MyVirtues title={t("Religious Beliefs")} dataList={dataList} t={t}
            onPressNext={onPressNext}
        />
    )
}

export default withTranslation()(Religious)
