import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'
export default function searchBar(props) {
    const { placeholder, style, onChangeInput } = props
    return (
        <View style={{ ...styles.container, ...style }}>
            <Icon color={Themes.Colors.PINK}
                size={30}
                name={"search-outline"}
                style={styles.iconSearch}
            />
            <TextInput
                onChangeText={(value) => onChangeInput(value)}
                placeholder={placeholder}
                style={styles.inpSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginRight: Themes.Const.MARGIN_AVATAR,
    },
    iconSearch: {
        marginRight: 5
    },
    inpSearch: {
        fontSize: 18,
        flex: 1,
        fontFamily: Themes.FontFamily.FontMediumDefault,
        borderBottomWidth: 0.5,
        borderBottomColor: Themes.Colors.PINK,
    }
})
