import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import PropTypes from 'prop-types'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from '/src/components/UI/icon'

export default function buttonStatus(props) {
    const { color, size, nameFontAwesome5, style, onPress, name } = props
    const iconName = name ? name : "question-mark-outline"
    return (
        <TouchableOpacity
            onPress={() => onPress && onPress()}
            style={
                { ...styles.container, ...style }
            } >
            {
                nameFontAwesome5 ?
                    <FontAwesome5 name={nameFontAwesome5}
                        size={size} color={color} style={styles.ico} />
                    :
                    <Icon name={iconName} size={size} color={color} style={styles.ico} />
            }
        </TouchableOpacity>
    )
}

buttonStatus.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    nameFontAwesome5: PropTypes.string,
    onPress: PropTypes.func,
}

buttonStatus.defaultProps = {
    size: null,
    color: null,
    nameFontAwesome5: null,
    onPress: null
}

const SIZE = 50
const styles = StyleSheet.create({
    container: {
        width: SIZE, height: SIZE,
        borderRadius: SIZE / 2,
        justifyContent: 'center',
        ...Themes.Styles.shadowButton,
    },
    ico: {
        alignSelf: 'center'
    }

})
