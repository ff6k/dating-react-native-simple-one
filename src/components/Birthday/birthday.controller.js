import React from 'react'
import Birthday from './birthday'
import Const from '/src/const'
import Utils from '/src/utils'
export default function BirthdayController(props) {

    const { navigation } = props

    let dateSave = ""

    const onPressBackButton = () => {
        navigation.goBack()
    }

    const onPressNextButton = () => {
        const dateTemp = Utils.Format.formatDate(dateSave)
        navigation.navigate(Const.NameScreens.Gender, { date: dateTemp })
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

