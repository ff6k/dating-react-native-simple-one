import React, { useEffect } from 'react'
import { StyleSheet, Button, Linking, View } from 'react-native'
// import MapView from 'react-native-maps';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle }
    from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geocoder from 'react-native-geocoding';
import axios from 'axios';
let currentLongitude
let currentLatitude
export default function mapViewTest() {
    useEffect(() => {
        async function fetchData() {
            if (Platform.OS === 'ios') {
                var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
                console.log('iPhone: ' + response);

                if (response === 'granted') {
                    locateCurrentPosition();
                }
            } else {
                var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
                console.log('Android: ' + response);

                if (response === 'granted') {
                    locateCurrentPosition();
                }
            }
        }
        fetchData();
    }, [])

    locateCurrentPosition = () => {
        // Geolocation.getCurrentPosition(
        //     //Will give you the current location
        //     (position) => {
        //         //getting the Longitude from the location json
        //         currentLongitude =
        //             JSON.stringify(position.coords.longitude);

        //         //getting the Latitude from the location json
        //         currentLatitude =
        //             JSON.stringify(position.coords.latitude);
        //     }, (error) => console.log(error.message)
        //     , {
        //     enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
        // }
        // );
    }

    const handlePress = () => {
        const latitude = currentLatitude;
        console.log(`latitude: ${latitude}`);
        const longitude = currentLongitude;
        console.log(`longitude: ${longitude}`);
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${latitude},${longitude}`;
        const label = 'Custom Label';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    }

    const handlePressGeo = () => {
        console.log('object')
        const Url = "http://api.positionstack.com/v1/reverse?access_key=41f41e66e4b8ff4008b7ce8827badd2c&query=10.805495,106.73090833333332&output=json"
        axios.get(Url)
            .then(res => console.log(JSON.stringify(res.data)))
            .catch(err => console.log(err))
        /**
         * // Reverse Geocoding API Endpoint

http://api.positionstack.com/v1/forward
    ? access_key = YOUR_ACCESS_KEY
    & query = 40.7638435,-73.9729691
    
// optional parameters: 

    & limit = 10
    & output = json
    // more optional parameters available 
         */
        //http://api.positionstack.com/v1/
        // Geocoder.init("41f41e66e4b8ff4008b7ce8827badd2c");
        // Geocoder.from("Pyramid", {
        //     southwest: { lat: 36.05, lng: -115.25 },
        //     northeast: { lat: 36.16, lng: -115.10 }
        // })
        //     .then(json => {
        //         var location = json.results[0].geometry.location;
        //         console.log(location);
        //     })
        //     .catch(error => console.warn(error));
    }

    return (
        // <MapView
        //     style={{ flex: 1 }}
        //     initialRegion={{
        //         latitude: 10.8055,
        //         longitude: 106.7309092,
        //         latitudeDelta: 0.0922,
        //         longitudeDelta: 0.0421,
        //     }}
        // />
        <View>
            <Button title={'click'} onPress={handlePress} />
            <Button title={'react-native-geocoding'} onPress={handlePressGeo} />
        </View>

    )
}

const styles = StyleSheet.create({})
