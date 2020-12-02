import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'

export default function MyVirtuesContent(props) {
    const { onPressReligious, religion, job, work, education } = props
    return (
        <View>
            <ItemContent title={"Religious beliefs"} content={religion}
                typeContent={TYPE_CONTENT.Button}
                onPressItem={onPressReligious}
            />
            <ItemContent title={"Work"} content={work}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Job"} content={job}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Education"} content={education}
                typeContent={TYPE_CONTENT.TextInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
