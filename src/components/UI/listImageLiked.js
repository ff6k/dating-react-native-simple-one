import React from 'react'
import { StyleSheet, Text, Image, FlatList, View, TouchableOpacity } from 'react-native'
import Const from '/src/const'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
import FontAwesomeIcons from 'react-native-vector-icons/SimpleLineIcons'
import EmptyPerform from '/src/components/UI/emptyPerform'

const SIZE_ICON = 18
const renderItemLiked = (props, item, index) => {
    const { onPressUserLikedMe, onPressLoveStatus } = props
    const { photoUrl, name, isMale } = item
    return (
        <View>
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
                    <TouchableOpacity style={{ backgroundColor: 'white', padding: 6, borderRadius: 20 }}
                        onPress={() => onPressLoveStatus && onPressLoveStatus(item, index)}>
                        <Icon size={20} color={Themes.Colors.GREEN_DARK} name={'heart'} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
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

const renderEmpty = () => {
    return (
        <View style={{ width: '100%', height: 400, alignItems: 'center', justifyContent: 'center' }}>
            <EmptyPerform title={"Empty Likes"}
                source={require('/src/assets/images/my_heart.png')}
                description={"So Sad !! No One Like you =))"}
            />
        </View>

    )
}
export default function listImageLiked(props) {
    const { data, title } = props
    return (
        <FlatList
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => renderItemLiked(props, item, index)}
            numColumns={2}
            ListFooterComponent={renderBottom}
            ListHeaderComponent={renderHeader(title)}
            ListEmptyComponent={renderEmpty}
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
