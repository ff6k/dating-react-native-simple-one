import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function Religious(props) {
    const { t, i18n } = props
    const { language } = i18n
    let dataList
    switch (language) {
        case "vi":
            dataList = Const.Politics.dataPoliticsVN
            break;
        default:
            dataList = Const.Politics.dataPoliticsEN
    }
    return (
        <MyVirtues title={t("Politics")} dataList={dataList} t={t} />
    )
}

export default withTranslation()(Religious)
