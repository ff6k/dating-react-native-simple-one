import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import Themes from '/src/themes'
import LinearGradientCircleButton from '/src/components/UI/linearGradientCircleButton'
import Icon from '/src/components/UI/icon'
import Const from '/src/const'
import AnimLottieView from '/src/components/UI/animLottieView'
export default function ImageItem(props) {
    const { uri, onPressAddImage, index, isLoading, onPressRemoveImage, isRemoving } = props
    return (
        <View style={{ width: Const.Common.deviceWidth / 3 - 15 }}>
            {uri ? <Image source={{ uri: uri }} style={styles.containImageItem} /> :
                <View style={[styles.containImageItem,
                {
                    backgroundColor: Themes.Colors.GRAY_BRIGHT_IV,
                    borderWidth: 1, borderStyle: 'dashed',
                    borderColor: Themes.Colors.GRAY_BRIGHT_III,
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
                    {isLoading && <AnimLottieView
                        style={{ width: 70, height: 70 }}
                        source={require('/src/assets/lotties/6217-loading.json')}
                    />}
                </View>
            }
            {!uri && !isLoading && !isRemoving
                && <LinearGradientCircleButton
                    onPress={() => onPressAddImage(index)}
                    style={{ ...Themes.Styles.circleAddImageSmall }}
                >
                    <Icon name="plus" color={'white'} size={20}></Icon>
                </LinearGradientCircleButton>}
            { uri && !isLoading && !isRemoving && <TouchableOpacity style={[{ ...Themes.Styles.circleAddImageSmall },
            { backgroundColor: 'white' }]}
                onPress={() => onPressRemoveImage(index)}>
                <Icon name="close-outline" color={Themes.Colors.PINK_DARK} size={20}></Icon>
            </TouchableOpacity>}
            {
                isRemoving && <AnimLottieView
                    style={{ width: 200, height: 200, position: 'absolute' }}
                    source={require('/src/assets/lotties/8640-loading.json')}
                />
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
