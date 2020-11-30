import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function FamilyPlans(props) {
    const { t, i18n } = props
    const { language } = i18n
    let dataList
    switch (language) {
        case "vi":
            dataList = Const.FamilyPlans.dataFamilyPlansVN
            break;
        default:
            dataList = Const.FamilyPlans.dataFamilyPlansEN
    }

    return (
        <MyVirtues title={t("Family Plans")} dataList={dataList} t={t} />
    )
}

export default withTranslation()(FamilyPlans)
