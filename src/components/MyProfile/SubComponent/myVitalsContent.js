import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'

export default function MyVitalsContent(props) {
    const { t, onPressEthnicity, onPressKids,
        // onPressFamilyPlans,
        ethnicity, kids,
        // familyPlans 
    } = props
    return (
        <View>
            <ItemContent title={t("Ethnicity")} content={ethnicity}
                typeContent={TYPE_CONTENT.Button}
                onPressItem={onPressEthnicity}
            />
            <ItemContent title={t("Kids")} content={kids}
                typeContent={TYPE_CONTENT.Button}
                onPressItem={onPressKids}
            />
            {/* <ItemContent title={"Family Plans"} content={familyPlans}
                typeContent={TYPE_CONTENT.Button}
                onPressItem={onPressFamilyPlans}
            /> */}
        </View>
    )
}
const styles = StyleSheet.create({})
