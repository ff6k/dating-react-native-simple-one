import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'
import Discover from '/src/components/Discover/discover.controller'
import Prospects from '/src/components/Prospects/prospects.controller'
// import Dates from '/src/components/Dates/dates'
import Chats from '/src/components/Chats/chat.controller'
import Settings from '/src/components/Settings/setting.controller'
import { connectServer } from '/src/configs/Signalr'
import Const from '/src/const'
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'


const Tab = createMaterialBottomTabNavigator();
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        // primary: 'yellow',
        // accent: 'green',
    },
}

let token
function MyTabs(props) {
    const { t } = props
    const dataStore = useSelector(state => state.login)
    const getDataStore = () => {
        if (dataStore.length > 0) {
            const { jwtToken } = dataStore[0]
            token = jwtToken
        }
        else {
            return null // empty data
        }
    }
    useEffect(() => {
        getDataStore()
        connectServer(token)
    }, [])
    return (
        <PaperProvider theme={theme}>
            <Tab.Navigator
                initialRouteName={Const.NameScreens.Discover}
                activeColor={Themes.Colors.PINK_DARK}
                barStyle={{ backgroundColor: 'white' }}
            >
                <Tab.Screen
                    name={Const.NameScreens.Discover}
                    component={Discover}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Discover),
                        tabBarIcon: ({ color }) => (
                            <Icon name="search-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={Const.NameScreens.Prospects}
                    component={Prospects}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Prospects),
                        tabBarIcon: ({ color }) => (
                            <Icon name="heart-outline" color={color} size={26} />
                        ),
                    }}
                />
                {/* <Tab.Screen
                    name={Const.NameScreens.Dates}
                    component={Dates}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Dates),
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="human-female-female" color={color} size={26} />
                        ),
                    }}
                /> */}
                <Tab.Screen
                    name={Const.NameScreens.Chats}
                    component={Chats}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Chats),
                        tabBarIcon: ({ color }) => (
                            <Icon name="message-circle-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={Const.NameScreens.Settings}
                    component={Settings}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Settings),
                        tabBarIcon: ({ color }) => (
                            <Icon name="settings-outline" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </PaperProvider>

    );
}

export default withTranslation()(MyTabs)