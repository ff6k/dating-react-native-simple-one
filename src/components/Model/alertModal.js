import React, { useState } from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import Const from '/src/const'
const App = (props) => {
    const { visible, title, detail, textButton, colorButton, onPressButton, urlImage } = props

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {urlImage ? <Image
                        style={styles.imgIco}
                        source={urlImage} />
                        :
                        <Ionicons name="checkmark-circle"
                            color={Themes.Colors.GREEN_BRIGHT_I}
                            style={styles.circleCheck}></Ionicons>
                    }
                    <Text style={styles.txtTitle}>{title}</Text>
                    <Text style={styles.txtDetail}>{detail}</Text>
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: colorButton }}
                        onPress={() => onPressButton && onPressButton()}
                    >
                        <Text style={styles.textStyle}>{textButton}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
};

const SIZE_IMAGE = 60
const styles = StyleSheet.create({
    circleCheck: {
        fontSize: SIZE_IMAGE + 15,
        marginBottom: 20
    },
    txtDetail: {
        fontSize: 15,
        color: Themes.Colors.GRAY_BRIGHT,
        marginBottom: 20,
        textAlign: 'center'
    },
    txtTitle: {
        fontSize: 20,
        color: Themes.Colors.GRAY_DARK,
        marginBottom: 10
    },
    imgIco: {
        width: SIZE_IMAGE, height: SIZE_IMAGE, marginBottom: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 10,
        width: Const.Common.deviceWidth - 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default App;
