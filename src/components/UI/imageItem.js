import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Themes from '/src/themes'
import LinearGradientCircleButton from '/src/components/UI/linearGradientCircleButton'
import Icon from '/src/components/UI/icon'
import Const from '/src/const'

export default function ImageItem(props) {
    const { uri } = props
    return (
        <View style={{ width: Const.Common.deviceWidth / 3 - 15 }}>
            {uri ? <Image source={{ uri: uri }} style={styles.containImageItem} /> :
                <View style={[styles.containImageItem,
                {
                    backgroundColor: Themes.Colors.GRAY_BRIGHT_IV,
                    borderWidth: 1, borderStyle: 'dashed',
                    borderColor: Themes.Colors.GRAY_BRIGHT_III
                }]}>
                </View>
            }
            <LinearGradientCircleButton
                style={{ ...Themes.Styles.circleAddImageSmall }}
            >
                <Icon name="plus" color={'white'} size={20}></Icon>
            </LinearGradientCircleButton>
            {!uri
                ? <LinearGradientCircleButton
                    style={{ ...Themes.Styles.circleAddImageSmall }}
                >
                    <Icon name="plus" color={'white'} size={20}></Icon>
                </LinearGradientCircleButton>
                : <View style={[{ ...Themes.Styles.circleAddImageSmall }, { backgroundColor: 'white' }]}>
                    <Icon name="close-outline" color={Themes.Colors.PINK_DARK} size={20}></Icon>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containImageItem: {
        width: Const.Common.deviceWidth / 3 - 15,
        height: 150,
        borderRadius: 10,
        marginBottom: 10
    },
})
