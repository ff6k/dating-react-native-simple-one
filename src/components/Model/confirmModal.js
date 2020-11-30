import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import Themes from '/src/themes'
import Const from '/src/const'
import { withTranslation } from 'react-i18next';


function ConfirmModal(props) {
    const { isVisible, setVisibleModel, title, textButtonLeft, txtButtonRight,
        onPressButtonLeft, onPressButtonRight } = props;

    return (
        <View >
            <Modal
                deviceWidth={Const.Common.deviceWidth}
                deviceHeight={Const.Common.deviceHeight}
                isVisible={isVisible}
                onSwipeComplete={() => setVisibleModel && setVisibleModel(false)}
                swipeDirection="down"
            >
                <View style={styles.container}>
                    <Text style={styles.txtContent}>{title}</Text>
                    <View style={styles.containBottom}>
                        <TouchableOpacity style={[styles.btnHandle, { borderRightWidth: 0.5, borderColor: '#939093' }]}
                            onPress={() => onPressButtonLeft && onPressButtonLeft()}
                        >
                            <Text style={styles.txtHandle}>{textButtonLeft}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnHandle}
                            onPress={() => onPressButtonRight && onPressButtonRight()}
                        >
                            <Text style={[styles.txtHandle, { color: 'red' }]}>{txtButtonRight}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    txtHandle: {
        fontSize: 20,
        color: '#0A84FF',
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    btnHandle: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    containBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        borderTopWidth: 0.5,
        borderColor: '#939093'
    },
    container: {
        marginHorizontal: 10,
        borderRadius: 20,
        paddingTop: 25,
        ...Themes.Styles.shadowButton
    },
    txtContent: {
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 30,
        fontFamily: Themes.FontFamily.FontBoldSemi
    }
})

export default withTranslation()(ConfirmModal)
