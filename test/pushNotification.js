import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

export default function pushNotification() {

    useEffect(() => {
        let flag = true
        if (flag) {
            requestUserPermission()
        }
        return () => {
            flag = false
        }
    }, [])

    return (
        <View>
            <Text>pushNotification</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
