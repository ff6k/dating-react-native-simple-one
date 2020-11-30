import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
// import ButtonSettingItem from '/src/components/UI/buttonSettingItem'
import { withTranslation } from 'react-i18next';
import ConfirmModal from '/src/components/Model/confirmModal'
import FontAwesomeIcons from 'react-native-vector-icons/SimpleLineIcons'
import ButtonSetting from '/src/components/UI/buttonSetting'

import Const from '/src/const'
function Settings(props) {
    const { t, onPressLogout, isShowConfirmModal, setIsShowConfirmModal,
        onPressMyProfile, onPressMyAlbums, onPressMyPreferences,
        onPressButtonLeft, onPressButtonRight } = props

    return (
        <View style={styles.container}>
            <View style={styles.containHeader}>
                <View style={styles.containChild}>
                    <Image
                        style={styles.imgAvatar}
                        source={{
                            uri:
                                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
                        }} />
                    <View style={styles.containName}>
                        <Text style={styles.txtName}>Long, 21</Text>
                        <FontAwesomeIcons name={"symbol-male"} size={18} color={Themes.Colors.PINK_DARK} />
                        {/* <FontAwesomeIcons name={"symbol-female"} size={18} color={Themes.Colors.PINK_DARK} /> */}
                    </View>
                    <Text style={styles.txtDetail}>Ho Chi Minh University of Technology and Education</Text>
                    <View style={styles.containButton}>
                        <ButtonSetting
                            title={"SETTINGS"}
                            style={styles.btnSetting}
                            name={"settings"}
                            onPress={onPressMyPreferences}
                        />

                        <ButtonSetting
                            onPress={onPressMyAlbums}
                            title={"YOUR PHOTOS"}
                            style={styles.btnAlbums}
                            name={"image-2"}
                            isGradient={true}
                        />
                        <ButtonSetting
                            onPress={onPressMyProfile}
                            title={"EDIT INFO"}
                            style={styles.btnInfo}
                            name={"edit-2"}
                        />
                    </View>

                </View>



            </View>

            <TouchableOpacity style={styles.btnLogout}
                onPress={() => onPressLogout()}
            >
                <Text style={styles.txtSignOut}>LOGOUT</Text>
            </TouchableOpacity>
            <ConfirmModal
                isVisible={isShowConfirmModal}
                setVisibleModel={setIsShowConfirmModal}
                title={"Are you sure you want to log out?"}
                textButtonLeft={"Cancel"}
                txtButtonRight={"Quit"}
                onPressButtonLeft={onPressButtonLeft}
                onPressButtonRight={onPressButtonRight}
            />
        </View>
    )
}

export default withTranslation()(Settings)

const SIZE = 120
const MARGIN = 10
const MARGIN_SETTING = 30
const styles = StyleSheet.create({
    txtSignOut: {
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontBoldDefault,
        color: Themes.Colors.PINK_BRIGHT
    },
    btnLogout: {
        backgroundColor: 'white',
        width: 250, height: 50,
        position: 'absolute',
        borderRadius: 30,
        alignSelf: 'center',
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        ...Themes.Styles.shadowButton
    },
    btnSetting: {
        flex: 1
    },
    btnAlbums: {
        // alignItems: 'center'
        flex: 1,
        marginTop: 50
    },
    btnInfo: {
        flex: 1
    },
    containButton: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20
    },
    containName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtDetail: {
        fontSize: 16,
        fontFamily: Themes.FontFamily.FontThinDefault,
        textAlign: 'center'
    },
    txtName: {
        fontSize: 20,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        marginVertical: 10,
        marginRight: 5,
    },
    containChild: {
        flex: 1,
        transform: [{ scaleX: 0.5 }],
        alignItems: 'center'
    },
    containHeader: {
        height: Const.Common.deviceHeight - 300,
        // height: 400,
        width: '100%',
        transform: [{ scaleX: 2 }],
        borderBottomStartRadius: 500,
        borderBottomEndRadius: 500,
        overflow: 'hidden',
        ...Themes.Styles.shadowButton
    },
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    containerInfor: {
        marginLeft: MARGIN
    },
    txtGender: {
        fontSize: 15,
        marginTop: 7,
        color: Themes.Colors.GRAY_BRIGHT,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    header: {
        height: 150, justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtInfo: {
        fontSize: 25,
        color: Themes.Colors.GRAY_DARK,
        fontFamily: Themes.FontFamily.FontBoldDefault
    },
    imgAvatar: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        // marginRight: MARGIN,
        marginTop: 40,
    }
})