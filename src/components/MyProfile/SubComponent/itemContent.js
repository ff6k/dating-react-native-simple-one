import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Themes from '/src/themes'

export default function ItemContent(props) {
    const { title, content, onPressItem, keyboardType, isButtonType } = props
    const [contentState, setContentState] = useState(() => {
        return content
    });

    return (
        <TouchableOpacity onPress={() => isButtonType && onPressItem && onPressItem()}>
            <View style={styles.container}>
                <Text style={styles.txtHeader}>{title}</Text>
            </View>

            <View style={styles.txtContent}>
                {isButtonType ? <Text style={{
                    color: '#939093', fontSize: 16,
                    fontFamily: Themes.FontFamily.FontThinDefault
                }}>{content}</Text> :
                    <TextInput
                        style={[{
                            color: '#939093', fontSize: 16,
                            fontFamily: Themes.FontFamily.FontThinDefault
                        }]}
                        value={contentState}
                        keyboardType={keyboardType}
                        onChangeText={(value) => setContentState(value)}
                    />}
            </View>
        </TouchableOpacity>
    )
}

const HEIGHT_HEADER = 40
const styles = StyleSheet.create({
    container: {
        ...Themes.Styles.itemContent
    },
    txtHeader: {
        ...Themes.Styles.TextHeader
    },
    txtContent: {
        ...Themes.Styles.TextContent
    },
})
