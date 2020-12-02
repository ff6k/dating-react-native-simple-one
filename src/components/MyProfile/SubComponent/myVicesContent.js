import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'

export default function MyVicesContent(props) {
    const { onPressDrinking, onPressSmoking, drinking, smoking } = props

    return (
        <View>
            <ItemContent
                typeContent={TYPE_CONTENT.Button}
                title={"Drinking"} content={drinking}
                onPressItem={onPressDrinking}

            />
            <ItemContent
                typeContent={TYPE_CONTENT.Button}
                title={"Smoking"} content={smoking}
                onPressItem={onPressSmoking}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
