import React, { useEffect, useState } from 'react'
import MyProfile from './myProfile'

import { withTranslation } from 'react-i18next';
import Const from '/src/const'
import Api from '/src/api'
import Utils from '/src/utils'
import { useSelector } from 'react-redux'


async function getApiProfile(params) {
    return Api.RequestApi.getProfileApiRequest(params)
}

async function getApiInterest(params) {
    return Api.RequestApi.getInterestApiRequest(params)
}

let token
let indexPhoto
let idUser
let bioBegin
let nameBegin
let workAtBegin
let jobBegin
let educationBegin
let dateOfBirthBegin
// let genderBegin
function MyProfileController(props) {
    const { navigation, route, t } = props
    const [dataProfile, setDataProfile] = useState(null)
    const [dataPhotos, setDataPhotos] = useState(null)
    const refSlideModal = React.createRef()
    const [indexLoading, setIndexLoading] = useState()
    const [idRemoving, setIdRemoving] = useState()
    const [genderBegin, setGenderBegin] = useState()
    const [religionBegin, setReligionBegin] = useState()
    const [ethnicityBegin, setEthnicityBegin] = useState()
    const [kidsBegin, setKidsBegin] = useState()
    const [dataInterest, setDataInterest] = useState([])
    const [drinkingBegin, setDrinkingBegin] = useState()
    const [smokingBegin, setSmokingBegin] = useState()
    const [locationBegin, setLocationBegin] = useState()
    const dataStore = useSelector(state => state.login)

    useEffect(() => {
        if (route.params !== undefined) {
            const { gender, isGetInterest, religion, ethnicity, kids, drinking, smoking, locationSelect } = route.params
            if (gender !== undefined) { setGenderBegin(gender) }
            if (isGetInterest !== undefined) {
                const params = {
                    id: idUser,
                    token: token
                }
                getApiInterest(params).then(res => {
                    setDataInterest(res.data)
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your interest list successfully', 3000)
                })
                    .catch(err => {
                        console.log(err)
                        Utils.Toast.ToastModal('error', 'top', 'Fail', 'You have saved your interest list successfully', 3000)
                    })
            }
            if (religion !== undefined) {
                setReligionBegin(religion)
            }
            if (ethnicity !== undefined) {
                setEthnicityBegin(ethnicity)
            }
            if (kids !== undefined) {
                setKidsBegin(kids)
            }
            if (drinking !== undefined) {
                setDrinkingBegin(drinking)
            }
            if (smoking !== undefined) {
                setSmokingBegin(smoking)
            }
            if (locationSelect !== undefined) {
                setLocationBegin(locationSelect)
            }
        }
    }, [route.params]);

    const getDataStore = () => {
        if (dataStore.length > 0) {
            const { jwtToken, id } = dataStore[0]
            token = jwtToken
            idUser = id
        }
        else {
            return null // empty data
        }
    }

    const checkAndFillPhotos = (data, count) => {
        if (data.length < count) {
            const numFill = count - data.length
            for (let i = 1; i < numFill + 1; i++) {
                data.push({ id: i * 999, url: undefined })
            }
        }
        return data
    }


    useEffect(() => {
        getDataStore()
        const params = {
            id: idUser,
            token: token
        }

        Promise.all([
            getApiProfile(params),
            getApiInterest(params)
        ]).then(async ([dataProfile, dataInterest]) => {
            const { drinking, bio, jobTitle, company, name, dateOfBirth, gender, religion, photos, school, ethnicity, children, location,
            } = dataProfile.data

            bioBegin = bio
            jobBegin = jobTitle
            workAtBegin = company
            nameBegin = name
            dateOfBirthBegin = dateOfBirth
            educationBegin = school

            setGenderBegin(gender)
            setKidsBegin(children)
            setReligionBegin(religion)
            setEthnicityBegin(ethnicity)
            setDrinkingBegin(drinking)
            setLocationBegin(location)

            const photosTemp = photos
            const dataPhotos = checkAndFillPhotos(photosTemp, 9)
            setDataPhotos(dataPhotos)
            setDataProfile(dataProfile.data)
            setDataInterest(dataInterest.data)
        })
            .catch(err => console.log(err))
    }, [])

    const onPressBack = () => {
        navigation.goBack()
    }

    const onPressInterest = () => {
        navigation.navigate(Const.NameScreens.InterestInfomation, { data: dataInterest })
    }

    const onPressGender = () => {
        navigation.navigate(Const.NameScreens.EditGender, { gender: genderBegin })
    }

    const onPressReligious = () => {
        navigation.navigate(Const.NameScreens.Religious, { religion: religionBegin })
    }

    const onPressEthnicity = () => {
        navigation.navigate(Const.NameScreens.Ethnicity, { ethnicity: ethnicityBegin })
    }

    const onPressKids = () => {
        navigation.navigate(Const.NameScreens.EditKids, { kids: kidsBegin })
    }

    const onPressSmoking = () => {
        navigation.navigate(Const.NameScreens.EditSmoking, { smoking: smokingBegin })
    }

    const onPressDrinking = () => {
        navigation.navigate(Const.NameScreens.EditDrinking, { drinking: drinkingBegin })
    }

    const onPressAddImage = (index) => {
        indexPhoto = index
        refSlideModal.current.open()
    }

    const onTakePhoto = () => {
        refSlideModal.current.close()
        Utils.Images.openCameraCropImage()
            .then(res => handleDataImage(res, indexPhoto))
            .catch(err => console.log(err))
    }

    const onUploadPhoto = () => {
        refSlideModal.current.close()
        Utils.Images.openPickerCropImage()
            .then(res => handleDataImage(res, indexPhoto))
            .catch(err => console.log(err))
    }
    const handleDataImage = (res, index) => {
        setIndexLoading(index)
        savePhotoCloudinary(res, index)

    }

    const savePhotoCloudinary = (res, index) => {
        const { path, mime } = res
        const typeImage = mime.split('/')[1]
        const nameFile = new Date().getTime().toString() + `.${typeImage}`
        const dataImage = { uri: path, name: nameFile, type: mime }
        Api.CloudinaryApi.postImageApiRequest(dataImage)
            .then(res => res.json())
            .then(
                data => {
                    saveDataPhotoApi(data, index)
                }
            ).catch(err => console.log(err))
    }

    const saveDataPhotoApi = (data, index) => {
        const { public_id, url } = data
        const params = {
            url: url,
            publicId: public_id,
            id: idUser,
            token: token
        }
        Api.RequestApi.putPhotosApiRequest(params)
            .then(response => {
                const dataTemp = [...dataPhotos]
                dataTemp[index].id = response.data.id
                dataTemp[index].url = response.data.url
                dataTemp[index].publicId = response.data.publicId
                setDataPhotos(dataTemp)
                Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your photo successfully', 3000)
            }).catch(err => {
                Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your photo fail, error: ${err}`, 3000)
            })
            .finally(() => setIndexLoading(null))
    }

    const onBlurTextExpand = (value) => {
        if (bioBegin !== undefined && bioBegin !== value) {
            const params = {
                bio: value,
                id: idUser,
                token: token
            }
            Api.RequestApi.putBioApiRequest(params)
                .then(response => {
                    bioBegin = response.data.bio
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your bio successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your bio fail, error: ${err}`, 3000)
                })
        }
    }

    const onBlurTextInputName = (value) => {
        if (value !== '' && nameBegin !== undefined && nameBegin !== value) {
            const params = {
                name: value,
                id: idUser,
                token: token
            }
            Api.RequestApi.putNameApiRequest(params)
                .then(response => {
                    nameBegin = response.data.name
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your name successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your name fail, error: ${err}`, 3000)
                })
        }
    }

    const pickDate = (date) => {

        const dateTemp = Utils.Format.formatDate(new Date(date), Const.DateFormat.DATE_DEFAULT)
        const dateOfBirthBeginTemp = Utils.Format.formatDate(new Date(dateOfBirthBegin), Const.DateFormat.DATE_DEFAULT)

        if (dateOfBirthBegin !== undefined && dateOfBirthBeginTemp !== dateTemp) {
            const params = {
                dateOfBirth: date,
                id: idUser,
                token: token
            }
            Api.RequestApi.putProfileBirthdayApiRequest(params)
                .then(response => {
                    dateOfBirthBegin = response.data.dateOfBirth
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your date of birth successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your date of birth fail, error: ${err}`, 3000)
                })
        }
    }

    const onBlurTextInputPhone = (value) => {
        const valueFormat = Utils.Format.formatPhone(value, '+84')
        const isPhoneFormat = Utils.ValidateInput.validatePhoneNumber(valueFormat)
        if (isPhoneFormat) {
            const params = {
                phone: value,
                id: idUser,
                token: token
            }
            Api.RequestApi.putPhoneApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your phone number successfully', 3000)
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your phone number fail, error: ${err}`, 3000)
                })
        }
        else {
        }
    }

    const onBlurTextInputJob = (value) => {
        if (value !== '' && jobBegin !== value) {
            const params = {
                job: value,
                id: idUser,
                token: token
            }
            Api.RequestApi.putJobApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your job successfully', 3000)
                    jobBegin = value
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your job fail, error: ${err}`, 3000)
                })
        }
    }

    const onBlurTextInputWorkAt = (value) => {
        if (value !== '' && workAtBegin !== value) {
            const params = {
                company: value,
                id: idUser,
                token: token
            }
            Api.RequestApi.putWorkAtApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your company successfully', 3000)
                    workAtBegin = value
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your company fail, error: ${err}`, 3000)
                })
        }
    }

    const onBlurTextInputEducation = (value) => {
        if (value !== '' && educationBegin !== value) {
            const params = {
                school: value,
                id: idUser,
                token: token
            }
            Api.RequestApi.putEducationApiRequest(params)
                .then(response => {
                    Utils.Toast.ToastModal('success', 'top', 'Success', 'You have saved your education successfully', 3000)
                    educationBegin = value
                }).catch(err => {
                    Utils.Toast.ToastModal('error', 'top', 'Fail', `You have saved your education fail, error: ${err}`, 3000)
                })
        }
    }

    const onPressLocation = () => {
        navigation.navigate(Const.NameScreens.EditLocation)
    }

    const removeItemInDataPhotos = (index) => {
        const dataTemp = [...dataPhotos]
        dataTemp[index] = { id: dataTemp[index].id }
        setDataPhotos(dataTemp)
    }

    const onPressRemoveImage = (index) => {
        setIdRemoving(index)
        const { id } = dataPhotos[index]
        const params = {
            idUser,
            token,
            idPhoto: id,
        }
        Api.RequestApi.removePhotosApiRequest(params)
            .then(res => {
                removeItemInDataPhotos(index)
            })
            .catch(err => console.log(err))
            .finally(() => setIdRemoving(null))
    }

    return (
        <MyProfile
            t={t}
            onPressDrinking={onPressDrinking}
            onPressSmoking={onPressSmoking}
            onPressBack={onPressBack}
            data={dataProfile}
            dataPhotos={dataPhotos}
            dataInterest={dataInterest}
            onPressInterest={onPressInterest}
            onPressGender={onPressGender}
            onPressLocation={onPressLocation}
            onPressReligious={onPressReligious}
            onPressEthnicity={onPressEthnicity}
            onPressKids={onPressKids}
            onPressAddImage={onPressAddImage}
            onUploadPhoto={onUploadPhoto}
            onTakePhoto={onTakePhoto}
            ref={refSlideModal}
            indexLoading={indexLoading}
            idRemoving={idRemoving}
            onBlurTextExpand={onBlurTextExpand}
            onBlurTextInputName={onBlurTextInputName}
            onBlurTextInputPhone={onBlurTextInputPhone}
            onBlurTextInputJob={onBlurTextInputJob}
            onBlurTextInputWorkAt={onBlurTextInputWorkAt}
            onBlurTextInputEducation={onBlurTextInputEducation}
            onPressRemoveImage={onPressRemoveImage}
            // dateBegin={new Date('09/16/1999')}
            pickDate={pickDate}
            jobBegin={jobBegin}
            gender={genderBegin}
            drinking={drinkingBegin}
            kids={kidsBegin}
            religion={religionBegin}
            ethnicity={ethnicityBegin}
            smoking={smokingBegin}
            location={locationBegin}
        />
    )
}

export default withTranslation()(MyProfileController)
