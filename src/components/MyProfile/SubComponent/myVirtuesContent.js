import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'

export default function MyVirtuesContent(props) {
    const { t, onPressReligious, religion, job, work, education, onBlurTextInputJob, onBlurTextInputWorkAt,
        onBlurTextInputEducation } = props
    return (
        <View>
            <ItemContent title={t("Religious belief")} content={religion}
                typeContent={TYPE_CONTENT.Button}
                onPressItem={onPressReligious}
            />
            <ItemContent title={t("Work")} content={work}
                typeContent={TYPE_CONTENT.TextInput}
                onBlurTextInput={onBlurTextInputWorkAt}
            />
            <ItemContent title={t("Job")} content={job}
                typeContent={TYPE_CONTENT.TextInput}
                onBlurTextInput={onBlurTextInputJob}
            />
            <ItemContent title={t("Education")} content={education}
                typeContent={TYPE_CONTENT.TextInput}
                onBlurTextInput={onBlurTextInputEducation}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
