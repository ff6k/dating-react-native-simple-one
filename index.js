/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

// import Navigation from '/src/configs/Navigation'
// import { Provider } from 'react-redux'
// import store from './src/store'

// function Main() {
//     return (
//         <Provider store={store}>
//             <Navigation />
//         </Provider>
//     )
// }
import GoogleMapTest from '/test/GoogleMapTest/googleMapTest'
// import BottomModalTest from '/test/RefTest/refTest'
// import DocumentPickerTest from '/test/DocumentPickerTest'
AppRegistry.registerComponent(appName, () => GoogleMapTest);
