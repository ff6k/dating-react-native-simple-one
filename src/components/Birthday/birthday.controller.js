import React, { useState } from 'react'
import Birthday from './birthday'
import Const from '/src/const'
import Utils from '/src/utils'

const DATE_ADULT = 18
export default function BirthdayController(props) {

    const { navigation } = props

    let dateSave = ""

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

            }
        }
    }

    const checkDateAdult = (date) => {
        const now = new Date()
        const yearOld = now.getUTCFullYear() - new Date(date).getUTCFullYear()
        return yearOld >= DATE_ADULT ? true : false
    }
    const onGetDate = (date) => {
        dateSave = date
    }
    return (
        <Birthday
            onPressBackButton={onPressBackButton}
            onPressNextButton={onPressNextButton}
            onGetDate={onGetDate}
        />
    )
}

