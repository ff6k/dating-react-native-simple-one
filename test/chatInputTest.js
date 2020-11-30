import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

const ChatInput = (props) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = () => {
        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        }
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onUserUpdate = (value) => {
        setUser(value);
    }

    const onMessageUpdate = (value) => {
        setMessage(value);
    }

    return (
        <View
        >
            <Text>User:</Text>
            <TextInput value={user} onChangeText={(value) => onUserUpdate(value)} />
            <Text>Message:</Text>
            <TextInput value={message} onChangeText={(value) => onMessageUpdate(value)} />
            <TouchableOpacity onPress={() => onSubmit()}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ChatInput;