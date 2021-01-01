import firebase from 'react-native-firebase'
import { Alert } from 'react-native'

const getFcmToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
        console.log(fcmToken);
        return fcmToken// showAlert('Your Firebase Token is:', fcmToken);
    } else {
        showAlert('Failed', 'No token received');
    }
}

const requestPermission = async () => {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
    } catch (error) {
        console.log(`error: ${error}`);
        // User has rejected permissions
    }
}

export const messageListener = async () => {
    firebase.notifications().onNotification((notification) => {
        const { title, body, data } = notification;
        console.log(`data: ${JSON.stringify(data)}`);
        // showAlert(title, body);
        // dataMessages = data
    });

    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body, data } = notificationOpen.notification;
        console.log(`data open app------------------: ${JSON.stringify(data)}`);
        // dataMessages = data
    }
}

const showAlert = (title, message) => {
    Alert.alert(
        title,
        message,
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
    );
}
export const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        return getFcmToken()
    } else {
        requestPermission();
    }
}

