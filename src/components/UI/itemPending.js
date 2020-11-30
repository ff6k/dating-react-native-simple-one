import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Themes from '/src/themes'
export default function itemPending() {
    return (
        <ScrollView style={styles.container}>
            <Image
                resizeMode={'stretch'}
                style={styles.image}
                source={{ uri: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_02_180_34912744/288e03366d75842bdd64.jpg' }} />
            <View style={styles.containContent}>
                <View style={styles.containTittle}>
                    <Text style={styles.txtTitle}>Voice call request received from Long</Text>
                </View>
                <View style={styles.containTime}>
                    <MaterialIcons style={styles.icoTime}
                        name="today" />
                    <Text style={styles.txtTime}>Thursday,Dec 13 @ 09:55 PM</Text>
                </View>
                <View style={styles.containButton}>
                    <TouchableOpacity style={styles.containReschedule}>
                        <Text style={styles.txtReschedule}>ReSchedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.containIcon, { borderColor: 'green' }]}>
                        <Ionicons name="checkmark" style={[styles.icoHandle, { color: 'green' }]}></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.containIcon, { borderColor: 'red' }]}>
                        <Ionicons name="close" style={[styles.icoHandle, { color: 'red' }]}></Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={styles.containFooter}>
                    <TouchableOpacity>
                        <Text style={styles.txtFooter}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txtFooter}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txtFooter: {
        fontSize: 17,
        color: Themes.Colors.PINK_DARK
    },
    containFooter: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    icoHandle: {
        fontSize: 30
    },
    containIcon: {
        borderWidth: 2,
        justifyContent: 'center', alignItems: 'center',
        height: 50, width: 50, borderRadius: 50 / 2
    },
    txtReschedule: {
        fontSize: 17, color: Themes.Colors.GRAY_BRIGHT_I
    },
    containReschedule: {
        borderWidth: 1, borderColor: Themes.Colors.GRAY_DARK, borderRadius: 5,
        width: '65%', height: 50, justifyContent: 'center', alignItems: 'center',
    },
    containButton: {
        flex: 2, flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', flexDirection: 'row'
    },
    txtTime: {
        color: "#548EB2", fontWeight: 'bold', fontSize: 18
    },
    icoTime: {
        fontSize: 25, color: Themes.Colors.GRAY_DARK, marginRight: 10
    },
    containTime: {
        flex: 1, flexDirection: 'row', alignItems: 'center'
    },
    txtTitle: {
        fontSize: 20, fontWeight: 'bold'
    },
    containTittle: {
        flex: 1, justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    image: {
        width: "100%", height: 400
    },
    containContent: {
        height: 180, marginHorizontal: 20
    }
})
