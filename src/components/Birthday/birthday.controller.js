import React, { useState } from 'react'
import Birthday from './birthday'
import Const from '/src/const'
import Utils from '/src/utils'

const DATE_ADULT = 18
let dateSave = ""
export default function BirthdayController(props) {

    const { navigation } = props
    const [isShowAlert, setIsShowAlert] = useState(false)


    const onPressBackButton = () => {
        navigation.goBack()
    }

    const onPressNextButton = () => {
        if (dateSave !== "") {
            if (checkDateAdult(dateSave)) {
                const dateTemp = Utils.Format.formatDate(dateSave)
                navigation.navigate(Const.NameScreens.Gender, { date: dateTemp })
            }
            else {
                setIsShowAlert(true)
            }
        }
    }

    const checkDateAdult = (date) => {
        const yearOld = Utils.Calculator.getOldYear(date)
        return yearOld >= DATE_ADULT ? true : false
    }
    const onGetDate = (date) => {
        dateSave = date
    }

    const changeShowAlert = () => {
        setIsShowAlert(false)
    }
    return (
        <Birthday
            onPressBackButton={onPressBackButton}
            onPressNextButton={onPressNextButton}
            onGetDate={onGetDate}
            isShowAlert={isShowAlert}
            changeShowAlert={changeShowAlert}
        />
    )
}

