import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import DropDownContent from '/src/components/UI/dropDownContent'
export default function InformationContent(props) {
    return (
        <View>
            <ItemContent title={"Bio"} content={""} isTextExpand={true} />
            <ItemContent title={"Interest"} content={""} />
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
