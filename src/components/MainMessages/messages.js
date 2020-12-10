import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View, Text, RefreshControl, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native'
import HeaderApp from '/src/components/UI/headerApp'
import ButtonSend from '/src/components/UI/buttonSend'
import { FloatingAction } from "react-native-floating-action";
import BottomHalfModel from '/src/components/Model/bottomHalfModel'
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes'
import { withTranslation } from 'react-i18next';
import ItemConversition from '/src/components/UI/itemConversition'
import BottomModalSlide from '/src/components/UI/bottomModalSlide'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

const actions = [
    {
        color: Themes.Colors.PINK,
        text: "Send Photo",
        icon: require("/src/assets/images/picture_127px.png"),
        name: "bt_photo",
        position: 1
    },
    {
        color: Themes.Colors.PINK,
        text: "Send Location",
        icon: require("/src/assets/images/location_127px.png"),
        name: "bt_location",
        position: 2
    },
    {
        color: Themes.Colors.PINK,
        text: "Send Gif",
        icon: require("/src/assets/images/gif_127px.png"),
        name: "bt_gif",
        position: 3
    },

];

const renderFooter = (props) => {
    const { loading } = props
    if (!loading) return null
    return (
        <ActivityIndicator
            style={{ color: '#000' }}
        />
    )
}
const Messages = React.forwardRef((props, ref) => {
    const { t, onPressBack, dataMessages, idUser, onPressMenu, handleLoadMore,
    } = props
    const [isVisible, setIsVisible] = useState(false)
    const [newValue, setNewValue] = useState('')
    const [height, setHeight] = useState(50)
    const [isVisibleButton, setIsVisibleButton] = useState(true)
    const [isVisibleTextInput, setIsVisibleTextInput] = useState(true)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const renderItemChat = (item, index, idUser, dataMessages) => {
        return <ItemConversition item={item} idUser={idUser}
            index={index}
            dataMessages={dataMessages}
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

    const updateSize = (height) => {
        setHeight(height)
    }

    const onPressDates = () => {
        setIsVisible(!isVisible)
    }



    return (
        <View style={{ flex: 1 }}>
            <HeaderApp
                onPressDates={onPressDates}
                onPressMenu={onPressMenu}
                onPressBack={onPressBack}
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
                renderItem={({ item, index }) => renderItemChat(item, index, idUser, dataMessages)} />

            <View style={[styles.containerFooter, { height: height }, !isVisibleButton && styles.containerVisible]}>
                <AutoGrowingTextInput style={[styles.inpMessage, { height: height }]}
                    placeholder="New message"
                    onChangeText={(value) => setNewValue(value)}
                    maxLength={500}
                    value={newValue}
                    onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
                />
                <ButtonSend disabled={!isVisibleTextInput} />

            </View>
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
                    console.log(`selected button: ${name}`);
                }}
            />
            <BottomModalSlide
                ref={ref}
                height={200}
                style={{ flex: 0 }}
            >
                <TouchableOpacity style={styles.containItemModal}
                // onPress={() => onTakePhoto && onTakePhoto()}
                >
                    <View style={styles.containIconModal}>
                        <Icon
                            size={25}
                            color={'black'}
                            name="info-outline"></Icon>
                    </View>
                    <Text style={styles.txtModal}>View Long's Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containItemModal}
                // onPress={() => onUploadPhoto && onUploadPhoto()}
                >
                    <View style={styles.containIconModal}>
                        <Icon
                            size={25}
                            color={'black'}
                            name="flag-outline"></Icon>
                    </View>
                    <Text style={styles.txtModal}>Report Long</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containItemModal}
                // onPress={() => onUploadPhoto && onUploadPhoto()}
                >
                    <View style={styles.containIconModal}>
                        <Icon
                            size={25}
                            color={'black'}
                            name="slash-outline"></Icon>
                    </View>
                    <Text style={styles.txtModal}>Block Long</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.btnBetweenContent}>
                    <Text style={styles.txtContentButton}>{`View Long's Profile`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBetweenContent}>
                    <Text style={styles.txtContentButton}>{`Report Long`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBottomContent}>
                    <Text style={styles.txtContentButton}>{`Block Long`}</Text>
                </TouchableOpacity> */}
            </BottomModalSlide>
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

