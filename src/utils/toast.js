import { ToastAndroid } from 'react-native'

export const ToastShortTop = (message) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
    );
};