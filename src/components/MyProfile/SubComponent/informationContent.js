import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'


export default function InformationContent(props) {
    const { onPressInterest } = props
    return (
        <View>
            <ItemContent title={"Bio"} content={""} isTextExpand={true}
                typeContent={TYPE_CONTENT.TextExpand}
            />
            <ItemContent title={"Interest"} content={""}
                isButtonType={true}
                onPressItem={onPressInterest}
                typeContent={TYPE_CONTENT.TagSelect}
            />

            <ItemContent title={"Name"} content={"Trần Long"}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Age"} content={"21"} keyboardType={'number-pad'}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Gender"} content={"Male"}
                isButtonType={true}
                typeContent={TYPE_CONTENT.Button}
            />
            <ItemContent title={"Phone"} content={"+84966712391"} keyboardType={'phone-pad'}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Email"} content={"Tqlong1609@gmail.com"} keyboardType={'email-address'}
                typeContent={TYPE_CONTENT.View}
            />
            <ItemContent title={"Location"} content={"Ho Chi Minh, VietNam"}
                isButtonType={true}
                typeContent={TYPE_CONTENT.Button}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
