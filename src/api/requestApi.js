import {
    URL_GET_IMAGE_SWIPE, URL_POST_LIKE_IMAGE_SWIPE, URL_GET_MESSAGES,
    URL_GET_USER_DETAIL, URL_GET_PROFILE, URL_PUT_PROFILE, URL_POST_PHOTOS
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