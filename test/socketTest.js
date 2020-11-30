import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import io from "socket.io-client/dist/socket.io.js";

let socket = io("http://192.168.1.120:3000");
const DATA = [
    {
        id: 'Long',
        title: 'Long',
    },
];
const Item = ({ title }) => {
    (
        <TouchableOpacity
            onPress={() => onPressUser()}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}
export default function socketTest() {
    const [userName, setUserName] = useState("")
    const [arrUser, setArrUser] = useState([])
    const [chatMessages, setChatMessages] = useState('')
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    useEffect(() => {
        socket.on("Server_dang_ki_fail", data => {
            alert("Server_dang_ki_fail " + data)
        });
        socket.on("Server_dang_ki_success", value => {
            const data = { id: value.username, title: value.username, idSocket: value.id }
            setArrUser(arrUser => [...arrUser, data])
        });
        socket.on("Server_send_chat", value => {
            console.log("socketTest -> value", value.username)
        });
    }, [])
    const submitUsername = () => {
        socket.emit('client_send_username', userName);
        setUserName('')
    }

    const submitChatMessages = () => {
        socket.emit('client_send_chat', chatMessages);
        setChatMessages('')
    }

    return (
        <View style={styles.container}>
            {/* {chatMessages123} */}
            <TextInput
                style={{ height: 40, borderWidth: 2 }}
                // autoCorrect={false}
                value={userName}
                onSubmitEditing={() => submitUsername()}
                onChangeText={userName => {
                    setUserName(userName)
                }}
            />
            <TextInput
                style={{ height: 100, borderWidth: 2 }}
                // autoCorrect={false}
                value={chatMessages}
                onSubmitEditing={() => submitChatMessages()}
                onChangeText={chatMessage => {
                    setChatMessages(chatMessage)
                }}
            />
            <FlatList
                data={arrUser}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // height: 400,
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
