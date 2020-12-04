/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    H2,
    Text,
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Root,
    Content,
    List,
    ListItem,
} from 'native-base';

import { HubConnectionBuilder, LogLevel, HttpTransportType, IHttpConnectionOptions } from '@aspnet/signalr';
// import * as signalR from '@aspnet/signalr'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            orders: [],
        };
    }

    _hubConnection = new HubConnectionBuilder()
        .withUrl('http://192.168.1.120:5000/hubs/messages', {
            accessTokenFactory: () => 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJuYmYiOjE2MDcwNzM2MDgsImV4cCI6MTYwNzE2MDAwOCwiaWF0IjoxNjA3MDczNjA4fQ.eon6s64mMzmfaLkkOs8ZhJs6b0zJQv9I0OU3ZZCFygRzqEdCxkBGLD5exRaopezdnCwBLILuPLfxoU5L5A6mig'
        })
        .build();

    componentDidMount() {
        this._hubConnection.start().then(a => {
            console.log('Connected rafa');
        })
            .catch(err => console.log(err));
        this._hubConnection.on('receiveMessage', (data) => {
            console.log(data);
        });
    }
    render() {
        return (
            <Root>
                <Container>
                    <Header>
                        <Left />
                        <Body>
                            <Title>React SignalR</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <List>
                            {this.state.orders.map(order => {
                                return (
                                    <ListItem key={order.id}>
                                        <Body>
                                            <Text>
                                                Mesa:{' '}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    #{order.tableNumber}
                                                </Text>
                                            </Text>
                                            <Text note>{order.item}</Text>
                                            <Text note>Extras: {order.extras}</Text>
                                        </Body>
                                        <Right>
                                            <Text note>{order.time}</Text>
                                        </Right>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Content>
                </Container>
            </Root>
        );
    }
}

export default App;
