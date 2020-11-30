import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';
// import * as LoginManager from 'react-native-fbsdk/lib/commonjs/FBLoginManager';
// import AccessToken from 'react-native-fbsdk/lib/commonjs/FBAccessToken';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';
import DocumentPicker from 'react-native-document-picker';
import CryptoJS from "react-native-crypto-js";
// import CryptoJS from "react-native-crypto-js/";
class App extends Component {
    state = {
        photo: null,
    };

    constructor(props) {
        super(props)
    }

    //   fbLogout = () => {
    //     LoginManager.logOut();
    //   };
    //   fbLogin = () => {
    //     LoginManager.logInWithPermissions([
    //       'public_profile',
    //       'email',
    //       'user_birthday',
    //       'user_gender',
    //       'user_location',
    //       'user_photos',
    //     ]).then(
    //       (result) => {
    //         if (result.isCancelled) {
    //           console.log('Login cancelled');
    //         } else {
    //           AccessToken.getCurrentAccessToken().then((data) => {
    //             console.log(data);
    //           });
    //         }
    //       },
    //       (error) => {
    //         console.log('Login fail with error: ' + error);
    //       },
    //     );
    //   };

    //   _googleSignIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();

    //       const userInfo = await GoogleSignin.signIn();
    //       console.log(userInfo);
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         console.log('cancelled');
    //         // user cancelled the login flow
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         console.log('in progress');
    //         // operation (e.g. sign in) is in progress already
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         console.log('play service');
    //         // play services not available or outdated
    //       } else {
    //         console.log(error);
    //         // some other error happened
    //       }
    //     }
    //   };
    //   _googleSignOut = async () => {
    //     try {
    //       await GoogleSignin.revokeAccess();
    //       await GoogleSignin.signOut();
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            console.log('res : ' + JSON.stringify(res));
            if (res.uri) {
                this.setState({ photo: res });
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Cancelled');
            } else {
                console.log(err);
                throw err;
            }
        }
    };

    uploadPhoto = () => {
        // var SHA1 = require("react-native-crypto-js").SHA1;
        const { photo } = this.state;
        let timestamp = (Date.now() / 1000 | 0).toString();
        let api_key = '789456965488472'
        let api_secret = 'eH_qQX9upsCqSawvJLBdrR0tsuA'
        let cloud = 'dating-app-2020'
        let hash_string = 'timestamp=' + timestamp + api_secret
        let ciphertext = CryptoJS.AES.encrypt(hash_string, api_secret).toString();
        console.log(ciphertext)
        // let signature = SHA1(hash_string).toString();
        let upload_url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload'

        let xhr = new XMLHttpRequest();
        xhr.open('POST', upload_url);
        xhr.onload = () => {
            console.log('success')
            console.log(xhr);
        };
        let formdata = new FormData();
        formdata.append('file', { uri: photo, type: 'image/png', name: 'upload.png' });
        formdata.append('timestamp', timestamp);
        formdata.append('api_key', api_key);
        formdata.append('signature', ciphertext);
        xhr.send(formdata);
        // const xhr = new XMLHttpRequest();

        // const body = new FormData();

        // body.append('File', {
        //     uri: photo.uri,
        //     type: photo.type,
        //     name: photo.name,
        // });

        // xhr.addEventListener('load', () => {
        //     console.log('load')
        //     console.log(xhr.response);
        // });
        // xhr.open('POST', 'http://192.168.1.120:5000/api/users/22/photos');
        // xhr.setRequestHeader(
        //     'Authorization',
        //     'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyIiwibmJmIjoxNjA1NTMzNDMwLCJleHAiOjE2MDU2MTk4MzAsImlhdCI6MTYwNTUzMzQzMH0.g5aGHWCYSHCmPBHC-yvT4N0fZjAISuL_Uv92EcJlQd8D_pVmaxbFrWlYhAwOCu6voSAodCWVyuO2bQvzKDTyZg'
        // );
        // xhr.send(body);
    };

    //   componentDidMount() {
    //     GoogleSignin.configure({
    //       webClientId:
    //         '95578192260-amn3dtj5avlfmk9su13ujrkqsnhr4btm.apps.googleusercontent.com',
    //     });
    //   }

    render() {
        const { photo } = this.state;
        return (
            <View>
                {/* <Button title="fb login" onPress={this.fbLogin} />
        <Button title="fb logout" onPress={this.fbLogout} />

        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._googleSignIn}
          disabled={false}
        />

        <Button title="google logout" onPress={this._googleSignOut} /> */}

                <Button title="select image" onPress={this.selectFile} />

                {photo && (
                    <Image
                        source={{
                            uri: photo.uri,
                        }}
                        style={{ width: 200, height: 200 }}
                    />
                )}
                {photo && <Button title="upload photo" onPress={this.uploadPhoto} />}
            </View>
        );
    }
}

export default App;
