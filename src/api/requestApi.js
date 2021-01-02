import {
    URL_GET_IMAGE_SWIPE, URL_POST_LIKE_IMAGE_SWIPE, URL_GET_MESSAGES,
    URL_GET_USER_DETAIL, URL_GET_PROFILE, URL_PUT_PROFILE, URL_POST_PHOTOS,
    URL_GET_USER_LIKED_ME, URL_GET_MESSAGES_CONVERSATION, URL_POST_MESSAGES_CONVERSATION,
    URL_POST_REPORT, URL_GET_TOP_PICK, URL_GET_USER_MATCHED_ME, URL_GET_INTERESTS, URL_GET_LOCATION_DETAIL,
    URL_REMOVE_PHOTOS, URL_POST_FORGOT_PASSWORD, URL_SIGN_UP_EMAIL, URL_PUSH_FIREBASE_MESSAGES,
    URL_POST_FCM_TOKEN, URL_POST_DELETE_FCM_TOKEN
} from './url'
import axios from 'axios';
import Const from '/src/const'

const getAxios = (token) => {
    const client = axios.create({
        headers: {
            Accept: 'application/json'
        },
    })
    if (token !== undefined) {
        client.defaults.headers.common.Authorization = token
    }
    return client
}

export const postRequestApi = async (url, body) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

export const postLikeImageSwipe = async (params) => {
    const { idLiker, idLiked, token } = params
    const Url = URL_POST_LIKE_IMAGE_SWIPE + `/${idLiker}/likes/${idLiked}`
    const client = getAxios('Bearer ' + token)
    return client.post(Url)
}

export const signUpEmail = async (params) => {
    const { email, confirmPassword, password, name } = params
    const Url = URL_SIGN_UP_EMAIL
    const client = getAxios()
    return client.post(Url, {
        email: email.toLowerCase(),
        confirmPassword: confirmPassword,
        password: password,
        name: name,
    })
}

//TODO: fix gender
export const getRequestImageSwipe = async (params) => {
    const { gender, pageNumber, pageSize, token, maxAge, maxDistance } = params
    const Url = URL_GET_IMAGE_SWIPE + `?pageNumber=${pageNumber}&pageSize=${pageSize}&forCards=true&gender=${gender}&maxAge=${maxAge}&maxDistance=${maxDistance}`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}

export const getMessagesApiRequest = async (params) => {
    const { id, pageSize, pageNumber, token } = params
    const Url = URL_GET_MESSAGES + `/${id}/messages?pageSize=${pageSize}&pageNumber=${pageNumber}&messageContainer=any`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}

export const getUserDetailApiRequest = async (params) => {
    const { id, token } = params
    const Url = URL_GET_USER_DETAIL + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}

export const postMarkMessagesApiRequest = async (params) => {
    const { idUser, idMessages, token } = params
    const Url = URL_GET_USER_DETAIL + `/${idUser}/messages/${idMessages}/read`
    const client = getAxios('Bearer ' + token)
    return client.post(Url)
}

export const getProfileApiRequest = async (params) => {
    const { id, token } = params
    const Url = URL_GET_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}

export const putProfileReligiousApiRequest = async (params) => {
    const { id, token, religion } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "religion": religion
    })
}

export const putProfileLocationApiRequest = async (params) => {
    const { id, token, location, latitude, longitude } = params
    console.log(`longitude 123: ${longitude}`);
    console.log(`latitude 123: ${latitude}`);
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        location: location,
        latitude: latitude,
        longitude: longitude
    })
}

export const putProfileEthnicityApiRequest = async (params) => {
    const { id, token, ethnicity } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "ethnicity": ethnicity
    })
}

export const putProfileBirthdayApiRequest = async (params) => {
    const { id, token, dateOfBirth } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "dateOfBirth": dateOfBirth
    })
}

export const putProfileGenderApiRequest = async (params) => {
    const { id, token, gender } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "gender": gender
    })
}

export const putProfileKidsApiRequest = async (params) => {
    const { id, token, children } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "children": children
    })
}

export const putProfileFamilyPlanApiRequest = async (params) => {
    const { id, token, familyPlan } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        familyPlan: familyPlan
    })
}

export const putPhotosApiRequest = async (params) => {
    const { id, token, publicId, url } = params
    const Url = URL_POST_PHOTOS + `/${id}/photos/url`
    const client = getAxios('Bearer ' + token)
    return client.post(Url, {
        "url": url,
        "publicId": publicId
    })
}

export const putDrinkingsApiRequest = async (params) => {
    const { id, token, drinking } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "drinking": drinking,
    })
}

export const putSmokingApiRequest = async (params) => {
    const { id, token, smoking } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "smoking": smoking,
    })
}

export const putPhoneApiRequest = async (params) => {
    const { id, token, phone } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "phone": phone,
    })
}

export const putBioApiRequest = async (params) => {
    const { id, token, bio } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "bio": bio,
    })
}

