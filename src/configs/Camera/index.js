import ImagePicker from 'react-native-image-picker';

export const launchCamera = (res) => {

    ImagePicker.launchCamera(
        {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
        },
        (response) => {
            res(response);
        },
    )

}

export const launchImageLibrary = (res) => {
    let options = {
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
        } else {
            res(response)

        }
    })
}