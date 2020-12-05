import React, { useEffect } from 'react'
import { HubConnectionBuilder, LogLevel, HttpTransportType, IHttpConnectionOptions, HubConnectionState } from '@aspnet/signalr';
import { URL_CONNECT_SERVER_MESSAGES } from '/src/api/url'

let _hubConnection = null
export const connectServer = (token) => {
    if (_hubConnection === null) {
        _hubConnection = new HubConnectionBuilder()
            .withUrl(URL_CONNECT_SERVER_MESSAGES, {
                accessTokenFactory: () => token
            })
            .build();
        _hubConnection.start().then(() => {
            console.log('connect server success')
            return _hubConnection
        })
            .catch(err => console.log(err));
    } else {
        return _hubConnection
    }
}

//'receiveMessage'
export const listenerConnect = (_hubConnection, CODE_LISTEN, getData) => {
    _hubConnection.on(CODE_LISTEN, (data) => {
        getData(data)
    });
}

