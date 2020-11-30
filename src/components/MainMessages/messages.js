import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import HeaderApp from '/src/components/UI/headerApp'
import ButtonSend from '/src/components/UI/buttonSend'
import { FloatingAction } from "react-native-floating-action";
import DatingModal from '/src/components/Model/datingModal'
import BottomHalfModel from '/src/components/Model/bottomHalfModel'
import Themes from '/src/themes'
import { withTranslation } from 'react-i18next';
import ItemConversition from '/src/components/UI/itemConversition'
import { color } from 'react-native-reanimated';

const ROLE_SENDER = "1"
const ROLE_RECEIVER = "0"

const data = [
    {
        id: "1",
        role: ROLE_SENDER,
        message: "có làm thì mới có ăn"
    },
    {
        id: "2",
        role: ROLE_SENDER,
        message: "người anh em cho xin cái địa chỉ"
    },
    {
        id: "3",
        role: ROLE_RECEIVER,
        message: "thằng zo zăn hoá"
    },
    {
        id: "4",
        role: ROLE_RECEIVER,
        message: "người anh em cho xin cái địa chỉ, người anh em cho xin cái địa chỉ, người anh em cho xin cái địa chỉ,người anh em cho xin cái địa chỉ"
    },
]

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

function Messages(props) {
    const { t, onPressBack } = props
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleModalBottom, setIsVisibleModalBottom] = useState(false)
    const [newValue, setNewValue] = useState('')
    const [height, setHeight] = useState(50)
    const [isVisibleButton, setIsVisibleButton] = useState(true)
    const [isVisibleTextInput, setIsVisibleTextInput] = useState(true)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const renderItemChat = (item, index) => {
        return <ItemConversition item={item} />
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

    const onPressMenu = () => {
        setIsVisibleModalBottom(!isVisibleModalBottom)
    }

    return (
        <View style={{ flex: 1 }}>
            <HeaderApp
                onPressDates={onPressDates}
                onPressMenu={onPressMenu}
                onPressBack={onPressBack}
            />
            <FlatList style={{ flex: 1 }}
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => renderItemChat(item, index)} />

            <View style={[styles.containerFooter, { height: height }, !isVisibleButton && styles.containerVisible]}>
                <TextInput
                    placeholder="New message"
                    onChangeText={(value) => setNewValue(value)}
                    editable={isVisibleTextInput}
                    style={[styles.inpMessage, {
                        height: height,
                    }]}
                    multiline={true}
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
            {/* <DatingModal isVisible={isVisible} setIsVisible={setIsVisible} /> */}
            <BottomHalfModel
                numberRow={4}
                isVisible={isVisibleModalBottom} setVisibleModel={setIsVisibleModalBottom}
            >
                <TouchableOpacity style={styles.btnBetweenContent}>
                    <Text style={styles.txtContentButton}>{`View Long's Profile`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBetweenContent}>
                    <Text style={styles.txtContentButton}>{`Report Long`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBottomContent}>
                    <Text style={styles.txtContentButton}>{`Block Long`}</Text>
                </TouchableOpacity>
            </BottomHalfModel>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default withTranslation()(Messages)
// export default Messages

