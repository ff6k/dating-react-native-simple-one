import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { Container, Header, Body, Title } from 'native-base';
import Themes from '/src/themes'
import EmptyPerform from '/src/components/UI/emptyPerform'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import AvatarActive from '/src/components/UI/avatarActive'
import ItemMessages from '/src/components/UI/itemMessages'
import SearchBar from '/src/components/UI/searchBar'
import AnimLottieView from '/src/components/UI/animLottieView'
import Image from 'react-native-fast-image'
const data = [
    {
        id: "1",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "2",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "3",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "4",
        isActive: false,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "11",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: "21",
        isActive: true,
        name: "Trần Quang Long",
        uriImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
]

function Chats(props) {
    const { t, dataMessages, onChangeInput, onPressMessages, idUser, isLoading } = props

    const renderItemAvatarActive = (item, index) => {
        return <AvatarActive item={item} sizeAvatar={60} sizeActive={2} isShowActive={true} />
    }

    const renderItemMessages = (item, index) => {
        return <ItemMessages item={item}
            onPressMessages={onPressMessages}
            idUser={idUser}
        />
    }

    const HeaderComponent = () => {
        return <View style={styles.headerEmpty} />
    }
    const FooterComponent = () => {
        return <View style={styles.footerEmpty} />

    }
    const renderEmpty = () => {
        return <EmptyPerform
            style={styles.containEmpty}
            styleImage={styles.imageEmpty}
            styleTitle={{ color: Themes.Colors.GRAY_BRIGHT_III }}
            title={t("Oops… here are no messages")}
            source={require('/src/assets/images/oval-empty-outlined-speech-bubble.png')}
        />
    }
    const renderHeader = () => {
        return <View>
            <Text style={styles.txtTitle}>{t("New Matches")}</Text>
            <FlatList
                style={styles.listAvatar}
                ListHeaderComponent={HeaderComponent}
                showsHorizontalScrollIndicator={false}
                data={data}
                horizontal={true}
                renderItem={({ item, index }) => renderItemAvatarActive(item, index)}
                keyExtractor={item => item.id}
            />
            <Text style={[styles.txtTitle, {
                marginBottom: Themes.Const.MARGIN_AVATAR
            }]}>{t("Active Chats")}</Text>
        </View>

    }

    const LoadingComponent = () => {
        return <View style={{ height: '70%' }}>
            <AnimLottieView
                source={require('/src/assets/lotties/8863-waiting.json')}
            />
        </View>
    }

    return (
        <View>
            <Header hasTabs
                style={Themes.Styles.HeaderBar}
            >
                <Body>
                    <Title style={Themes.Styles.TitleBar}>{t("Chats")}</Title>
                </Body>
            </Header>
            <SearchBar
                onChangeInput={onChangeInput}
                placeholder={"Search 1 name"}
                style={styles.search}
            />
            <View style={styles.containerBottomMessages}>
                <FlatList
                    style={styles.listMessages}
                    ListHeaderComponent={renderHeader}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={FooterComponent}
                    data={dataMessages}
                    ListEmptyComponent={isLoading ? LoadingComponent : renderEmpty}
                    renderItem={({ item, index }) => renderItemMessages(item, index)}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}


Chats.propTypes = {
    t: PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
    containEmpty: {
        width: '100%', marginTop: 100, alignItems: 'center'
    },
    footerEmpty: {
        marginBottom: Themes.Const.MARGIN_AVATAR + 150,
        // backgroundColor: 'red',
        height: 70
    },
    headerEmpty: {
        marginLeft: Themes.Const.MARGIN_AVATAR,
    },
    search: {
        marginLeft: Themes.Const.MARGIN_AVATAR,
        marginBottom: Themes.Const.MARGIN_AVATAR
    },
    listMessages: {
        flex: 1,
    },
    listAvatar: {
    },

    emptyPerform: {
        alignSelf: 'center',
    },

    txtTitle: {
        fontSize: 14,
        color: Themes.Colors.PINK,
        marginLeft: Themes.Const.MARGIN_AVATAR,
        fontFamily: Themes.FontFamily.FontBoldExtra,
    },
    containerBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    containerBottomMessages: {
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
        // flex: 1,
    }
})

export default withTranslation()(Chats)