import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Themes from '/src/themes'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
const MAX_LENGTH_TEXT = 500
export default function ItemContent(props) {
    const { title, content, onPressItem, keyboardType, isButtonType, isTextExpand } = props
    const [contentState, setContentState] = useState(() => {
        return content
    });
    return (
        <TouchableOpacity onPress={() => isButtonType && onPressItem && onPressItem()}>
            <View style={styles.container}>
                <Text style={styles.txtHeader}>{title}</Text>
            </View>

            {!isTextExpand ? <View style={styles.txtContent}>
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
                :
                (
                    <View>
                        <AutoGrowingTextInput style={styles.textInput} placeholder={'Your bio'}
                            onChangeText={(value) => setContentState(value)}
                            maxLength={MAX_LENGTH_TEXT}
                        />
                        <Text style={styles.txtCountTxt}>{`${contentState.length}/500`}</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}

const HEIGHT_HEADER = 40
const styles = StyleSheet.create({
    txtCountTxt: {
        alignSelf: 'flex-end',
        marginRight: 10,
        fontSize: 14,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    textInput: {
        fontFamily: Themes.FontFamily.FontMediumDefault,
        ...Themes.Styles.TextContent
    },
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
