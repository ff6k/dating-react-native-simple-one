import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Themes from '/src/themes'
import CircleAvatarActive from '/src/components/UI/circleAvatarActive'
export default function avatarActive(props) {
    const { item, sizeAvatar, sizeActive, isRow, isShowActive } = props
    return (
        <View
            style={[styles.containerActiveChats, isRow && { flexDirection: 'row' }]}
        >
            <CircleAvatarActive sizeActive={sizeActive} sizeAvatar={sizeAvatar} item={item} isShowActive={isShowActive} />
            <View style={isRow && styles.containerChat}>
                <Text style={[styles.txtName, { width: sizeAvatar },
                isRow && styles.txtNameRow]}>
                    {item.name}</Text>
                {isRow && <Text style={styles.txtActiveNow}>
                    Active Now</Text>}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    txtActiveNow: {
        fontSize: 13, alignSelf: 'center', color: Themes.Colors.GRAY_BRIGHT,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    txtNameRow: {
        textAlign: 'left', fontSize: 18,
        fontFamily: Themes.FontFamily.FontBoldSemi
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
