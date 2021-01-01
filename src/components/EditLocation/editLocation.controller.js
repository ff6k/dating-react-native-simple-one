import React, { useEffect, useState } from 'react'
import EditLocation from './editLocation'
import Geolocation from '@react-native-community/geolocation';
import Api from '/src/api'
import Utils from '/src/utils'
import Const from '/src/const'
import { useDispatch, useSelector } from 'react-redux'
import { resetData } from '/src/slice/loginSlice'
import { removeKeyStorage } from '/src/configs/AsyncStorage'

let token
let idUser
let locationSelect

let longitudeData
let latitudeData
export default function EditLocationController(props) {
    const { navigation, route } = props
    const [dataLocation, setDataLocation] = useState([])
    const dataStore = useSelector(state => state.login)
    const dispatch = useDispatch()

    const onPressBack = () => {
        if (locationSelect !== undefined) {
            navigation.navigate(Const.NameScreens.MyProfile, { locationSelect })
        }
        else {
            if (navigation.canGoBack()) {
                navigation.goBack()
            }
            else {
                dispatch(resetData())
                const isSuccess = removeKeyStorage(Const.StorageKey.CODE_LOGIN_TOKEN)
                const isSuccessPre = removeKeyStorage(Const.StorageKey.CODE_PREFERENCES)
                if (isSuccess && isSuccessPre) {
                    navigation.replace(Const.NameScreens.Login)
                }
            }
        }
    }

    const getDataStore = () => {
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
        getDataStore()
    }, [])

    useEffect(() => {
        let isMounted = true
        const getLocation = () => {
            Geolocation.getCurrentPosition(
                (position) => {
                    const currentLongitude =
                        JSON.stringify(position.coords.longitude);
                    const currentLatitude =
                        JSON.stringify(position.coords.latitude);

                    const params = {
                        latitude: currentLatitude,
                        longitude: currentLongitude
                    }

                    longitudeData = currentLongitude
                    latitudeData = currentLatitude

                    Api.RequestApi.getLocationDetailApiRequest(params)
                        .then(res => setDataLocation(res.data.data))
                        .catch(err => console.log(err))

                }, (error) => {
                    console.log(error.message)
                }, {
                enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
            }
            );
        }
        if (isMounted) { getLocation() }
        return () => {
            isMounted = false
        }


    }, [])

    const onPressItemLocation = (item) => {
        const { label } = item
        locationSelect = label
        const params = {
            id: idUser,
            token,
            location: label,
            latitude: latitudeData,
            longitude: longitudeData
        }
        Api.RequestApi.putProfileLocationApiRequest(params)
            .then(res => {
                if (route.params) {
                    if (route.params.isLogin) {
                        navigation.replace(Const.NameScreens.BottomNavigation)
                    }
                }
                Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your location successfully', 500)
            })
            .catch(err => {
                Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your location fail, error: ${err}`, 500)
            })

    }

    return (
        <EditLocation
            onPressBack={onPressBack}
            dataLocation={dataLocation}
            onPressItemLocation={onPressItemLocation}
        />
    )
}
