import ImagePicker from 'react-native-image-crop-picker';
const height_image = 600
const width_image = 400

export const openPickerCropImage = () => {
    return ImagePicker.openPicker({
        width: width_image,
        height: height_image,
        cropping: true
    })
}

export const openCameraCropImage = () => {
    return ImagePicker.openCamera({
        width: width_image,
        height: height_image,
        cropping: true,
    })
}