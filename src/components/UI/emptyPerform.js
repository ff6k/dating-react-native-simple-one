import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import Themes from '/src/themes'

export default function emptyPerform(props) {
    const { title, description, source, style, styleTitle, styleImage } = props
    return (
        <View style={{ ...styles.container, ...style }}>
            {
                <Image source={source}
                    style={{ ...styles.image, ...styleImage }}
                />
            }
            <Text style={{ ...styles.txtTitle, ...styleTitle }}>{title}</Text>
            <Text
                style={styles.txtDescription}>
                {description}
            </Text>
        </View>
    )
}

emptyPerform.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.number,
    styles: PropTypes.object,
    styleTitle: PropTypes.object,
}

emptyPerform.defaultProps = {
    title: "",
    description: "",
    source: null,
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '80%'
    },
    image: {
        width: 100, height: 100
    },
    txtTitle: {
        marginTop: 10,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontSize: 20,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    txtDescription: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 14,
        color: '#939093',
        fontFamily: Themes.FontFamily.FontThinDefault
    }
})
