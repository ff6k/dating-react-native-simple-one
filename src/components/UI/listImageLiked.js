import React from 'react'
import { StyleSheet, Text, Image, FlatList, View, TouchableOpacity } from 'react-native'
import Const from '/src/const'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
import FontAwesomeIcons from 'react-native-vector-icons/SimpleLineIcons'

const SIZE_ICON = 18
const renderItemLiked = (item, index, onPressUserLikedMe) => {
    const { photoUrl, name, isMale } = item
    return (
        <TouchableOpacity style={{ marginTop: 7 }}
            onPress={() => onPressUserLikedMe && onPressUserLikedMe(item)}>
            <Image source={{ uri: photoUrl }} style={{
                width: Const.Common.deviceWidth / 2 - 10,
                height: Const.Common.deviceWidth / 2 + 30,
                borderRadius: 10
            }} />
            <View style={styles.containBottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 3 }}>
                    {!isMale ? <FontAwesomeIcons name={"symbol-female"} size={SIZE_ICON} color={Themes.Colors.PINK_DARK} />
                        : <FontAwesomeIcons name={"symbol-male"} size={SIZE_ICON} color={Themes.Colors.PINK_DARK} />}
                    <Text style={styles.txtName}>{name}</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 6, borderRadius: 20 }}>
                    <Icon size={20} color={Themes.Colors.GREEN_DARK} name={'heart'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const renderBottom = () => {
    return (
        <View style={styles.bottomEmpty}></View>
    )
}

const renderHeader = (title) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
            <Text style={{ fontFamily: Themes.FontFamily.FontMediumDefault, fontSize: 17, textAlign: 'center', marginHorizontal: 50 }}>
                {title}</Text>
        </View>
    )
}
export default function listImageLiked(props) {
    const { data, title, onPressUserLikedMe } = props
    return (
        <FlatList
            style={{ flex: 1 }}
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => renderItemLiked(item, index, onPressUserLikedMe)}
            numColumns={2}
            ListFooterComponent={renderBottom}
            ListHeaderComponent={renderHeader(title)}
        />
    )
}

const styles = StyleSheet.create({
    bottomEmpty: {
        height: 10
    },
    containBottom: {
        position: 'absolute', bottom: 5, left: 5, flexDirection: 'row', alignItems: 'center', width: Const.Common.deviceWidth / 2 - 20, justifyContent: 'space-between'
    },
    txtName: {
        fontFamily: Themes.FontFamily.FontBoldExtra, color: 'white', marginLeft: 5,
        width: '70%',
        marginLeft: 6
    }
})
