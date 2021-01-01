import React, { useEffect, useState } from 'react'
import Birthday from './birthday'
import Const from '/src/const'
import Api from '/src/api'
import Utils from '/src/utils'
import { useDispatch, useSelector } from 'react-redux'
import { removeKeyStorage } from '/src/configs/AsyncStorage'
import { resetData, changeDateOfBirthLoginEmail, insertDataLoginEmail } from '/src/slice/loginSlice'
// import { pushDataLoginEmail, insertDataLoginEmail } from '/src/slice/loginSlice'

const DATE_ADULT = 18
let dateSave = ""

let token
let idUser
export default function BirthdayController(props) {

    const dispatch = useDispatch()

    const { navigation } = props
    const [isShowAlert, setIsShowAlert] = useState(false)
    const [isShowAlertFail, setIsShowAlertFail] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    const dataStore = useSelector(state => state.login)

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

    useEffect(() => {
        getDataStore(dataStore)
    }, [])

    const saveDataApi = (id, token, dateSave) => {
        const params = {
            id: id,
            token: token,
            dateOfBirth: dateSave
        }
        Api.RequestApi.putProfileBirthdayApiRequest(params)
            .then(res => {
                dispatch(changeDateOfBirthLoginEmail({ dateOfBirth: dateSave.toString() }))
                navigation.navigate(Const.NameScreens.Gender)
            })
            .catch(err => {
                setIsShowAlertFail(true)
            })
    }

    const onPressBackButton = () => {
        setIsShowConfirmModal(true)
        // if (navigation.canGoBack()) {
        //     navigation.goBack()
        // } else {
        //     BackHandler.exitApp()
        // }
    }

    const onPressButtonLeft = () => {
        setIsShowConfirmModal(false)
    }

    const logoutUser = () => {
        dispatch(resetData())
        const isSuccess = removeKeyStorage(Const.StorageKey.CODE_LOGIN_TOKEN)
        const isSuccessPre = removeKeyStorage(Const.StorageKey.CODE_PREFERENCES)
        if (isSuccess && isSuccessPre) {
            if (navigation.canGoBack()) {
                navigation.goBack()
            } else {
                navigation.replace(Const.NameScreens.Login)
            }
        }
    }

    const onPressButtonRight = () => {
        setIsShowConfirmModal(false)
        logoutUser()
    }

    const onPressNextButton = () => {
        if (dateSave !== "") {
            if (checkDateAdult(dateSave)) {
                // navigation.navigate(Const.NameScreens.Gender)
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
            isShowConfirmModal={isShowConfirmModal}
            setIsShowConfirmModal={setIsShowConfirmModal}
            onPressButtonLeft={onPressButtonLeft}
            onPressButtonRight={onPressButtonRight}

        />
    )
}

