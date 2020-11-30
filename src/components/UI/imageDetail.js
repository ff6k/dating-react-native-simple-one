import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { deviceHeight } from '/src/const/common'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes';
import Swiper from 'react-native-swiper'


const ImageSwipeComponent = (props) => {
    const { url } = props
    return (
        <View>
            <Image
                style={{ width: '100%', height: '100%', }}
                source={{ uri: url }} />
        </View>
    )
}
const ListImageSwipe = (arrImage) => {
    if (arrImage !== null) {
        return (
            arrImage.map(e => {
                return <ImageSwipeComponent
                    key={e.id}
                    url={e.url} />
            })
        )
    } else {
        return <View></View>
    }
}

export default function imageDetail(props) {
    const { onPressInfo, name,
        work, location, religiousBelief, job, education, politics, ethnicity,
        kids, height, drinking, smoking, familyPlans, arrImage
    } = props
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containHeader}>
                <Swiper style={styles.imgShow} showsButtons={true}>
                    {ListImageSwipe(arrImage)}
                </Swiper>
                <LinearGradient
                    onTouchStart={() => onPressInfo && onPressInfo()}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 2, y: 0 }}
                    colors={[Themes.Colors.PINK_DARK, 'orange']}
                    style={styles.containIcoDown}>
                    <Image
                        style={styles.imgIco}
                        source={require('/src/assets/images/down_127px.png')} />
                </LinearGradient>
            </View>
            <View style={styles.containFooter}>
                <View style={styles.containHeaderWrap}>
                    <View style={styles.containContent}>
                        <Text style={styles.txtName}>{name}</Text>
                        <View style={styles.containInfo}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="briefcase-outline"></Icon>
                            <Text style={styles.txtInfo}>{work}</Text>
                        </View>
                        <View style={styles.containInfo}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="navigation-2-outline"></Icon>
                            <Text style={styles.txtInfo}>{location}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Virtues</Text>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Religious belief</Text>
                        <Text style={styles.txtContent}>{religiousBelief}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Work</Text>
                        <Text style={styles.txtContent}>{work}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Job</Text>
                        <Text style={styles.txtContent}>{job}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Education</Text>
                        <Text style={styles.txtContent}>{education}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Politics</Text>
                        <Text style={styles.txtContent}>{politics}</Text>
                    </View>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Vitals</Text>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Ethnicity</Text>
                        <Text style={styles.txtContent}>{ethnicity}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Kids</Text>
                        <Text style={styles.txtContent}>{kids}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Family Plans</Text>
                        <Text style={styles.txtContent}>{familyPlans}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Height</Text>
                        <Text style={styles.txtContent}>{height}</Text>
                    </View>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Vices</Text>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Drinking</Text>
                        <Text style={styles.txtContent}>{drinking}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <Text style={styles.txtHeader}>Smoking</Text>
                        <Text style={styles.txtContent}>{smoking}</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const FONT_SIZE = 20
const MARGIN_BOTTOM = 20
const styles = StyleSheet.create({
    containHeaderWrap: {
        borderBottomWidth: 0.6, borderColor: Themes.Colors.GRAY_BRIGHT_II,
        marginBottom: MARGIN_BOTTOM
    },
    txtContent: {
        fontSize: FONT_SIZE,
        color: Themes.Colors.GRAY_BRIGHT,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    txtHeader: {
        fontSize: FONT_SIZE,
        color: Themes.Colors.GRAY_BRIGHT_III,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    containOther: {
        marginHorizontal: 20,
        borderBottomWidth: 0.6, borderColor: Themes.Colors.GRAY_BRIGHT_II,
        marginBottom: MARGIN_BOTTOM
    },
    containRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: MARGIN_BOTTOM
    },
    containContent: {
        marginLeft: 20,
    },
    containFooter: {
    },
    txtInfo: {
        fontSize: FONT_SIZE, color: Themes.Colors.GRAY_BRIGHT_I,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    icoInfo: {
        marginRight: 15
    },
    containInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: MARGIN_BOTTOM + 5
    },
    txtName: {
        fontSize: 26,
        color: Themes.Colors.GRAY_BRIGHT,
        marginBottom: MARGIN_BOTTOM,
        fontFamily: Themes.FontFamily.FontBoldSemi
    },
    imgIco: {
        width: 35, height: 35
    },
    containHeader: {
        height: deviceHeight * 4 / 7 + 30
    },
    containIcoDown: {
        width: 60, height: 60, borderRadius: 60 / 2,
        position: 'absolute',
        bottom: 0, right: 20, alignItems: 'center', justifyContent: 'center'
    },
    imgShow: {
        height: deviceHeight * 4 / 7
    },
    container: {
        height: 200,
    }
})
