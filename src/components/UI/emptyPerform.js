import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import Const from '/src/const'
import Themes from '/src/themes'

export default function emptyPerform(props) {
    const { title, description, source, style, styleTitle, styleImage } = props
    return (
        <ScrollView style={{ ...styles.container, ...style }}>
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Image source={source}
                    style={{ ...styles.image, ...styleImage }}
                />
                <Text style={{ ...styles.txtTitle, ...styleTitle }}>{title}</Text>
                <Text
                    style={styles.txtDescription}>
                    {description}
                </Text>
            </View>
        </ScrollView>
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
        // alignItems: 'center',
        // width: '0%'
        height: 300,
    },
    image: {
        width: Const.Common.deviceWidth - 300, height: Const.Common.deviceWidth - 300
    },
    txtTitle: {
        marginTop: 10,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontSize: Const.Common.deviceWidth - 400,
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
