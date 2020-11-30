import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
// import Header from '/src/components/UI/header'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'
//tabs
import ListImageLiked from '/src/components/UI/listImageLiked'
import { withTranslation } from 'react-i18next';

const dataLikes = [
    { id: 1, name: 'Trần Dần, 18', isMale: true, isLike: true, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 2, name: 'Trần Dần, 20', isMale: true, isLike: true, uri: 'https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg' },
    { id: 3, name: 'Trần Dần, 20', isMale: false, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 4, name: 'Trần Dần, 20', isMale: true, isLike: true, uri: 'https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg' },
    { id: 5, name: 'Trần Dần, 20', isMale: false, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 6, name: 'Trần Dần, 21', isMale: true, isLike: true, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
]

const dataTopPicks = [
    { id: 1, name: 'Trần Dần, 18', isMale: true, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 2, name: 'Trần Dần, 20', isMale: true, isLike: false, uri: 'https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg' },
    { id: 3, name: 'Trần Dần, 20', isMale: false, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 4, name: 'Trần Dần, 20', isMale: true, isLike: false, uri: 'https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg' },
    { id: 5, name: 'Trần Dần, 20', isMale: false, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
    { id: 6, name: 'Trần Dần, 21', isMale: true, isLike: false, uri: 'https://1.bp.blogspot.com/-tishGiEqXCw/XqhWaDmUeoI/AAAAAAAAjp4/WJ9y5kbeK7kmu2h6KjZd_AzfTLrSznZ3QCLcBGAsYHQ/s1600/Anh-gai-xinh-toc-ngan%2B%25285%2529.jpg' },
]

function Prospects(props) {
    const { t } = props
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