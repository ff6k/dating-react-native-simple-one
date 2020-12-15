import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import HeaderSave from '/src/components/UI/headerSave'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'

export default function editContentList(props) {
    const { onPressBack, data, title, onPressSave, onPressGetItem, isChange, indexBegin, onChangeDataItemClick } = props

    const [idSelected, setIdSelected] = useState(indexBegin !== -1 ? data[indexBegin].id : null)

    const onPressItem = (item) => {
        const { id } = item
        setIdSelected(id)
        onPressGetItem && onPressGetItem(item)
    }

    useEffect(() => {
        onChangeDataItemClick && onChangeDataItemClick(idSelected)
    })

    const ItemGender = ({ item, index }) => {
        const { label, id } = item
        let isCheck = false
        if (id === idSelected) {
            isCheck = true
        }

        return (
            <TouchableOpacity style={styles.containContent}
                onPress={() => onPressItem(item)}>
                <Text style={styles.txtContent}>{label}</Text>
                {
                    isCheck && <Icon
                        name={'checkmark'}
                        size={25}
                        color={Themes.Colors.PINK_DARK}
                    />
                }
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <HeaderSave
                title={title}
                onPressBack={onPressBack}
                onPressSave={onPressSave}
                isChange={isChange}
            />
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={data}
                style={styles.flatList}
                renderItem={ItemGender}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatList: {
        marginTop: 20
    },
    btnBottom: {
        // ...Themes.Styles.shadowButton
    },
    containFooter: {
    },
    containContent: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 1.3
    },
    txtContent: {
        fontSize: Themes.Const.SIZE_TEXT_ITEM,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontMediumDefault
    }
})
