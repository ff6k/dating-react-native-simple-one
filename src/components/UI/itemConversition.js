import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Image from 'react-native-fast-image'
import Themes from '/src/themes'
import Utils from '/src/utils'
import Const from '/src/const'
import moment from 'moment'
const getTime = (date) => {
    console.log(`date: ${date}`);

    // const test = new Date('2020-12-12T10:54:59.335153+07:00')


    const dateCheck = new Date(date)

    const tt = Utils.Format.formatDate(dateCheck, 'LT')
    console.log(`tt: ${tt}`);

    const now = new Date()
    const dn = now.getUTCDate()
    const mn = now.getUTCMonth()
    const yn = now.getUTCFullYear()
    const hn = now.getUTCHours()
    const minn = now.getUTCMinutes()
    const wn = moment(now).weeks()

    const d = dateCheck.getUTCDate()
    const m = dateCheck.getUTCMonth()
    const y = dateCheck.getUTCFullYear()
    const h = dateCheck.getUTCHours()
    const min = dateCheck.getUTCMinutes()
    const w = moment(dateCheck).weeks()

    let flag = false
    // if (dn == d && mn == m && yn == y && hn == h && minn - min > 10) {
    //     if (!flag) {
    //         return Utils.Format.formatDate(dateCheck, 'LT')
    //     }
    //     else {
    //         return
    //     }
    // }

    // if (flag) {
    //     flag = false
    // }

    if (mn == m && yn == y && wn == w) {
        if (!flag) {
            return Utils.Format.formatDate(dateCheck, 'ddd') + " AT " + Utils.Format.formatDate(dateCheck, 'LT')
        }
        else {
            return
        }
    }

    // if (flag) {
    //     flag = false
    // }

    // if (mn == m && yn == y) {
    //     if (!flag) {
    //         return Utils.Format.formatDate(dateCheck, 'ddd DD') + " AT " + Utils.Format.formatDate(dateCheck, 'LT')
    //     }
    //     else {
    //         return
    //     }
    // }

    // if (flag) {
    //     flag = false
    // }

    // if (yn == y) {
    //     if (!flag) {
    //         return Utils.Format.formatDate(dateCheck, 'MMM DD') + " AT " + Utils.Format.formatDate(dateCheck, 'LT')
    //     }
    //     else {
    //         return
    //     }
    // }
    //         return Utils.Format.formatDate(dateCheck, 'LT')
    //         return Utils.Format.formatDate(dateCheck, 'ddd') + " AT " + Utils.Format.formatDate(dateCheck, 'LT')
    //         return Utils.Format.formatDate(dateCheck, 'ddd DD') + " AT " + Utils.Format.formatDate(dateCheck, 'LT')
    //         return Utils.Format.formatDate(dateCheck, 'MMM DD') + " AT " + Utils.Format.formatDate(dateCheck, 'LT')
    // return Utils.Format.formatDate(dateCheck, 'MMM DD, YYYY') + " AT " + Utils.Format.formatDate(dateCheck, 'LT')
}

