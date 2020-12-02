import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'

export default function InformationContent(props) {
    const { onPressInterest, onPressGender,
        name,
        location,
        gender,
        phone,
        email,
        bio,
        dateOfBirth
    } = props

    return (
        <View>
            <ItemContent title={"Bio"} content={bio} isTextExpand={true}
                typeContent={TYPE_CONTENT.TextExpand}
            />
            <ItemContent title={"Interest"} content={""}
                onPressItem={onPressInterest}
                typeContent={TYPE_CONTENT.TagSelect}
            />

            <ItemContent title={"Name"} content={name}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Age"} content={dateOfBirth} keyboardType={'number-pad'}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Gender"} content={gender}
                onPressItem={onPressGender}
                typeContent={TYPE_CONTENT.Button}
            />
            <ItemContent title={"Phone"} content={phone} keyboardType={'phone-pad'}
                typeContent={TYPE_CONTENT.TextInput}
            />
            <ItemContent title={"Email"} content={email} keyboardType={'email-address'}
                typeContent={TYPE_CONTENT.View}
            />
            <ItemContent title={"Location"} content={location}
                typeContent={TYPE_CONTENT.Button}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
