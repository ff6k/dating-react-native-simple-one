import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function Ethnicity(props) {
    const { t, i18n } = props
    const { language } = i18n
    let dataList
    switch (language) {
        case "vi":
            dataList = Const.Ethnicity.dataEthnicityVN
            break;
        default:
            dataList = Const.Ethnicity.dataEthnicityEN
    }
    return (
        <MyVirtues title={t("Ethnicity")} dataList={dataList} t={t} />
    )
}

export default withTranslation()(Ethnicity)