import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Themes from '/src/themes'
import PropTypes from 'prop-types'
export default function header(props) {
    const { title } = props
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>{title}</Text>
        </View>
    )
}

header.propTypes = {
    title: PropTypes.string,
}

header.defaultProps = {
    title: null
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '25%',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: Themes.Colors.GRAY_BRIGHT_I
    },
    txtTitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: Themes.Colors.GRAY_BRIGHT
    }
})
