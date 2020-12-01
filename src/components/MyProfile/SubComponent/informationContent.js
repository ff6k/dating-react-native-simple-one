import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import InterestContentInfo from '/src/components/UI/interestContentInfo'
const data = [
    { id: 31, label: 'Mountain Biking' },
    { id: 32, label: 'Snowmobiling' },
    { id: 33, label: 'Painting' },
    { id: 34, label: 'Grilling' },
    { id: 35, label: 'Surf Fishing' },
    { id: 36, label: 'Bartending' },
    { id: 37, label: 'Stamp Collecting' },
    { id: 38, label: 'Helping The Homeless' },
]
export default function InformationContent(props) {
    const { onPressInterest } = props
    return (
        <View>
            <ItemContent title={"Bio"} content={""} isTextExpand={true} />
            <ItemContent title={"Interest"} content={""}
                isButtonType={true}
                onPressItem={onPressInterest}
            />
            <InterestContentInfo
                data={data}
            />
            <ItemContent title={"Name"} content={"Trần Long"} />
            <ItemContent title={"Age"} content={"21"} keyboardType={'number-pad'} />
            <ItemContent title={"Gender"} content={"Male"}
                isButtonType={true}
            />
            <ItemContent title={"Phone"} content={"+84966712391"} keyboardType={'phone-pad'} />
            <ItemContent title={"Email"} content={"Tqlong1609@gmail.com"} keyboardType={'email-address'} />
            <ItemContent title={"Location"} content={"Ho Chi Minh, VietNam"}
                isButtonType={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
