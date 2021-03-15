import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
    webClientId: "951296790724-74vcf3drh6lrorteflntfbhbjc2etbao.apps.googleusercontent.com",
    offlineAccess: true
});
// const configureGoogleSignIn = () => {
//     console.log('config')
//     GoogleSignin.configure({
//         webClientId: "951296790724-3khtgggij5t18rtv77d20ocftacdqioc.apps.googleusercontent.com",// my clientID
//         offlineAccess: true,
//         // offlineAccess: false
//         scopes: ['profile', 'email']

//     });
// }
export default function googleLogin() {

    useEffect(() => {
        // configureGoogleSignIn()
    }, []);
    // GoogleSignin.configure();
    signIn = async () => {
        console.log('object')
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(`userInfo: ${JSON.stringify(userInfo)}`);
            //   this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('SIGN_IN_CANCELLED')
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('IN_PROGRESS')
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('PLAY_SERVICES_NOT_AVAILABLE')
                // play services not available or outdated
            } else {
                // some other error happened
                console.log('object error', error)
            }
        }
        // try {
        //     const { idToken } = await GoogleSignin.signIn();
        //     console.log(`idToken: ${idToken}`);
        // } catch (error) {
        //     console.log(`error: ${error}`);
        // }
    };
    return (
        <View>
            <Text>googleLogin</Text>
            <TouchableOpacity onPress={() => signIn()}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
