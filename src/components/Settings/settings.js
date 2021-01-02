import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Themes from '/src/themes'
// import ButtonSettingItem from '/src/components/UI/buttonSettingItem'
import { withTranslation } from 'react-i18next';
import ConfirmModal from '/src/components/Model/confirmModal'
import FontAwesomeIcons from 'react-native-vector-icons/SimpleLineIcons'
import ButtonSetting from '/src/components/UI/buttonSetting'
import Utils from '/src/utils'
import Const from '/src/const'
function Settings(props) {
    const { t, onPressLogout, isShowConfirmModal, setIsShowConfirmModal,
        onPressMyProfile, onPressMyPreferences,
        onPressButtonLeft, onPressButtonRight, dataInfo } = props
    console.log(`dataInfo: ${JSON.stringify(dataInfo)}`);
    let nameTemp, emailTemp, dateOfBirthTemp, genderTemp, oldYearTemp, photoTemp
    if (dataInfo !== undefined) {
        const { name, email, dateOfBirth, gender, photos } = dataInfo
        nameTemp = name
        emailTemp = email
        dateOfBirthTemp = dateOfBirth
        genderTemp = gender
        oldYearTemp = Utils.Calculator.getOldYear(dateOfBirth)
        photoTemp = photos
        console.log(`photoTemp: ${photoTemp}`);
    }
    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.containHeader}>
                <View style={styles.containChild}>
                    <Image
                        style={styles.imgAvatar}
                        source={{
                            uri: photoTemp ? photoTemp[0].url : null
                        }} />
                    <View style={styles.containName}>
                        <Text style={styles.txtName}>{nameTemp}, {oldYearTemp}</Text>
                        {genderTemp === 'male' ? <FontAwesomeIcons name={"symbol-male"} size={18} color={Themes.Colors.PINK_DARK} /> :
                            <FontAwesomeIcons name={"symbol-female"} size={18} color={Themes.Colors.PINK_DARK} />}
                    </View>
                    <Text style={styles.txtDetail}>{emailTemp}</Text>
                    <View style={styles.containButton}>
                        <ButtonSetting
                            title={t("SETTINGS")}
                            style={styles.btnSetting}
                            name={"settings"}
                            isGradient={true}
                            onPress={onPressMyPreferences}
                        />
                        <ButtonSetting
                            onPress={onPressMyProfile}
                            title={t("EDIT INFO")}
                            style={styles.btnInfo}
                            isGradient={true}
                            name={"edit-2"}
                        />
                    </View>

                </View>



            </View>

            <TouchableOpacity style={styles.btnLogout}
                onPress={() => onPressLogout()}
            >
                <Text style={styles.txtSignOut}>{t("LOGOUT")}</Text>
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
        </ScrollView>
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
        // position: 'absolute',
        borderRadius: 30,
        alignSelf: 'center',
        // bottom: 15,
        marginTop: '50%',
        marginBottom: 10,
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
        ...Themes.Styles.shadowButton,
        height: 450
    },
    container: {
        backgroundColor: 'white',
        // height: 1000,

        // flex: 1
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