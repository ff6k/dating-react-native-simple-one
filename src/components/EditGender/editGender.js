import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
export default function editGender() {
    return (
        <View>
            <ButtonBack
                title={'I Am'}
            />
            <TouchableOpacity style={[styles.containContent, { marginTop: 20 }]}>
                <Text style={styles.txtContent}>Man</Text>
                <Icon
                    name={'checkmark'}
                    size={25}
                    color={Themes.Colors.PINK_DARK}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containContent}>
                <Text style={styles.txtContent}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.containContent, styles.btnBottom]}>
                <Text style={styles.txtContent}>Other</Text>
            </TouchableOpacity>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    btnBottom: {
        // ...Themes.Styles.shadowButton
    },
    containFooter: {
    },
    containContent: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 1.3
    },
    txtContent: {
        fontSize: 15,
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontMediumDefault
    }
})
