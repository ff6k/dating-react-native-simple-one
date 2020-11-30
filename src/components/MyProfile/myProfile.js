
import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import ButtonBack from '/src/components/UI/buttonBack'
import Themes from '/src/themes'
import InformationContent from './SubComponent/informationContent'
import MyVicesContent from './SubComponent/myVicesContent'
import MyVirtuesContent from './SubComponent/myVirtuesContent'
import MyVitalsContent from './SubComponent/myVitalsContent'
import ImageItem from '/src/components/UI/imageItem'
import AnimLottieView from '/src/components/UI/animLottieView'

const headerComponent = (onPressBack) => {
    return (
        <View>
            <ButtonBack
                onPress={onPressBack}
                title={"Edit Profile"}
            />
            <Text style={styles.headerText}>Photos Show</Text>
            <Text style={styles.detailHeader}>Your photos here will be displayed in your profile swipe.</Text>
        </View>
    )
}
const footerComponent = () => {
    return (
        <View>
            <Text style={styles.headerText}>Your Information</Text>
            <InformationContent />
            <Text style={styles.headerText}>Your Virtues</Text>
            <MyVirtuesContent />
            <Text style={styles.headerText}>Your Vitals</Text>
            <MyVitalsContent />
            <Text style={styles.headerText}>Your Vices</Text>
            <MyVicesContent />
        </View>
    )
}

const imageList = (item) => {
    if (item !== undefined) {
        const { url } = item
        if (url === undefined) {
            return <ImageItem />
        }
        else {
            return <ImageItem uri={url} />
        }
    }
}

const emptyComponent = () => {
    return (
        <View style={{ height: 150 * 3 + 15, alignItems: 'center', justifyContent: 'center' }}>
            <AnimLottieView source={require('/src/assets/lotties/8863-waiting.json')} />
        </View>
    )
}

export default function myProfile(props) {
    const { onPressBack, data } = props
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data !== null ? data.photos : undefined}
            renderItem={({ item }) => imageList(item)}
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            ListEmptyComponent={emptyComponent}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            ListFooterComponent={footerComponent}
            ListHeaderComponent={() => headerComponent(onPressBack)}
        />
    )
}

const styles = StyleSheet.create({
    detailHeader: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: Themes.FontFamily.FontThinDefault,
        marginBottom: 10
    },
    containerListItemImage: {
    },

    containImage: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    headerText: {
        fontSize: 16,
        color: Themes.Colors.PINK,
        fontFamily: Themes.FontFamily.FontBoldDefault,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },
})
