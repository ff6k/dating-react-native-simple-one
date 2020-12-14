import {
    URL_GET_IMAGE_SWIPE, URL_POST_LIKE_IMAGE_SWIPE, URL_GET_MESSAGES,
    URL_GET_USER_DETAIL, URL_GET_PROFILE, URL_PUT_PROFILE, URL_POST_PHOTOS,
    URL_GET_USER_LIKED_ME, URL_GET_MESSAGES_CONVERSATION, URL_POST_MESSAGES_CONVERSATION,
    URL_POST_REPORT, URL_GET_TOP_PICK, URL_GET_USER_MATCHED_ME
} from './url'
import axios from 'axios';

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


export const getRequestImageSwipe = async (params) => {
    const { gender, pageNumber, pageSize, token } = params
    const Url = URL_GET_IMAGE_SWIPE + `?gender=${gender}&pageNumber=${pageNumber}&pageSize=${pageSize}`
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
    console.log(`token: ${token}`);
    const Url = URL_GET_PROFILE + `/${id}`
    console.log(`Url: ${Url}`);
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
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

export const putBioApiRequest = async (params) => {
    const { id, token, bio } = params
    const Url = URL_PUT_PROFILE + `/${id}`
    const client = getAxios('Bearer ' + token)
    return client.put(Url, {
        "bio": bio,
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
    console.log(`Url: ${Url}`);
    const client = getAxios('Bearer ' + token)
    return client.get(Url)
}