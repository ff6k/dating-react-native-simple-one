import React, { useEffect } from 'react'
import { StyleSheet, Button, Linking } from 'react-native'
// import MapView from 'react-native-maps';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle }
    from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';

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
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                //getting the Longitude from the location json
                currentLongitude =
                    JSON.stringify(position.coords.longitude);

                //getting the Latitude from the location json
                currentLatitude =
                    JSON.stringify(position.coords.latitude);
            }, (error) => console.log(error.message), {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
        }
        );
    }

    const handlePress = () => {
        const latitude = currentLatitude;
        const longitude = currentLongitude;
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${latitude},${longitude}`;
        const label = 'Custom Label';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
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
        </View>

    )
}

const styles = StyleSheet.create({})
