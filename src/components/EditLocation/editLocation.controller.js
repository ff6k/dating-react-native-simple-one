import React, { useEffect, useState } from 'react'
import EditLocation from './editLocation'
import Geolocation from '@react-native-community/geolocation';
import Api from '/src/api'
export default function EditLocationController(props) {
    const { navigation } = props
    const [dataLocation, setDataLocation] = useState([])

    const onPressBack = () => {
        navigation.goBack()
    }


    useEffect(() => {

        let isMounted = true
        const getLocation = () => {
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log('get location')
                    const currentLongitude =
                        JSON.stringify(position.coords.longitude);
                    const currentLatitude =
                        JSON.stringify(position.coords.latitude);

                    const params = {
                        latitude: currentLatitude,
                        longitude: currentLongitude
                    }
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
            isMounted = true
        }


    }, [])

    return (
        <EditLocation
            onPressBack={onPressBack}
            dataLocation={dataLocation}
        />
    )
}
