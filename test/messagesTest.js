import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

const Message = (props) => (
    <View style={{ backgroundColor: "#eee", borderRadius: 5, padding: 10 }}>
        <Text>{props.user}</Text>
        <Text>{props.message}</Text>
    </View>
);

export default Message;
