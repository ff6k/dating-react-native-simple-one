/**
 * @format
 */
import React from 'react'
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import { LogBox } from 'react-native'
import Toast from 'react-native-toast-message';
LogBox.ignoreLogs([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

import Navigation from '/src/configs/Navigation'
import { Provider } from 'react-redux'
import store from './src/store'

function Main() {
    return (
        <>
            <Provider store={store}>
                <Navigation />
            </Provider>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
    )
}

// import LinkingTest from '/test/linkingTest'
// import GoogleMapTest from '/test/GoogleMapTest/googleMapTest'
// import MapViewTest from '/test/mapViewTest'
// import BottomModalTest from '/test/RefTest/refTest'
// import DocumentPickerTest from '/test/DocumentPickerTest'
// import ConnectTest from '/test/chatTest1'
AppRegistry.registerComponent(appName, () => Main)
