import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Themes from '/src/themes'
import InterestContentInfo from '/src/components/UI/interestContentInfo'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { TYPE_CONTENT } from '../typeContent'
import Icon from '/src/components/UI/icon'

const MAX_LENGTH_TEXT = 500

const data = [
    // { id: 31, label: 'Mountain Biking' },
    // { id: 32, label: 'Snowmobiling' },
    // { id: 33, label: 'Painting' },
    // { id: 34, label: 'Grilling' },
    // { id: 35, label: 'Surf Fishing' },
    // { id: 36, label: 'Bartending' },
    // { id: 37, label: 'Stamp Collecting' },
    // { id: 38, label: 'Helping The Homeless' },
]
const RenderTypeContent = (props) => {
    const { content, onPressItem, keyboardType, typeContent } = props
    const [contentState, setContentState] = useState(() => {
        return content
    });
    switch (typeContent) {
        case TYPE_CONTENT.Button:
            return (
                <TouchableOpacity
                    style={styles.containText}
                    onPress={() => onPressItem && onPressItem()}>
                    <Text style={styles.txtInside}>{content}</Text>
                </TouchableOpacity>
            )
        case TYPE_CONTENT.TextInput:
            return (
                <TextInput
                    style={[{
                        color: '#939093', fontSize: 16,
                        fontFamily: Themes.FontFamily.FontThinDefault,
                    }]}
                    value={contentState}
                    keyboardType={keyboardType}
                    onChangeText={(value) => setContentState(value)}
                />
            )
        case TYPE_CONTENT.TextExpand:
            return (
                <View>
                    <AutoGrowingTextInput style={styles.textInput} placeholder={'Your bio'}
                        onChangeText={(value) => setContentState(value)}
                        maxLength={MAX_LENGTH_TEXT}
                    />
                    <Text style={styles.txtCountTxt}>{`${contentState.length}/500`}</Text>
                </View>
            )
        case TYPE_CONTENT.TagSelect:
            return (
                <View>
                    {data.length > 0 ? <View style={styles.containTag}>
                        <InterestContentInfo
                            data={data}
                        />
                    </View> :
                        <TouchableOpacity
                            style={styles.containText}
                            onPress={() => onPressItem && onPressItem()}>
                            <Text style={styles.txtInside}>Add Interests</Text>
                        </TouchableOpacity>}
                </View>


            )
        case TYPE_CONTENT.View:
            return (
                <View style={[styles.containText, styles.containView]}>
                    <Text style={styles.txtInside}>{content}</Text>
                    <Icon
                        name={'lock-outline'}
                        size={20}
                        color={Themes.Colors.GRAY_BRIGHT_I}
                    />
                </View>
            )
    }
}

export default function ItemContent(props) {

    const { title } = props
    return (
        <View>
            <View style={styles.containerTitle}>
                <Text style={styles.txtHeader}>{title}</Text>
            </View>
            <View style={styles.containContent}>
                <RenderTypeContent
                    {...props}
                />
            </View>
        </View>
    )
}

const HEIGHT_HEADER = 40
const styles = StyleSheet.create({
    containView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10
    },
    containTag: {
        marginTop: 15
    },
    txtInside: {
        color: '#939093', fontSize: 16,
        fontFamily: Themes.FontFamily.FontThinDefault,
    },
    containText: {
        height: 50,
        justifyContent: 'center'
    },
    containContent: {
        paddingLeft: 15,
        // marginTop: 10
    },
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
    containerTitle: {
        ...Themes.Styles.itemContent
    },
    txtHeader: {
        ...Themes.Styles.TextHeader
    },
    txtContent: {
        ...Themes.Styles.TextContent
    },
})
