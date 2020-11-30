import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Const from '/src/const'
import Modal from 'react-native-modal';

export default function datingModal(props) {
    const { isVisible, setIsVisible } = props
    return (
        <Modal
            deviceWidth={Const.Common.deviceWidth}
            deviceHeight={Const.Common.deviceHeight}
            isVisible={isVisible}
            onBackdropPress={() => setIsVisible(false)}
            onSwipeComplete={() => setIsVisible(false)}
            swipeDirection="down"
        >
            <View style={styles.containerModel}>
                <TouchableOpacity style={styles.containerImageDate}>
                    <Image
                        style={styles.imageDate}
                        source={require('/src/assets/images/colleagues_phone_call_127px.png')} />
                    <Text style={styles.txtDate}>Voice Call Date</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerImageDate}>
                    <Image
                        style={styles.imageDate}
                        source={require('/src/assets/images/couple_coffe_cup_127px.png')} />
                    <Text style={styles.txtDate}>In Personal Date</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerImageDate}>
                    <Image
                        style={styles.imageDate}
                        source={require('/src/assets/images/video_message_127px.png')} />
                    <Text style={styles.txtDate}>Video Call Date</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    txtDate: {
        fontWeight: 'bold',
        fontSize: 12
    },
    containerModel: {
        flexDirection: 'row',
        borderRadius: 20, height: 150, backgroundColor: 'white', paddingHorizontal: 20,
        alignItems: 'center'
    },
    containerImageDate: {
        flex: 1, alignItems: 'center'
    },
    imageDate: {
        width: 100, height: 100
    },
})
