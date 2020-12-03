import Const from '/src/const'
export const postImageApiRequest = async (dataImage) => {
    const data = new FormData(dataImage)
    data.append('file', dataImage)
    data.append('upload_preset', Const.Cloudinary.UPLOAD_PRESET)
    data.append('cloud_name', Const.Cloudinary.CLOUD_NAME)
    return fetch(Const.Cloudinary.URL_UPLOAD, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    })
}