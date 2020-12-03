import React, { useEffect, useState } from 'react'
import Birthday from './birthday'
import Const from '/src/const'
import Api from '/src/api'
import Utils from '/src/utils'
import { useDispatch, useSelector } from 'react-redux'


const DATE_ADULT = 18
let dateSave = ""



let token
let idUser
export default function BirthdayController(props) {

    const { navigation } = props
    const [isShowAlert, setIsShowAlert] = useState(false)
    const dataStore = useSelector(state => state.login)
    const [isShowAlertFail, setIsShowAlertFail] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    const getDataStore = (dataStore) => {
        if (dataStore.length > 0) {
            const { jwtToken, id } = dataStore[0]
            token = jwtToken
            idUser = id
        }
        else {
            return null // empty data
        }
    }


    const saveDataApi = (id, token, dateSave) => {
        const params = {
            id: id,
            token: token,
            dateOfBirth: dateSave
        }
        Api.RequestApi.putProfileBirthdayApiRequest(params)
            .then(res => {
                navigation.navigate(Const.NameScreens.Gender)
            })
            .catch(err => {
                setIsShowAlertFail(true)
                console.log(err)
            })
    }

    useEffect(() => {
        getDataStore(dataStore)
    }, [])

    const onPressBackButton = () => {
        setIsShowConfirmModal(true)
    }

    const onPressButtonLeft = () => {
        setIsShowConfirmModal(false)
    }

    const onPressButtonRight = () => {
        setIsShowConfirmModal(false)
        navigation.goBack()
    }

    const onPressNextButton = () => {
        if (dateSave !== "") {
            if (checkDateAdult(dateSave)) {
                const dateTemp = Utils.Format.formatDate(dateSave)
                saveDataApi(idUser, token, dateTemp)
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

    const changeShowAlertFail = () => {
        setIsShowAlertFail(!isShowAlertFail)
    }
    return (
        <Birthday
            onPressBackButton={onPressBackButton}
            onPressNextButton={onPressNextButton}
            onGetDate={onGetDate}
            isShowAlert={isShowAlert}
            changeShowAlert={changeShowAlert}
            isShowAlertFail={isShowAlertFail}
            changeShowAlertFail={changeShowAlertFail}
            onPressButtonRight={onPressButtonRight}
            onPressButtonLeft={onPressButtonLeft}
            isShowConfirmModal={isShowConfirmModal}
        />
    )
}

