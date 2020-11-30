import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import Themes from '/src/themes'
import Const from '/src/const'
import { withTranslation } from 'react-i18next';


function BottomHalfModel(props) {
    const { isVisible, setVisibleModel, t, children, numberRow } = props;

    return (
        <View >
            <Modal
                deviceWidth={Const.Common.deviceWidth}
                deviceHeight={Const.Common.deviceHeight}
                isVisible={isVisible}
                onSwipeComplete={() => setVisibleModel(false)}
                swipeDirection="down"
            >
                <View style={styles.container}>
                    <View style={[styles.containerContent, { height: numberRow * 60 + 11 }]}>
                        <View style={styles.containerHeader}>
                            <Text style={styles.txtHeader}>{t('Confirm action')}</Text>
                        </View>
                        {children}

                    </View>
                    <TouchableOpacity
                        style={[styles.btnCancel, { height: 60 }]}
                        onPress={() => setVisibleModel(false)}
                    >
                        <Text style={styles.txtCancel}>{t("Cancel")}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        marginLeft: 0,
        flex: 1,
    },
    containerContent: {

        // height: 270,
        backgroundColor: 'white',
        // opacity: 0.5,
        borderRadius: Themes.Const.BORDER_BUTTON,
    },
    containerHeader: {
        height: Themes.Const.HEIGHT_MODAL / Themes.Const.NUMBER_BUTTON,
        backgroundColor: Themes.Const.COLOR_MODAL,
        borderTopLeftRadius: Themes.Const.BORDER_BUTTON,
        borderTopRightRadius: Themes.Const.BORDER_BUTTON,
        justifyContent: 'center'
    },
    txtHeader: {
        alignSelf: 'center',
        color: Themes.Const.COLOR_HEADER_MODAL,
        fontSize: Themes.Const.FONT_SIZE,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },

    btnCancel: {
        backgroundColor: Themes.Const.COLOR_MODAL,

        marginTop: 5,
        borderRadius: Themes.Const.BORDER_BUTTON,
        justifyContent: 'center'
    },
    txtCancel: {
        alignSelf: 'center',
        color: Themes.Const.COLOR_CANCEL,
        fontSize: Themes.Const.FONT_SIZE_BOTTOM,
        fontFamily: Themes.FontFamily.FontBoldSemi
    }
})

export default withTranslation()(BottomHalfModel)
// export default BottomHalfModel
