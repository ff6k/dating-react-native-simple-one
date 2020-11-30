import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function Kids(props) {
    const { t, i18n } = props
    const { language } = i18n
    let dataList
    switch (language) {
        case "vi":
            dataList = Const.Kids.dataKidsVN
            break;
        default:
            dataList = Const.Kids.dataKidsEN
    }
    return (
        <MyVirtues title={t("Kids")} dataList={dataList} t={t} />
    )
}

export default withTranslation()(Kids)
