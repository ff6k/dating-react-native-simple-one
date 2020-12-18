import React, { useEffect } from 'react'
import { HubConnectionBuilder, LogLevel, HttpTransportType, IHttpConnectionOptions, HubConnectionState } from '@aspnet/signalr';
import { URL_CONNECT_SERVER_MESSAGES, URL_CONNECT_SERVER_NOTIFICATION } from '/src/api/url'
let _hubConnectionMess = null
export const connectServerMess = (token) => {
    try {
        if (_hubConnectionMess === null) {
            _hubConnectionMess = new HubConnectionBuilder()
                .withUrl(URL_CONNECT_SERVER_MESSAGES, {
                    accessTokenFactory: () => token
                })
                .build();
            // _hubConnection.serverTimeoutInMilliseconds = 100000;
            _hubConnectionMess.start().then(() => {
                console.log('connect server mess success')
                return _hubConnectionMess
            })
                .catch(err => console.log(err));
        } else {
            return _hubConnectionMess
        }
    } catch (error) {
        console.log(`error: ${error}`);
    }

}

export const connectServerNotifier = (token, CODE_LISTEN, getData) => {
    try {
        // if (_hubConnectionNotifier === null) {
        let _hubConnectionNotifier = new HubConnectionBuilder()
            .withUrl(URL_CONNECT_SERVER_NOTIFICATION, {
                accessTokenFactory: () => token
            })
            .build();

        // }
        _hubConnectionNotifier.start().then(() => {
            console.log('connect server notification success')
            _hubConnectionNotifier.on(CODE_LISTEN, (data) => {
                getData(data)
            })
        })
            .catch(err => console.log(err));
    } catch (error) {
        console.log(`error: ${error}`);
    }

}

//'receiveMessage'
export const listenerConnect = (_hubConnection, CODE_LISTEN, getData) => {
    console.log('connect sucess')
    try {
        _hubConnection.on(CODE_LISTEN, (data) => {
            getData(data)
        })
    } catch (error) {
        console.log(`error: ${error}`);
    }

}

