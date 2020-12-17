import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
import AnimLottieView from '/src/components/UI/animLottieView'


const EmptyComponent = () => {
    return (
        <View style={styles.containEmpty}>
            <AnimLottieView
                source={require('/src/assets/lotties/8863-waiting.json')} />
        </View>
    )
}

const COLOR = Themes.Colors.PINK_DARK
export default function editLocation(props) {
    const { onPressBack, dataLocation, onPressItemLocation } = props

    const [latitudeSelect, setLatitudeSelect] = useState(null)

    const onPressItem = (item) => {
        const { latitude } = item
        setLatitudeSelect(latitude)
        onPressItemLocation && onPressItemLocation(item)
    }

    const renderItemLocation = ({ item, index }) => {
        const { label, latitude } = item
        let isSelect = false
        if (latitude === latitudeSelect) {
            isSelect = true
        }

        return (
            <TouchableOpacity style={styles.containItem}
                onPress={() => onPressItem(item)}
            >
                <View style={[styles.containIcon, isSelect && { borderColor: COLOR }]}>
                    <Icon
                        style={styles.icon}
                        name={'pin-outline'}
                        size={25}
                        color={!isSelect ? Themes.Colors.GRAY_BRIGHT_II : COLOR}
                    />
                </View>

                <Text style={[styles.txtContent, isSelect && { color: COLOR }]}>{label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <ButtonBack
                onPress={onPressBack}
                title={'Edit Location'}
            />
            <View style={styles.containContent}>
                <Text style={styles.txtTitle}>Results Your Near Location</Text>
                <FlatList
                    data={dataLocation}
                    style={styles.flatList}
                    keyExtractor={e => e.latitude.toString()}
                    renderItem={renderItemLocation}
                    ListEmptyComponent={EmptyComponent}
                    contentContainerStyle={{ flexGrow: 1 }}
                />
            </View>
        </View>
    )
}

const MARGIN = 12
const styles = StyleSheet.create({
    containEmpty: {
        flex: 1,
    },
    flatList: {
        marginTop: MARGIN,
        flex: 1,
    },
    containIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        marginHorizontal: MARGIN,
        borderColor: Themes.Colors.GRAY_BRIGHT_II,
    },
    icon: {
    },
    containItem: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 10,
        ...Themes.Styles.shadowButton
    },
    containContent: {
        flex: 1,
    },
    txtTitle: {
        fontSize: 17,
        marginTop: MARGIN,
        marginLeft: MARGIN,
        fontFamily: Themes.FontFamily.FontBoldSemi,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
    txtContent: {
        fontSize: 15,
        fontFamily: Themes.FontFamily.FontMediumDefault,
        color: Themes.Colors.GRAY_BRIGHT_I
    }
})
