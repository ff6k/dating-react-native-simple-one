import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import CircleAvatarActive from '/src/components/UI/circleAvatarActive'
export default function avatarActive(props) {
    const { item, sizeAvatar, sizeActive, isRow, isShowActive, onPressAvatar } = props
    let nameUser
    if (item !== undefined) {
        const { name } = item
        nameUser = name
    }
    return (
        <TouchableOpacity
            style={[styles.containerActiveChats, isRow && { flexDirection: 'row' }]}
            onPress={() => onPressAvatar && onPressAvatar(item)}
        >
            <CircleAvatarActive sizeActive={sizeActive} sizeAvatar={sizeAvatar} dataHeader={item} isShowActive={isShowActive} />
            <View style={[isRow && styles.containerChat, !isShowActive && { justifyContent: 'center' }]}>
                <Text style={[styles.txtName, { width: sizeAvatar },
                isRow && styles.txtNameRow]}>
                    {nameUser}</Text>
                {isRow && isShowActive && <Text style={styles.txtActiveNow}>
                    Active Now</Text>}
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtActiveNow: {
        fontSize: 13, alignSelf: 'center', color: Themes.Colors.GRAY_BRIGHT,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    txtNameRow: {
        textAlign: 'left', fontSize: 16,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        // width: 200
        width: '100%',
    },
    containerChat: {
        justifyContent: 'space-between', paddingLeft: 10
    },
    txtName: {
        fontSize: 9, textAlign: 'center',
        fontFamily: Themes.FontFamily.FontMediumDefault
    },

    containerActiveChats: {
        marginRight: Themes.Const.MARGIN_AVATAR,
        marginVertical: 20,
        justifyContent: 'center',
    },

})
