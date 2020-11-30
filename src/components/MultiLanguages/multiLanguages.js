import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'
import ItemListCountry from '/src/components/UI/itemListCountry'
import PropTypes from 'prop-types'
import SpinnerLoading from '/src/components/UI/spinnerLoading'

import { withTranslation } from 'react-i18next'
import Const from '/src/const'

function MultiLanguages(props) {
    const { t, onPressCountry, code, isLoading, onPressBack } = props
    const [idSelect, setIdSelect] = useState(() => {
        if (code === 'vi') return "1"
        else return "2"
    })

    const onPressItem = (item, index) => {
        onPressCountry && onPressCountry(item)
        const { id } = item
        setIdSelect(id)
    }

    const keyExtractor = useCallback(({ id }) => id, [])

    const renderItem = ({ item }) => {
        let isCheck = false
        if (idSelect === item.id) {
            isCheck = true
        }
        return <ItemListCountry item={item}
            code={code}
            isCheck={isCheck}
            onPressItem={onPressItem}
        />
    }

    return (
        <View style={{ flex: 1 }}>
            <SpinnerLoading isLoading={isLoading}
                style={{ width: 100, height: 100 }}
                source={require('/src/assets/lotties/8734-loading.json')} />
            <TouchableOpacity style={styles.btnIcon}
                onPress={() => onPressBack && onPressBack()}
            >
                <Icon
                    name="arrow-back-outline"
                    color={Themes.Colors.PINK_DARK}
                    size={Themes.Const.SIZE_ICON} />
            </TouchableOpacity>
            <Text style={styles.txtSelect}>{t("Select language")}</Text>
            <FlatList
                style={styles.listCountry}
                data={Const.Languages.languageCountry}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

MultiLanguages.propTypes = {
    onPressCountry: PropTypes.func,
    code: PropTypes.string,
}

MultiLanguages.defaultProps = {
    code: null
}


const styles = StyleSheet.create({
    txtSelect: {
        ...Themes.Styles.txtTitle,
        marginLeft: Themes.Const.MARGIN_HORIZONTAL_INPUT,
        marginBottom: Themes.Const.MARGIN_TOP_V1
    },
    btnIcon: {
        ...Themes.Styles.IconBack
    },
    listCountry: {
        marginHorizontal: Themes.Const.MARGIN_HORIZONTAL_INPUT,
    }
})

export default withTranslation()(MultiLanguages)