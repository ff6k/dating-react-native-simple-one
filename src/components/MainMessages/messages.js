import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View, Text, RefreshControl, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native'
import HeaderApp from '/src/components/UI/headerApp'
import ButtonSend from '/src/components/UI/buttonSend'
import { FloatingAction } from "react-native-floating-action";
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'
import { withTranslation } from 'react-i18next';
import ItemConversition from '/src/components/UI/itemConversition'
import BottomModalSlide from '/src/components/UI/bottomModalSlide'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import UploadImageModal from '/src/components/UI/uploadImageModal'
import ReportModal from '/src/components/Model/reportModal'
import { GifSearch } from 'react-native-gif-search'
import Const from '/src/const'
const btnPhoto = 'bt_photo'
const btnLocation = 'bt_location'
const btnGif = 'bt_gif'

const actions = [
    {
        color: Themes.Colors.PINK,
        text: "Send Photo",
        icon: require("/src/assets/images/picture_127px.png"),
        name: btnPhoto,
        position: 1
    },
    {
        color: Themes.Colors.PINK,
        text: "Send Location",
        icon: require("/src/assets/images/location_127px.png"),
        name: btnLocation,
        position: 2
    },
    {
        color: Themes.Colors.PINK,
        text: "Send Gif",
        icon: require("/src/assets/images/gif_127px.png"),
        name: btnGif,
        position: 3
    },

];

