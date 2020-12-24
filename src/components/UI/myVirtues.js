import React, { useCallback, useEffect, useState, Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View, TextInput } from 'react-native'
import Themes from '/src/themes'
import ItemList from '/src/components/UI/itemList'
import PropTypes from 'prop-types'
import ButtonBack from '/src/components/UI/buttonBack'
const FooterComponent = () => {
    return (
        <View style={{ height: 140 }}></View>
    )
}
export default function myVirtues(props) {
    const { dataList, onPressBack, title, content, detail, onPressGetItem, itemBegin } = props;
    const [idSelect, setIdSelect] = useState(() => {
        if (itemBegin) {
            if (dataList.length > 0) {
                const item = dataList.find(e => e.name == itemBegin)
                return item.id
            }
        }
        return null
    })

    const renderItem = ({ item }) => {
        let isCheck = false
        if (idSelect === item.id) {
            isCheck = true
        }
        return <ItemList
            item={item}
            isCheck={isCheck}
            onPressItem={onPressItem}
        />
    }

    const keyExtractor = useCallback((item) => item.id.toString(), [])

    const onPressItem = (item) => {
        const { id } = item
        setIdSelect(id)
        onPressGetItem && onPressGetItem(item)
    }

    return (
        <View style={{ flex: 1 }}>
            <ButtonBack title={title}
                onPress={onPressBack}
            />
            <Text style={styles.txtDetail}>{detail}</Text>
            <View style={styles.containContent}>
                <Text style={styles.txtContent}>{content}</Text>
            </View>
            <View style={styles.containerContent}>
                <FlatList
                    style={styles.listReligious}
                    data={dataList}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    ListFooterComponent={FooterComponent}
                />
            </View>
        </View>
    )
}

myVirtues.propTypes = {
    dataList: PropTypes.array,
}

myVirtues.defaultProps = {
    dataList: null
}

const styles = StyleSheet.create({
    txtContent: {
        ...Themes.Styles.txtContentInfo
    },
    containContent: {
        ...Themes.Styles.containContentInfo
    },
    txtDetail: {
        ...Themes.Styles.txtDetailInfo
    },
    listReligious: {
        // height: Themes.Const.SIZE_CONTENT_INSIDE,
    },
    txtTitle: {
        ...Themes.Styles.txtTitle
    },
    txtTitle2: {
        ...Themes.Styles.txtTitle2
    },
    containerContent: {
    },
    txtSkip: {
        fontSize: 20,
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    btnSkip: {
        ...Themes.Styles.IconSkip
    }
})
