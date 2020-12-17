import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import Icon from '/src/components/UI/icon'
import AnimLottieView from '/src/components/UI/animLottieView'
const renderItemLocation = ({ item, index }) => {
    const { label } = item
    console.log(label)

    return (
        <View style={styles.containItem}>
            <View style={styles.containIcon}>
                <Icon
                    style={styles.icon}
                    name={'pin-outline'}
                    size={25}
                    color={Themes.Colors.GRAY_BRIGHT_II}
                />
            </View>

            <Text style={styles.txtContent}>{label}</Text>
        </View>
    )
}

const EmptyComponent = () => {
    return (
        <View style={styles.containEmpty}>
            <AnimLottieView
                source={require('/src/assets/lotties/8863-waiting.json')} />
        </View>
    )
}

export default function editLocation(props) {
    const { onPressBack, dataLocation } = props
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
