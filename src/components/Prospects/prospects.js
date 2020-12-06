import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
// import Header from '/src/components/UI/header'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'
//tabs
import ListImageLiked from '/src/components/UI/listImageLiked'
import { withTranslation } from 'react-i18next';



function Prospects(props) {
    const { t, dataTopPicks, dataLikes, onPressUserLikedMe, onPressLoveStatus } = props
    return (
        <Container>
            <Header hasTabs
                style={Themes.Styles.HeaderBar}
            >
                <Body>
                    <Title style={Themes.Styles.TitleBar}>{t("Prospects")}</Title>
                </Body>
            </Header>
            <Tabs
                renderTabBar={() => <ScrollableTab
                    underlineStyle={styles.underlineStyle}
                />}
            >
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading={"4 Likes"}>
                    <ListImageLiked data={dataLikes}
                        onPressUserLikedMe={onPressUserLikedMe}
                        onPressLoveStatus={onPressLoveStatus}
                        title={"People who have already liked or super liked you"}
                    />
                </Tab>
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading={"Top Picks"}>
                    <ListImageLiked data={dataTopPicks}
                        title={"Top Picks !"}
                    />
                </Tab>
            </Tabs>
        </Container>

    )
}

const styles = StyleSheet.create({
    underlineStyle: {
        ...Themes.Styles.underlineScrollTab
    },
    activeTextStyle: {
        ...Themes.Styles.ActiveTextTab
    },
    textStyle: {
        ...Themes.Styles.TextTab
    },
    activeTabStyle: {
        ...Themes.Styles.ActiveTab
    },
    tabStyle: {
        ...Themes.Styles.Tab
    },
    tabHeader: {
        ...Themes.Styles.TabHeader
    }
})

export default withTranslation()(Prospects)