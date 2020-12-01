import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function Ethnicity(props) {
    const { t, i18n, onPressBack } = props
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
        <MyVirtues title={t("My Ethnicity")} dataList={dataList} t={t}
            onPressBack={onPressBack}
            content={'ETHNICITY'}
            detail={`Select your ethnicity that you'd like to share`}
        />
    )
}

export default withTranslation()(Ethnicity)