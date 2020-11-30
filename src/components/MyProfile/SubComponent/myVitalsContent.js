import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'

export default function MyVitalsContent(props) {
    return (
        <View>
            <ItemContent title={"Ethnicity"} content={"American Indian"}
                isButtonType={true}
            />
            <ItemContent title={"Kids"} content={"Don't have kids"}
                isButtonType={true}
            />
            <ItemContent title={"Family Plans"} content={"NA"}
                isButtonType={true}
            />
            <ItemContent title={"Height"} content={"NA"}
                isButtonType={true}
            />
        </View>
    )
}
const styles = StyleSheet.create({})