const renderFooter = (props) => {
    const { loading } = props
    if (!loading) return null
    return (
        <View style={{ marginTop: 10 }}>
            <ActivityIndicator size="large" color="gray" />
        </View>
    )
}
const Messages = React.forwardRef((props, ref) => {
    const { t, onPressBack, dataMessages, idUser, onPressMenu, handleLoadMore, dataHeader, onPressSend,
        onPressViewProfile, onPressPhoto,
        isVisiblePhoto, setIsVisiblePhoto, onTakePhoto, onUploadPhoto, isLoadingSend,
        onPressGif, getUriGif, isVisibleGif, setIsVisibleGif, isVisibleReport,
        onPressReport, onPressCloseModal, onPressPostData, onPressLocation, onPressLocationLink

    } = props
    const { name } = dataHeader
    const [newValue, setNewValue] = useState('')
    const [height, setHeight] = useState(50)
    const [isVisibleButton, setIsVisibleButton] = useState(true)
    const [isVisibleTextInput, setIsVisibleTextInput] = useState(true)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const renderItemChat = (item, index, idUser, dataMessages, onPressLocationLink) => {
        return <ItemConversition item={item} idUser={idUser}
            index={index}
            dataMessages={dataMessages}
            onPressLocationLink={onPressLocationLink}
        />
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
                setIsVisibleButton(false)
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
                setIsVisibleButton(true)
            }
        );
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    })

    const checkPressButton = (name) => {
        switch (name) {
            case btnPhoto:
                onPressPhoto && onPressPhoto()
                break
            case btnLocation:
                onPressLocation && onPressLocation()
                break
            case btnGif:
                onPressGif && onPressGif()
                break
        }
    }

    const updateSize = (height) => {
        setHeight(height)
    }

    const onPressSendData = () => {
        onPressSend && onPressSend(newValue)
        setNewValue('')
    }

    return (
        <View style={{ flex: 1 }}>
            <HeaderApp
                onPressMenu={onPressMenu}
                onPressBack={onPressBack}
                dataHeader={dataHeader}
            />
            <FlatList style={{ flex: 1, marginBottom: 10 }}
                data={dataMessages}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id !== undefined && item.id.toString()}
                extraData={dataMessages}
                inverted
                onEndReachedThreshold={0.1}
                onEndReached={handleLoadMore}
                ListFooterComponent={() => renderFooter(props)}
                renderItem={({ item, index }) => renderItemChat(item, index, idUser, dataMessages, onPressLocationLink)} />

            {!isVisibleGif && <View style={[styles.containerFooter, { height: height }, !isVisibleButton && styles.containerVisible]}>
                <AutoGrowingTextInput style={[styles.inpMessage, { height: height }]}
                    placeholder="New message"
                    onChangeText={(value) => setNewValue(value)}
                    maxLength={500}
                    value={newValue}
                    onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
                />
                <ButtonSend disabled={!isVisibleTextInput}
                    onPress={onPressSendData}
                    isLoadingSend={isLoadingSend}
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                />

            </View>}
            <FloatingAction
                margin={0}
                buttonSize={Themes.Const.SIZE_ICON_MESSAGES}
                position={"left"}
                actions={actions}
                visible={isVisibleButton}
                onOpen={() => setIsVisibleTextInput(false)}
                onClose={() => setIsVisibleTextInput(true)}
                dismissKeyboardOnPress={true}
                styleButton={{ left: 10, bottom: 10 }}
                color={Themes.Colors.PINK}
                onPressItem={name => {
                    // console.log(`selected button: ${name}`);
                    checkPressButton(name)
                }}
            />
            <BottomModalSlide
                ref={ref}
                height={200}
                style={{ flex: 0 }}
            >
                <TouchableOpacity style={styles.containItemModal}
                    onPress={() => onPressViewProfile && onPressViewProfile()}
                >
                    <View style={styles.containIconModal}>
                        <Icon
                            size={25}
                            color={'black'}
                            name="info-outline"></Icon>
                    </View>
                    <Text style={styles.txtModal}>View {dataHeader.name}'s Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containItemModal}
                    onPress={() => onPressReport()}
                >
                    <View style={styles.containIconModal}>
                        <Icon
                            size={25}
                            color={'black'}
                            name="flag-outline"></Icon>
                    </View>
                    <Text style={styles.txtModal}>Report {dataHeader.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containItemModal}
                >
                    <View style={styles.containIconModal}>
                        <Icon
                            size={25}
                            color={'black'}
                            name="slash-outline"></Icon>
                    </View>
                    <Text style={styles.txtModal}>Block {dataHeader.name}</Text>
                </TouchableOpacity>
            </BottomModalSlide>
            <UploadImageModal
                isVisible={isVisiblePhoto}
                setVisibleModel={setIsVisiblePhoto}
                onUploadPhoto={onUploadPhoto}
                onTakePhoto={onTakePhoto}
            />
            <GifSearch
                giphyApiKey={Const.GifPhyKey.GIFPHY_KEY}
                gifsToLoad={10}
                maxGifsToLoad={25}
                style={{ backgroundColor: 'white' }}
                textInputStyle={{ fontWeight: 'bold', color: 'black' }}
                gifListStyle={{ height: 320 }}
                gifStyle={{ height: 160 }}
                loadingSpinnerColor={'black'}
                placeholderTextColor={'grey'}
                placeholderText={'Search'}
                darkGiphyLogo={true}
                onGifSelected={(gif_url) => { getUriGif(gif_url) }}
                visible={isVisibleGif}
                onBackPressed={() => { setIsVisibleGif(false) }}
                developmentMode={false}
                horizontal={false}
                showScrollBar={false}
                onError={(error) => { console.log(error) }}
            />
            <ReportModal visible={isVisibleReport}
                onPressCloseModal={onPressCloseModal}
                onPressPostData={onPressPostData}
            />
        </View>
    )
})

const SIZE_RADIUS = 40
const styles = StyleSheet.create({
    txtModal: {
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    containIconModal: {
        backgroundColor: Themes.Colors.GRAY_BRIGHT_II,
        width: SIZE_RADIUS,
        height: SIZE_RADIUS,
        borderRadius: SIZE_RADIUS / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    containItemModal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    btnBetweenContent: {
        ...Themes.Styles.BtnBetweenContent
    },
    txtContentButton: {
        ...Themes.Styles.TxtContentButton
    },
    btnBottomContent: {
        ...Themes.Styles.BtnBottomContent
    },
    containerVisible: {
        width: '100%', marginLeft: 0, paddingRight: 10
    },
    containerFooter: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft: 45, marginRight: 10
    },
    inpMessage: {
        borderWidth: 1, borderRadius: 20, borderColor: 'gray',
        paddingHorizontal: 15,
        marginHorizontal: 10,
        fontFamily: Themes.FontFamily.FontMediumDefault,
        // width: '84%'
        flex: 1
    }
})

// export default withTranslation()(Messages)
export default Messages
// export default Messages

