import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'

export default function MyVirtuesContent(props) {
    const { onPressReligious } = props
    return (
        <View>
            <ItemContent title={"Religious beliefs"} content={"Hindu"}
                typeContent={TYPE_CONTENT.Button}
                onPressItem={onPressReligious}
            />
            <ItemContent title={"Work"} content={"Appscrip"}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Job"} content={"Ceo"}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Education"} content={"Engineer"}
                typeContent={TYPE_CONTENT.TextInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
