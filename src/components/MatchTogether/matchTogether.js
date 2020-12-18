import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from '/src/components/UI/icon'
import Image from 'react-native-fast-image'
import Themes from '/src/themes'
import LinearGradient from 'react-native-linear-gradient';

const SIZE_ICON = 30
const COLOR_ICON = 'red'
const SIZE_IMAGE = 120
export default function MatchTogether(props) {
    const { onPressGoBack, onPressGoChat, nameMatched, urlPhotoMatched, urlPhotoMe } = props
    return (
        <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 2 }}
            style={{ flex: 1 }}
            colors={[Themes.Colors.PINK_DARK, 'orange']}>
            <View style={styles.containerHeader}>
                <Text style={styles.txtHeader}>It's a Match</Text>
            </View>
            <View style={styles.containContent}>
                <Text style={styles.txtTitle}>You and Me like each other</Text>
            </View>
            <View style={{ width: '80%', alignSelf: 'center', height: 200, justifyContent: 'center', marginVertical: 50 }}>
                <View style={{ width: '65%', alignSelf: 'center' }}>
                    <Image
                        style={{ width: SIZE_IMAGE, height: SIZE_IMAGE, borderRadius: SIZE_IMAGE / 2 }}
                        source={{ uri: urlPhotoMe }} />
                    <Image
                        style={{
                            width: SIZE_IMAGE, height: SIZE_IMAGE, borderRadius: SIZE_IMAGE / 2,
                            position: 'absolute', zIndex: 1, right: 0
                        }}
                        source={{ uri: urlPhotoMatched }} />
                </View>
                <Icon name="heart"
                    size={SIZE_ICON}
                    color={COLOR_ICON}
                    style={styles.icoLove1}></Icon>
                <Icon name="heart"
                    size={SIZE_ICON}
                    color={COLOR_ICON}
                    style={styles.icoLove2}></Icon>
                <Icon name="heart"
                    size={SIZE_ICON}
                    color={COLOR_ICON}
                    style={styles.icoLove3}></Icon>
                <Icon name="heart"
                    size={SIZE_ICON}
                    color={COLOR_ICON}
                    style={styles.icoLove4}></Icon>

            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => onPressGoChat && onPressGoChat()}
            >
                <Text style={styles.txtContent}>Chat with {nameMatched}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginTop: 10 }]}
                onPress={() => onPressGoBack && onPressGoBack()}
            >
                <Text style={styles.txtContent}>Go Back</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    txtContent: {
        fontSize: 16,
        color: 'white',
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    button: {
        backgroundColor: 'transparent',
        marginHorizontal: 30,
        paddingVertical: 15,
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: 'white',
        alignItems: 'center'
    },
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
        position: 'absolute', right: 10, bottom: 150, color: Themes.Colors.PINK, fontSize: 40, transform: [{ rotate: '15deg' }]
    },
    icoLove3: {
        position: 'absolute', bottom: 150 - 70, right: 0, color: Themes.Colors.PINK_BRIGHT_I, fontSize: 30, transform: [{ rotate: '-15deg' }]
    },
    icoLove2: {
        position: 'absolute', left: 10, top: 40, color: Themes.Colors.PINK_BRIGHT_I, fontSize: 30, transform: [{ rotate: '15deg' }]
    },
    icoLove1: {
        position: 'absolute', left: 0, bottom: 0, fontSize: 40, transform: [{ rotate: '-15deg' }]
    },
    txtTitle: {
        fontSize: 17, textAlign: 'center',
        color: 'white',
        fontFamily: Themes.FontFamily.FontMediumDefault
    },
    containContent: {
        width: '80%', alignSelf: 'center'
    },
    containerHeader: {
        marginTop: 70,
        alignItems: 'center'
    },
    txtHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
})
