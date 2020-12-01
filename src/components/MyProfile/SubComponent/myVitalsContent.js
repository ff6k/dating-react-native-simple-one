import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'

export default function MyVitalsContent(props) {
    return (
        <View>
            <ItemContent title={"Ethnicity"} content={"American Indian"}
                typeContent={TYPE_CONTENT.Button}
            />
            <ItemContent title={"Kids"} content={"Don't have kids"}
                typeContent={TYPE_CONTENT.Button}
            />
            <ItemContent title={"Family Plans"} content={"NA"}
                typeContent={TYPE_CONTENT.Button}
            />
            <ItemContent title={"Height"} content={"NA"}
                typeContent={TYPE_CONTENT.Button}
            />
        </View>
    )
}
const styles = StyleSheet.create({})
