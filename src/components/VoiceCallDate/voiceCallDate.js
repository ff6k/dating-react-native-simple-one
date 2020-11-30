import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import DateTimePicker from '/src/components/UI/dateTimePicker'
import ButtonNext from '/src/components/UI/buttonNext'

export default function voiceCallDate() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.containerHeader}>
                <Text style={styles.txtHeader}>Plan Voice Call Date</Text>
                <Ionicons name="close" size={40} color={Themes.Colors.PINK_DARK}></Ionicons>
            </View>
            <View style={styles.containContent}>
                <Text style={styles.txtTitle}>Suggest a new time to call will notify you if confirms</Text>
            </View>
            <View style={{ width: '80%', alignSelf: 'center', height: 200, justifyContent: 'center', marginVertical: 50 }}>
                <View style={{ width: '57%', alignSelf: 'center' }}>
                    <Image
                        style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                        source={require('/src/assets/images/my_avatar.jpg')} />
                    <Image
                        style={{
                            width: 100, height: 100, borderRadius: 100 / 2,
                            position: 'absolute', zIndex: 1, right: 0
                        }}
                        source={{ uri: "https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_02_180_34912744/288e03366d75842bdd64.jpg" }} />
                </View>
                <Ionicons name="heart"
                    style={styles.icoLove1}></Ionicons>
                <Ionicons name="heart"
                    style={styles.icoLove2}></Ionicons>
                <Ionicons name="heart"
                    style={styles.icoLove3}></Ionicons>
                <Ionicons name="heart"
                    style={styles.icoLove4}></Ionicons>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 23, fontWeight: 'bold', color: Themes.Colors.GRAY_DARK }}>Suggest at time</Text>
                <DateTimePicker
                    style={styles.inpDateTime}
                    styleText={styles.txtDateTime}
                    modeShow={'date'} />
            </View>
            <ButtonNext isGradient={true} isCheck={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    txtDateTime: {
        fontSize: Themes.Const.FONT_SIZE_V1 - 10,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
    inpDateTime: {
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5
    },
    icoLove4: {
        position: 'absolute', right: 10, bottom: 60, color: Themes.Colors.PINK, fontSize: 40, transform: [{ rotate: '15deg' }]
    },
    icoLove3: {
        position: 'absolute', bottom: 0, right: 0, color: Themes.Colors.PINK_BRIGHT_I, fontSize: 30, transform: [{ rotate: '-15deg' }]
    },
    icoLove2: {
        position: 'absolute', left: 10, top: 80, color: Themes.Colors.PINK_BRIGHT_I, fontSize: 30, transform: [{ rotate: '15deg' }]
    },
    icoLove1: {
        position: 'absolute', left: 0, top: 0, color: Themes.Colors.PINK, fontSize: 40, transform: [{ rotate: '-15deg' }]
    },
    txtTitle: {
        fontSize: 18, textAlign: 'center'
    },
    containContent: {
        marginTop: 30,
        width: '80%', alignSelf: 'center'
    },
    containerHeader: {
        marginTop: 30,
        marginHorizontal: 20,
        flexDirection: 'row', justifyContent: 'space-between',
    },
    txtHeader: {
        fontSize: 27,
        fontWeight: 'bold',
        color: Themes.Colors.PINK_DARK
    },
})
