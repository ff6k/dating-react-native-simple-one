import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Message from './messagesTest';

const ChatWindow = (props) => {
    const chat = props.chat
        .map(m => <Message
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message} />);

    return (
        <View>
            {chat}
        </View>
    )
};

export default ChatWindow;