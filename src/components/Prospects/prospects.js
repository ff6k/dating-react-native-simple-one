import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
// import Header from '/src/components/UI/header'
import { Container, Header, Left, Body, Right, TabHeading, Icon, Title, ScrollableTab, Tab, Tabs } from 'native-base';
import Themes from '/src/themes'
//tabs
import ListImageLiked from '/src/components/UI/listImageLiked'
import { withTranslation } from 'react-i18next';
import AwesomeAlert from 'react-native-awesome-alerts';



function Prospects(props) {
    const { t, dataTopPicks, dataLikes, onPressUserLikedMe, onPressLoveStatus,
        closeAlert, isShowAlertSuccess, isShowAlertFail, countLikes, onPressLoveStatusTopPick } = props
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
                    heading={`${countLikes} ` + t("Likes")}>
                    <ListImageLiked data={dataLikes}
                        onPressUserLikedMe={onPressUserLikedMe}
                        onPressLoveStatus={onPressLoveStatus}
                        title={t("People who have already liked")}
                    />
                </Tab>
                <Tab
                    textStyle={styles.textStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    heading={t("Top Picks")}>
                    <ListImageLiked data={dataTopPicks}
                        onPressUserLikedMe={onPressUserLikedMe}
                        onPressLoveStatus={onPressLoveStatusTopPick}
                        title={t("Your Top Picks !")}
                    />
                </Tab>
            </Tabs>
            <AwesomeAlert
                show={isShowAlertSuccess}
                title={"Match Success !"}
                message={"Now you can chat together, Let get it !!!"
                }
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                contentStyle={{ width: 300, height: 120, }}
                confirmText={"Yes, i know"}
                messageStyle={styles.txtMessageAlert}
                confirmButtonColor={"#7FBC3C"}
                confirmButtonTextStyle={styles.txtConfirm}
                titleStyle={styles.titleAlert}
                onConfirmPressed={() =>
                    closeAlert && closeAlert()
                }
            />
            <AwesomeAlert
                show={isShowAlertFail}
                title={t("Match Fail❗️")}
                message={
                    t("Please check your connection then try again")}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                contentStyle={{ width: 300, height: 120, }}
                confirmText={t("Yes, i know")}
                messageStyle={styles.txtMessageAlert}
                confirmButtonColor={"#F86262"}
                confirmButtonTextStyle={styles.txtConfirm}
                titleStyle={styles.titleAlert}
                onConfirmPressed={() =>
                    closeAlert && closeAlert()
                }
            />
        </Container>

    )
}

const styles = StyleSheet.create({
    titleAlert: {
        fontSize: 17,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    txtMessageAlert: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    txtConfirm: {
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
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