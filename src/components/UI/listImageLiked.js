import React from 'react'
import { StyleSheet, Text, Image, FlatList, View, TouchableOpacity } from 'react-native'
import Const from '/src/const'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
import FontAwesomeIcons from 'react-native-vector-icons/SimpleLineIcons'

const renderItemLiked = (item, index) => {
    const { uri, name, isLike, isMale } = item
    return (
        <View style={{ marginTop: 7 }}>
            <Image source={{ uri: uri }} style={{
                width: Const.Common.deviceWidth / 2 - 10,
                height: Const.Common.deviceWidth / 2 + 30,
                borderRadius: 10
            }} />
            <View style={{ position: 'absolute', bottom: 5, left: 5, flexDirection: 'row', alignItems: 'center', width: Const.Common.deviceWidth / 2 - 20, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {!isMale ? <FontAwesomeIcons name={"symbol-female"} size={18} color={Themes.Colors.PINK_DARK} />
                        : <FontAwesomeIcons name={"symbol-male"} size={18} color={Themes.Colors.PINK_DARK} />}
                    <Text style={{ fontFamily: Themes.FontFamily.FontBoldExtra, color: 'white', marginLeft: 5 }}>{name}</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 6, borderRadius: 20 }}>
                    {isLike ? <Icon size={20} color={Themes.Colors.GREEN_DARK} name={'heart'} />
                        : <Icon size={20} color={Themes.Colors.BLUE_DARK} name={'star'} />}
                </TouchableOpacity>
            </View>
        </View>
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
    const { data, title } = props
    return (
        <FlatList
            style={{ flex: 1 }}
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => renderItemLiked(item, index)}
            numColumns={2}
            ListFooterComponent={renderBottom}
            ListHeaderComponent={renderHeader(title)}
        />
    )
}

const styles = StyleSheet.create({
    bottomEmpty: {
        height: 10
    }
})
