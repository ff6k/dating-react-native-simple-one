import React, { useRef } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import RefTestNew from './refTestNew'
export default function refTest() {
    // const refNew = useRef(null)
    const ref = React.createRef();
    const openModal = () => {
        ref.current.open()
    }
    console.log('render refTest')
    return (
        <View>
            <TouchableOpacity onPress={() => openModal()}>
                <Text>Add</Text>
            </TouchableOpacity>
            <RefTestNew
                ref={ref}
            >
                <TextInput style={{ width: 200, backgroundColor: 'black' }} />
            </RefTestNew>
        </View>

    )
}

const styles = StyleSheet.create({})
