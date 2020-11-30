import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Themes from '/src/themes'
import AvatarActive from '/src/components/UI/avatarActive'
import Icon from '/src/components/UI/icon'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const item = {
    uriImage: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg",
    isActive: true,
    name: "Long"
}
export default function headerApp(props) {
    const { onPressDates, onPressMenu, onPressBack } = props
    return (
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => onPressBack && onPressBack()}
                >
                    <Icon
                        name={'arrow-ios-back-outline'}
                        size={Themes.Const.SIZE_ICON}
                        color={Themes.Colors.PINK}
                    />
                </TouchableOpacity>
                <AvatarActive item={item} sizeAvatar={50} sizeActive={0} isRow={true} />
            </View>
            <View style={styles.containerButtonHeader}>
                {/* <TouchableOpacity onPress={() => onPressDates && onPressDates()}>
                    <MaterialCommunityIcons name="calendar-heart" size={Themes.Const.SIZE_ICON - 10}
                        color={Themes.Colors.PINK} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => onPressMenu && onPressMenu()}>
                    <Icon name="menu" size={Themes.Const.SIZE_ICON - 6}
                        color={Themes.Colors.PINK}></Icon>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarActive: {
        width: 50
    },
    containerButtonHeader: {
        marginRight: Themes.Const.MARGIN, flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center',
    },
    container: {
        ...Themes.Styles.shadowButton,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '8%'
    }
})
