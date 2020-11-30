import React, { useCallback, useEffect, useState, Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View, TextInput } from 'react-native'
import ButtonNext from '/src/components/UI/buttonNext'
import Themes from '/src/themes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Const from '/src/const'
import PreferNotSay from '/src/components/UI/preferNotSay'
import ItemList from '/src/components/UI/itemList'
import PropTypes from 'prop-types'

const ID_CHECK = -1

const FooterComponent = () => {
    return (
        <View style={{ height: 20 }}></View>
    )
}
export default function myVirtues(props) {
    const { title, dataList, t, onPressNext } = props;
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

    const onCheckPrefer = () => {
        setIdSelect(ID_CHECK)
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnIcon}>
                <Ionicons name="arrow-back-outline" color={Themes.Colors.PINK_DARK} size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSkip}>
                <Text style={styles.txtSkip}>{t("Skip")}</Text>
            </TouchableOpacity>
            <View style={styles.containerContent}>
                <Text style={styles.txtTitle}>{t("My Virtues")}</Text>
                <Text style={styles.txtTitle2}>{title}</Text>
                <FlatList
                    style={styles.listReligious}
                    data={dataList}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    ListFooterComponent={FooterComponent}
                />
            </View>
            <ButtonNext isGradient={idSelect !== null ? true : false}
                onPress={() => idSelect !== null && onPressNext && onPressNext()}
            />
            <PreferNotSay onCheck={onCheckPrefer}
                isCheck={idSelect === ID_CHECK ? true : false}
                t={t} />
        </View>
    )
}

myVirtues.propTypes = {
    title: PropTypes.string,
    dataList: PropTypes.array,
    t: PropTypes.func.isRequired,
}

myVirtues.defaultProps = {
    title: '',
    dataList: null
}

const styles = StyleSheet.create({
    listReligious: {
        height: Themes.Const.SIZE_CONTENT_INSIDE,
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
