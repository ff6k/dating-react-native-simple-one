import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'
import { withTranslation } from 'react-i18next'

function HightestLevelAttended(props) {
    const { t, i18n } = props
    const { language } = i18n
    let dataList
    switch (language) {
        case "vi":
            dataList = Const.HightestLevelAttended.dataHightestLevelAttendedVN
            break;
        default:
            dataList = Const.HightestLevelAttended.dataHightestLevelAttendedEN
    }
    return (
        <MyVirtues title={t("Hightest Level Attended")}
            dataList={dataList}
            t={t}
        />
    )
}

export default withTranslation()(HightestLevelAttended)
