import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Themes from '/src/themes'
import InterestContentInfo from '/src/components/UI/interestContentInfo'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { TYPE_CONTENT } from '../typeContent'
import Icon from '/src/components/UI/icon'
import DateTimePicker from '/src/components/UI/dateTimePicker'
import Utils from '/src/utils'

const MAX_LENGTH_TEXT = 500

// const data = [
//     { id: 31, label: 'Mountain Biking' },
//     { id: 32, label: 'Snowmobiling' },
//     { id: 33, label: 'Painting' },
//     { id: 34, label: 'Grilling' },
//     { id: 35, label: 'Surf Fishing' },
//     { id: 36, label: 'Bartending' },
//     { id: 37, label: 'Stamp Collecting' },
//     { id: 38, label: 'Helping The Homeless' },
// ]


const RenderTypeContent = (props) => {
    const { data, title, content, onPressItem, keyboardType, typeContent, onBlurTextExpand, onBlurTextInput, dateBegin, pickDate } = props
    const [contentState, setContentState] = useState(() => {
        return content ? content : ''
    });
    const [isNotFormat, setIsNotFormat] = useState(null)

    const isFormatPhone = () => {
        if (typeContent === TYPE_CONTENT.TextInput && title === 'Phone') {
            const isPhoneFormat = Utils.ValidateInput.validatePhoneNumber(contentState)
            if (isPhoneFormat) {
                setIsNotFormat(false)
            }
            else { setIsNotFormat(true) }
        }
    }

    const onBlur = () => {
        onBlurTextInput && onBlurTextInput(contentState)
        isFormatPhone()
    }

    switch (typeContent) {
        case TYPE_CONTENT.Button:
            return (
                <TouchableOpacity
                    style={[styles.containText, styles.containView]}
                    onPress={() => onPressItem && onPressItem()}>
                    <Text style={[styles.txtInside, !content && { color: '#939093' }]}>{content ? content : 'NA'}</Text>
                    <Icon
                        name={'arrow-right-outline'}
                        size={27}
                        color={Themes.Colors.GRAY_BRIGHT_I}
                    />
                </TouchableOpacity>
            )
        case TYPE_CONTENT.TextInput:
            return (
                <View>
                    {isNotFormat && <Text style={styles.txtInvalid}>Invalid</Text>}
                    <View style={styles.containView}>
                        <TextInput
                            style={[{
                                color: 'black', fontSize: 16,
                                fontFamily: Themes.FontFamily.FontThinDefault,
                                width: '95%'
                            }, isNotFormat && { color: 'red' }]}
                            onBlur={() => onBlur()}
                            placeholder={"NA"}
                            value={contentState}
                            keyboardType={keyboardType}
                            onChangeText={(value) => setContentState(value)}
                        />
                        <Icon
                            name={'edit-2-outline'}
                            size={20}
                            color={Themes.Colors.GRAY_BRIGHT_I}
                        />
                    </View>
                </View>

            )
        case TYPE_CONTENT.TextExpand:
            return (
                <View>
                    <AutoGrowingTextInput style={styles.textInput} placeholder={'Your bio'}
                        onChangeText={(value) => setContentState(value)}
                        maxLength={MAX_LENGTH_TEXT}
                        value={contentState}
                        onBlur={() => onBlurTextExpand && onBlurTextExpand(contentState)}
                    />
                    <Text style={styles.txtCountTxt}>{`${contentState.length}/500`}</Text>
                </View>
            )
        case TYPE_CONTENT.TagSelect:
            return (
                <View>
                    {data.length > 0 ? <TouchableOpacity style={styles.containTag}
                        onPress={() => onPressItem && onPressItem()}
                    >
                        <InterestContentInfo
                            data={data}
                        />
                    </TouchableOpacity> :
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
        case TYPE_CONTENT.DateTime:
            return (
                <DateTimePicker
                    style={styles.inpDateTime}
                    styleText={styles.txtDateTime}
                    modeShow={'date'}
                    sizeIcon={20}
                    dateBegin={dateBegin}
                    pickDate={pickDate}
                />
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
    inpDateTime: {
        height: 50,
        alignItems: 'center',
        paddingRight: 10
    },
    txtDateTime: {
        fontSize: 16,
        color: 'black', fontSize: 16,
        fontFamily: Themes.FontFamily.FontThinDefault,
    },
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
        color: 'black', fontSize: 16,
        fontFamily: Themes.FontFamily.FontThinDefault,
    },
    containText: {
        height: 50,
        justifyContent: 'center'
    },
    containContent: {
        paddingLeft: 15,
        // marginTop: 10
        backgroundColor: Themes.Colors.GRAY_BRIGHT_V
    },
    txtCountTxt: {
        alignSelf: 'flex-end',
        marginRight: 10,
        fontSize: 14,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    textInput: {
        fontFamily: Themes.FontFamily.FontThinDefault,
        fontSize: 16,
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
    txtInvalid: {
        fontSize: 10,
        color: 'red',
        position: 'absolute'
    }
})
