import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Themes from '/src/themes'
export default function dropDownContent(props) {
    const { title, content } = props
    return (
        <DropDownPicker
            items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
            ]}
            defaultValue={'Male'}
            containerStyle={styles.container}
            style={{ borderWidth: 0 }}
            itemStyle={{
                justifyContent: 'flex-start',
                // position: 'absolute',
                // zIndex: -100
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        // ...Themes.Styles.itemContent,
        // width: '100%'
    }
})
