import React, { useCallback, useEffect, useState, Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View, TextInput } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import PreferNotSay from '/src/components/UI/preferNotSay'
import ItemList from '/src/components/UI/itemList'
import PropTypes from 'prop-types'
import ButtonBack from '/src/components/UI/buttonBack'
const ID_CHECK = -1

const FooterComponent = () => {
    return (
        <View style={{ height: 20 }}></View>
    )
}
export default function myVirtues(props) {
    const { dataList, onPressBack } = props;
    const [idSelect, setIdSelect] = useState(null)


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
    }

    return (
        <View style={{ flex: 1 }}>
            <ButtonBack title={'My Religious'}
                onPress={onPressBack}
            />
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
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
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
