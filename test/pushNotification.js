import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import firebase from 'react-native-firebase'

export default function pushNotification() {

    const getFcmToken = async () => {
        const fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            console.log(fcmToken);
            showAlert('Your Firebase Token is:', fcmToken);
        } else {
            showAlert('Failed', 'No token received');
        }
    }

    const requestPermission = async () => {
        try {
            await firebase.messaging().requestPermission();
            // User has authorised
        } catch (error) {
            // User has rejected permissions
        }
    }

    const messageListener = async () => {
        firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            showAlert(title, body);
        });

        firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            showAlert(title, body);
        });

        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            showAlert(title, body);
        }

        firebase.messaging().onMessage((message) => {
            console.log(JSON.stringify(message));
        });
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
    const checkPermission = async () => {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            getFcmToken();
        } else {
            requestPermission();
        }
    }

    useEffect(() => {
        checkPermission();
        messageListener();
    }, []);


    return (
        <View>
            <Text>pushNotification</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
