import ImagePicker from 'react-native-image-picker';

// export const chooseImage = () => {
//     let options = {
//         title: 'Select Image',
//         customButtons: [
//             { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//         ],
//         storageOptions: {
//             skipBackup: true,
//             path: 'images',
//         },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//         if (response.didCancel) {
//             console.log('User cancelled image picker');
//         } else if (response.error) {
//             console.log('ImagePicker Error: ', response.error);
//         } else if (response.customButton) {
//             console.log('User tapped custom button: ', response.customButton);
//             alert(response.customButton);
//         } else {
//             // const source = { uri: response.uri };

//             // You can also display the image using data:
//             // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//             // alert(JSON.stringify(response));s
//             // console.log('response', JSON.stringify(response));
//             return {
//                 filePath: response,
//                 fileData: response.data,
//                 fileUri: response.uri
//             }
//         }
//     });
// }

export const launchCamera = (res) => {
    // let options = {
    //     storageOptions: {
    //         skipBackup: true,
    //         path: 'images',
    //     },
    // };
    // ImagePicker.launchCamera(options, (response) => {
    //     if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //     } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //     } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //         alert(response.customButton);
    //     } else {
    //         res({
    //             filePath: response,
    //             fileData: response.data,
    //             fileUri: response.uri
    //         })
    //     }
    // });

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
            // return {
            // filePath: response,
            // fileData: response.data,
            // fileUri: response.uri
            // }
        }
    })
    // console.log('dt', dt)

}