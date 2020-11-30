import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CircleAvatarActive from '/src/components/UI/circleAvatarActive'
import Utils from '/src/utils'
import Themes from '/src/themes'
import Const from '/src/const'
export default function itemMessages(props) {
    const { item, onPressMessages, idUser } = props
    const { name, dateRead, content, messageSent, recipientId } = item

    const [dateMess, setDateMess] = useState(() => {
        const date = new Date(messageSent)
        const today = new Date()
        if (date.getUTCFullYear() === today.getUTCFullYear()) {
            if (date.getUTCMonth() === today.getUTCMonth()) {
                if (date.getUTCDate() === today.getUTCDate()) {
                    return Utils.Format.formatDateUTC(date, Const.DateFormat.TIME)
                }
                else {
                    return Utils.Format.formatDateUTC(date, Const.DateFormat.MONTH_DAY)
                }
            } else {
                return Utils.Format.formatDateUTC(date, Const.DateFormat.MONTH_DAY)
            }
        } else {
            return Utils.Format.formatDateUTC(date, Const.DateFormat.DATE_LONG)
        }
    });

    const checkIsRead = () => {
        if (dateRead !== null || recipientId !== idUser) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => onPressMessages && onPressMessages(item)}
        >
            <View style={styles.containerAvatar}>
                <CircleAvatarActive
                    item={item} sizeAvatar={70} sizeActive={3} />
            </View>
            <View style={{ flex: 4, marginVertical: 15 }}>
                <View style={styles.containerContent}>
                    <Text style={[styles.txtName,
                    checkIsRead()
                        ? styles.txtIsRead
                        : styles.txtNotIsRead]}
                    >{name}</Text>
                    <Text style={[styles.txtContent,
                    checkIsRead()
                        ? styles.txtIsRead
                        : styles.txtNotIsRead]}>{dateMess}</Text>
                </View>
                <View style={styles.containerMessages}>
                    <Text style={[styles.txtMessages,
                    checkIsRead()
                        ? styles.txtIsRead
                        : styles.txtNotIsRead]}
                    >{content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtContent: {
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontThinDefault,
    },
    containerMessages: {
        flex: 1, justifyContent: 'center',
    },
    txtNotIsRead: {
    },
    txtIsRead: {
        color: Themes.Colors.GRAY_BRIGHT_I,
    },
    txtMessages: {
        fontSize: 13,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    txtName: {
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontBoldExtra,
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    containerAvatar: {
        flex: 1
    },
    container: {
        marginTop: 0,
        flexDirection: 'row', marginVertical: Themes.Const.MARGIN_AVATAR, width: '100%',
        marginLeft: Themes.Const.MARGIN_AVATAR
    },
})