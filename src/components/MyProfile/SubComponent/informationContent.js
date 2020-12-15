import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemContent from './itemContent'
import { TYPE_CONTENT } from '../typeContent'
function areEqual(prevProps, nextProps) {
    if (nextProps === prevProps) {
        return false
    } else {
        return true
    }
    /* Trả về true nếu nextProps bằng prevProps, ngược lại trả về false */
}
function InformationContent(props) {
    const { onPressInterest, onPressGender,
        name,
        location,
        gender,
        phone,
        email,
        bio,
        onBlurTextExpand,
        onBlurTextInputName,
        onBlurTextInputPhone,
        dateBegin,
        dataInterest,
        pickDate
    } = props

    return (
        <View>
            <ItemContent title={"Bio"} content={bio} isTextExpand={true}
                typeContent={TYPE_CONTENT.TextExpand}
                onBlurTextExpand={onBlurTextExpand}
            />
            <ItemContent title={"Interest"} content={""}
                onPressItem={onPressInterest}
                typeContent={TYPE_CONTENT.TagSelect}
                data={dataInterest}
            />

            <ItemContent title={"Name"} content={name}
                typeContent={TYPE_CONTENT.TextInput}
                onBlurTextInput={onBlurTextInputName}
            />
            <ItemContent title={"Age"}
                typeContent={TYPE_CONTENT.DateTime}
                dateBegin={dateBegin}
                pickDate={pickDate}
            />
            <ItemContent title={"Gender"} content={gender}
                onPressItem={onPressGender}
                typeContent={TYPE_CONTENT.Button}
            />
            <ItemContent title={"Phone"} content={phone} keyboardType={'phone-pad'}
                typeContent={TYPE_CONTENT.TextInput}
                onBlurTextInput={onBlurTextInputPhone}
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
export default React.memo(InformationContent, areEqual);
// export default MyComponent
const styles = StyleSheet.create({

})