export const putJobApiRequest = async (params) => {
    const { id, token, job } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "jobTitle": job,
    })
}

export const putWorkAtApiRequest = async (params) => {
    const { id, token, company } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "company": company,
    })
}

export const putEducationApiRequest = async (params) => {
    const { id, token, school } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "school": school,
    })
}


export const putNameApiRequest = async (params) => {
    const { id, token, name } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "name": name,
    })
}

export const getUserLikeMeApiRequest = async (params) => {
    const { token, pageNumber, pageSize, likers } = params
    const Url = URL_GET_USER_LIKED_ME + `?pageNumber=${pageNumber}&pageSize=${pageSize}&likers=${likers}`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}

export const getMessagesConversationApiRequest = async (params) => {
    const { token, idUser, idPeople, pageSize, pageNumber } = params
    const Url = URL_GET_MESSAGES_CONVERSATION + `/${idUser}/messages/thread/${idPeople}?pageSize=${pageSize}&pageNumber=${pageNumber}`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}

export const postMessagesConversationApiRequest = async (params) => {
    const { token, idSender, idReceipt, content, type } = params
    const Url = URL_POST_MESSAGES_CONVERSATION + `/${idSender}/messages`
    const client = getAxios('Bearer ' + token)
    return client.post(Url, {
        "recipientId": idReceipt,
        "content": content,
        "type": type
    })
}

export const postReportApiRequest = async (params) => {
    const { token, idUser, userIdReported, content } = params
    const Url = URL_POST_REPORT + `/${idUser}/reports`
    const client = getAxios('Bearer ' + token)
    return client.post(Url, {
        "userId": userIdReported,
        "reportedFor": content,
    })
}

export const getTopPickApiRequest = async (params) => {
    const { token, pageNumber, pageSize, gender, minAge, maxAge, topPicks } = params
    const Url = URL_GET_TOP_PICK +
        `?pageNumber=${pageNumber}&pageSize=${pageSize}&gender=${gender}&minAge=${minAge}&maxAge=${maxAge}&topPicks=${topPicks}`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}

export const getMatchedMeApiRequest = async (params) => {
    const { token, pageNumber, pageSize, isMatched } = params
    const Url = URL_GET_USER_MATCHED_ME +
        `?pageNumber=${pageNumber}&pageSize=${pageSize}&isMatched=${isMatched}`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}

export const getInterestApiRequest = async (params) => {
    const { token, id } = params
    const Url = URL_GET_INTERESTS +
        `/${id}/interests`
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}
export const postInterestApiRequest = async (params) => {
    const { token, id, idInterest } = params
    const Url = URL_GET_INTERESTS +
        `/${id}/interests/${idInterest}`
    const client = getAxios('Bearer ' + token)
    return client.post(Url)
}

export const deleteInterestApiRequest = async (params) => {
    const { token, id, idInterest } = params
    const Url = URL_GET_INTERESTS +
        `/${id}/interests/${idInterest}`
    const client = getAxios('Bearer ' + token)
    return client.delete(Url)
}

export const getLocationDetailApiRequest = async (params) => {
    const { latitude, longitude } = params
    const access_key = Const.PositionStackKey.ACCESS_KEY
    const Url = URL_GET_LOCATION_DETAIL + `?access_key=${access_key}&query=${latitude},${longitude}&output=json`
    return axios.get(Url)
}

export const removePhotosApiRequest = async (params) => {
    const { idUser, idPhoto, token } = params
    const Url = URL_REMOVE_PHOTOS + `/${idUser}/photos/${idPhoto}`
    const client = getAxios('Bearer ' + token)
    return client.delete(Url)
}

export const postForgotPasswordApiRequest = async (params) => {
    const { email } = params
    const Url = URL_POST_FORGOT_PASSWORD
    const client = getAxios()
    return client.post(Url, {
        email: email
    })
}

export const postFcmTokenApiRequest = async (params) => {
    const { token, tokenFcm } = params
    const Url = URL_POST_FCM_TOKEN
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        token: tokenFcm
    })
}

export const postFirebaseMessage = async (params) => {
    const { fcmToken, bodyNotification, titleNotification, bodyData, titleData } = params
    const body = {
        "to": fcmToken,
        "notification": {
            "body": bodyNotification,
            "title": titleNotification,
            "content_available": true,
            "priority": "high"
        },
        "data": {
            "body": bodyData,
            "title": titleData,
            "content_available": true,
            "priority": "high"
        }
    }
    const Url = URL_PUSH_FIREBASE_MESSAGES
    const client = getAxios('key=' + Const.FcmKey.FCM_KEY)
    client.post(Url, body)
        .then(res => console.log('res', res))
        .catch(err => console.log(err))
}

export const postDeleteFcmTokenApiRequest = async (params) => {
    const { token, fcmToken } = params
    const Url = URL_POST_DELETE_FCM_TOKEN
    const client = getAxios('Bearer ' + token)
    return client.post(Url, {
        token: fcmToken
    })
}