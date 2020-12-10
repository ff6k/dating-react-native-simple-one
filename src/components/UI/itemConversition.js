import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Image from 'react-native-fast-image'
import Themes from '/src/themes'
import Const from '/src/const'
const width_screen = Const.Common.deviceWidth
export default function itemConversition(props) {
    const { item, idUser, dataMessages, index } = props
    const { senderPhotoUrl, content, senderId, id } = item
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
                    <Text style={[styles.txtMessage, width !== null && { width: width_screen - 110 }]}>{content}</Text>
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
                        <Text style={styles.txtMessage}>{content}</Text>
                    </View>
                    {isShowImage && <Image
                        style={[styles.image, { marginRight: 12 }]}
                        source={{ uri: senderPhotoUrl }}
                    />}
                </View>}
        </View >

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