const width_screen = Const.Common.deviceWidth
export default function itemConversition(props) {
    const { item, idUser, dataMessages, index } = props
    // console.log(`item: ${JSON.stringify(item)}`);
    const { senderPhotoUrl, content, senderId, type } = item
    // const dt = dataMessages.filter(e => e.id === id)
    // if (dt > 0) {
    //     return null
    // }

    const [width, setWidth] = useState(null)
    let stylesMess
    let isShowImage = false
    const idPre = index - 1
    const idNex = index + 1
    const length = dataMessages.length
    if (index === 0) {
        if (index + 1 === length) {
            stylesMess = styles.containTxtMessagesAlone
            isShowImage = true
        }
        else {
            if (dataMessages[idNex].senderId === dataMessages[index].senderId) {
                stylesMess = senderId === idUser ? styles.containTxtMessagesHeaderTypeSender : styles.containTxtMessagesHeader
                isShowImage = true
            }
            else {
                stylesMess = styles.containTxtMessagesAlone
                isShowImage = true
            }
        }
    } else if (index > 0 && index < length - 1) {
        if (dataMessages[idPre].senderId === dataMessages[index].senderId && dataMessages[idNex].senderId === dataMessages[index].senderId) {
            stylesMess = senderId !== idUser ? styles.containTxtMessagesBetween : styles.containTxtMessagesBetweenTypeSender

            // stylesMess = styles.containTxtMessagesBetween
        }
        else if (dataMessages[idPre].senderId !== dataMessages[index].senderId && dataMessages[idNex].senderId === dataMessages[index].senderId) {
            stylesMess = senderId === idUser ? styles.containTxtMessagesHeaderTypeSender : styles.containTxtMessagesHeader
            isShowImage = true
        }
        else if (dataMessages[idPre].senderId === dataMessages[index].senderId && dataMessages[idNex].senderId !== dataMessages[index].senderId) {
            stylesMess = senderId === idUser ? styles.containTxtMessagesBottomTypeSender : styles.containTxtMessagesBottom
        }
        else {
            stylesMess = styles.containTxtMessagesAlone
            isShowImage = true
        }
    }
    else if (index === length - 1) {
        if (dataMessages[idPre].senderId === dataMessages[index].senderId) {
            stylesMess = senderId === idUser ? styles.containTxtMessagesBottomTypeSender : styles.containTxtMessagesBottom
        }
        else if (dataMessages[idPre].senderId !== dataMessages[index].senderId) {
            stylesMess = styles.containTxtMessagesAlone
            isShowImage = true
        }
    }

    return (
        <View>
            {/* <Text style={{
                alignSelf: 'center', marginVertical: 10, color: Themes.Colors.GRAY_BRIGHT_III,
                fontFamily: Themes.FontFamily.FontMediumDefault
            }}>{getTime(messageSent)}</Text> */}
            <View style={[
                senderId !== idUser
                    ? { flexWrap: 'wrap' }
                    : { flexWrap: 'wrap-reverse' }
            ]
            }
            >
                {senderId !== idUser ? <View style={[styles.containMessage]}>
                    {isShowImage && <Image
                        style={styles.image}
                        source={{ uri: senderPhotoUrl }}
                    />}
                    <View style={[stylesMess, !isShowImage ? { marginLeft: 45 + MARGIN_LEFT } : {
                        marginLeft: MARGIN_LEFT,
                    }, width !== null && { width: width }]}
                        onLayout={(event) => {
                            var { x, y, width, height } = event.nativeEvent.layout;
                            if (width > width_screen - 90) {
                                setWidth(width_screen - 90)
                            }
                        }}
                    >
                        {(type === 'Image' || type === 'Gif') && <Image source={{ uri: content }}
                            style={{ width: 150, height: 150 }}
                            resizeMode={'stretch'}
                        />}
                        {type === 'Text' && <Text style={[styles.txtMessage, width !== null && { width: width_screen - 110 }]}>{content}</Text>}
                    </View>
                </View> :
                    <View style={[styles.containMessage, width !== null && { width: width, marginRight: 50 }]}
                        onLayout={(event) => {
                            var { x, y, width, height } = event.nativeEvent.layout;
                            if (width > width_screen - 50) {
                                setWidth(width_screen - 50)
                            }
                        }}
                    >
                        <View style={[stylesMess, !isShowImage ? { marginRight: 40 + MARGIN_LEFT } : {},
                            width !== null && { width: width_screen - 120 }]}>
                            {(type === 'Image' || type === 'Gif') && <Image source={{ uri: content }}
                                style={{ width: 150, height: 150 }}
                                resizeMode={'stretch'}
                            />}
                            {type === 'Text' && <Text style={styles.txtMessage}>{content}</Text>}
                        </View>
                        {isShowImage && <Image
                            style={[styles.image, { marginRight: 12 }]}
                            source={{ uri: senderPhotoUrl }}
                        />}
                    </View>}
            </View>
        </View>
    )
}

const containTxt = {
    alignItems: 'center',
    padding: 10,
    backgroundColor: Themes.Colors.GRAY_BRIGHT_IV,
    // width: 300
}

const SIZE_IMAGE = 35
const SIZE_RADIUS = 15
const MARGIN_LEFT = 15
const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5
    },

    containTxtMessagesBetweenTypeSender: {
        ...containTxt,
        borderTopLeftRadius: SIZE_RADIUS,
        borderBottomLeftRadius: SIZE_RADIUS,
        marginLeft: MARGIN_LEFT,
        marginBottom: 2,
    },

    containTxtMessagesHeaderTypeSender: {
        ...containTxt,
        borderBottomLeftRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS,
        borderTopLeftRadius: SIZE_RADIUS,
        marginLeft: MARGIN_LEFT,
    },
    containTxtMessagesHeader: {
        ...containTxt,
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomLeftRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS,
        marginLeft: MARGIN_LEFT,
    },
    containTxtMessagesBottomTypeSender: {

        ...containTxt,
        borderTopLeftRadius: SIZE_RADIUS,
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomLeftRadius: SIZE_RADIUS,
        marginTop: 10,
        marginBottom: 2,
        marginLeft: MARGIN_LEFT,
    },
    containTxtMessagesBottom: {
        ...containTxt,
        borderTopLeftRadius: SIZE_RADIUS,
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS,
        marginTop: 10,
        marginBottom: 2,
        marginLeft: MARGIN_LEFT,

    },
    containTxtMessagesAlone: {
        ...containTxt,
        borderRadius: SIZE_RADIUS,
        marginBottom: 2,
        marginTop: 10,
    },
    containTxtMessagesBetween: {
        ...containTxt,
        borderTopRightRadius: SIZE_RADIUS,
        borderBottomRightRadius: SIZE_RADIUS,
        marginLeft: MARGIN_LEFT,
        marginBottom: 2,
    },
    image: {
        width: SIZE_IMAGE,
        height: SIZE_IMAGE,
        borderRadius: SIZE_IMAGE / 2,
        marginLeft: 10,
    },
    containMessage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtMessage: {
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontMediumDefault
    }
})
