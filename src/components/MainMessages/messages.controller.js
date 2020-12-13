import React, { useEffect, useState } from 'react'
import Messages from './messages'
import Const from '/src/const'
import Api from '/src/api'
import { useSelector } from 'react-redux'
import { connectServer, listenerConnect } from '/src/configs/Signalr'
import Utils from '/src/utils'

let dataMessBegin
let isChange
let token
let idUser
const item = {
    uriImage: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg",
    isActive: true,
    name: "Long"
}
export default function MessagesController(props) {

    const { navigation, route } = props
    const dataStore = useSelector(state => state.login)
    const [dataMessages, setDataMessages] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const [isVisiblePhoto, setIsVisiblePhoto] = useState(false)
    const [error, setError] = useState('')
    const [maxPage, setMaxPage] = useState(null)
    const [isLoadingSend, setIsLoadingSend] = useState(false)
    const [isVisibleGif, setIsVisibleGif] = useState(false)
    const [isVisibleReport, setIsVisibleReport] = useState(false)
    // const [isConnected, setIsConnected] = useState(false)
    const [dataItem, setDataItem] = useState(() => {
        return route.params.item
    })
    const refModalSlide = React.createRef()
    // console.log(JSON.stringify(dataMessages))
    // const itemHeader = {
    //     uriImage: ,
    // isActive: true,
    // name: "Long"
    // }

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

    useEffect(() => {
        const params = route.params
        const { isMark } = params
        isChange = isMark
    }, [])

    const loadDataApi = (page) => {
        const { idPeople } = route.params
        // const { idPeople } = item
        const params = {
            idUser: idUser,
            idPeople: idPeople,
            pageNumber: page,
            pageSize: 20,
            token
        }

        getDataApi(params).then(res => {
            setDataMessages(res.data)
            if (dataMessBegin === undefined) {
                dataMessBegin = res.data
            }
        })
            .catch(err => console.log(err))
    }

    const loadDataMore = (page) => {
        // if (page < 20) {
        const { idPeople } = route.params
        // const { senderId } = dataItem
        setLoading(true)
        const params = {
            idUser: idUser,
            idPeople: idPeople,
            pageNumber: page,
            pageSize: 20,
            token
        }
        getDataApi(params).then(res => {
            const data = res.data
            if (data.length !== 0) { setDataMessages(temp => [...temp, ...data]) }
            else {
                setMaxPage(page)
            }
        })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
        // }
    }

    useEffect(() => {
        let isMounted = true;
        const _hubConnection = connectServer(token)
        listenerConnect(_hubConnection, Const.CodeListener.CODE_RECEIVE_MESSAGE, data => {
            if (isMounted) {
                setDataMessages(dataTemp => [data, ...dataTemp])
            };
        })
        return () => { isMounted = false };
    }, [])

    const postMarkMessages = async (params) => {
        return Api.RequestApi.postMarkMessagesApiRequest(params)
    }

    async function getDataApi(params) {
        return Api.RequestApi.getMessagesConversationApiRequest(params)
    }

    useEffect(() => {
        getDataStore()
        loadDataApi(pageNumber)
        // .finally(() => setIsLoading(false))
    }, [])

    const onPressBack = () => {
        if (isChange) {
            navigation.navigate(Const.NameScreens.Chats, true)
        } else {
            navigation.navigate(Const.NameScreens.Chats)
        }
    }

    const onPressMenu = () => {
        refModalSlide.current.open()
    }
    const handleLoadMore = () => {
        if (!loading) {
            if (maxPage === null) {
                const pageNext = pageNumber + 1
                if (pageNext !== pageNumber) {
                    setPageNumber(pageNext)
                    loadDataMore(pageNext)
                }
            }
            else {
                console.log('ok chua')
            }
        }
    }

    const pushDataMessages = (messages) => {
        setIsLoadingSend(true)
        // const { idPeople } = route.params

        // const params = {
        //     token: token,
        //     idSender: idUser,
        //     idReceipt: idPeople,
        //     content: messages,
        //     type: 'Text'
        // }
        handleDataImage(messages, 'Text')
        // saveMessageApi(params)
    }

    const onPressSend = (messages) => {
        if (messages !== '') {
            pushDataMessages(messages)
        }
        else {
            Utils.Toast.ToastShortTop('Please enter your massages 📝 !!')
        }
    }

    const onPressViewProfile = () => {
        const { idPeople } = route.params
        const item = { id: idPeople }
        refModalSlide.current.close()
        navigation.navigate(Const.NameScreens.ImageDetail, { item, isOffShowButton: false })
    }

    const onPressPhoto = () => {
        setIsVisiblePhoto(true)
    }


    const saveMessageApi = (params) => {
        Api.RequestApi.postMessagesConversationApiRequest(params)
            .then(res => {
                loadDataApi(1)
                setPageNumber(1)
                setMaxPage(null)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => setIsLoadingSend(false))
    }


    const handleDataImage = (content, type) => {
        const { idPeople } = route.params

        const params = {
            token: token,
            idSender: idUser,
            idReceipt: idPeople,
            content: content,
            type: type
        }
        saveMessageApi(params)
    }

    const savePhotoApi = (res) => {
        setIsLoadingSend(true)

        const { path, mime } = res
        const typeImage = mime.split('/')[1]
        const nameFile = new Date().getTime().toString() + `.${typeImage}`
        const dataImage = { uri: path, name: nameFile, type: mime }
        Api.CloudinaryApi.postImageApiRequest(dataImage)
            .then(res => res.json())
            .then(
                data => {
                    handleDataImage(data.url, 'Image')
                    // saveDataPhotoApi(data)
                }
            ).catch(err => console.log(err))
    }

    const onTakePhoto = () => {
        setIsVisiblePhoto(false)
        Utils.Images.openCameraCropImage()
            .then(res => savePhotoApi(res))
            .catch(err => console.log(err))
    }

    const onUploadPhoto = () => {
        setIsVisiblePhoto(false)
        Utils.Images.openPickerCropImage()
            .then(res => savePhotoApi(res))
            .catch(err => console.log(err))
    }

    const onPressGif = () => {
        setIsVisibleGif(true)
    }

    const getUriGif = (uriGif) => {
        setIsVisibleGif(false)
        setIsLoadingSend(true)
        handleDataImage(uriGif, 'Gif')
    }

    const onPressReport = () => {
        refModalSlide.current.close()
        setIsVisibleReport(true)
    }

    const onPressCloseModal = () => {
        setIsVisibleReport(false)
    }

    async function postReportApi(params) {
        return Api.RequestApi.postReportApiRequest(params)
    }

    const onPressPostData = (data) => {
        const { title, content } = data
        const { idPeople } = route.params
        // const { idPeople } = item
        const params = {
            idUser,
            userIdReported: idPeople,
            content: title + ": " + content,
            token
        }

        postReportApi(params).then(res => {
            Utils.Toast.ToastModal('success', 'top', 'Post Success',
                'Your report posted successfully, We will review immediately !!',
                3000
            )
        })
            .catch(err => {
                Utils.Toast.ToastModal('fail', 'top', 'Post fail',
                    'Your report posted fail, Please check and try again !!',
                    3000
                )
                console.log(err)
            })
            .finally(() => setIsVisibleReport(false))


    }
    return (
        <Messages
            onPressBack={onPressBack}
            dataMessages={dataMessages}
            idUser={idUser}
            ref={refModalSlide}
            onPressMenu={onPressMenu}
            handleLoadMore={handleLoadMore}
            loading={loading}
            dataHeader={dataItem}
            onPressSend={onPressSend}
            onPressViewProfile={onPressViewProfile}
            onPressPhoto={onPressPhoto}
            isVisiblePhoto={isVisiblePhoto}
            setIsVisiblePhoto={setIsVisiblePhoto}
            onTakePhoto={onTakePhoto}
            onUploadPhoto={onUploadPhoto}
            isLoadingSend={isLoadingSend}
            onPressGif={onPressGif}
            isVisibleGif={isVisibleGif}
            setIsVisibleGif={setIsVisibleGif}
            getUriGif={getUriGif}
            isVisibleReport={isVisibleReport}
            onPressReport={onPressReport}
            onPressCloseModal={onPressCloseModal}
            onPressPostData={onPressPostData}
        />
    )
}

