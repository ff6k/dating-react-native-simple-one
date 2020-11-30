import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import Const from '/src/const'
export default function MyVicesContent(props) {
    const { onPressDrinking, onPressSmoking } = props

    return (
        <View>
            <ItemContent
                isButtonType={true}
                title={"Drinking"} content={"NA"}
                onPressItem={onPressDrinking}
            />
            <ItemContent
                isButtonType={true}
                title={"Smoking"} content={"NA"}
                onPressItem={onPressSmoking}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
