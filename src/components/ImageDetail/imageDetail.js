import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { deviceHeight } from '/src/const/common'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '/src/components/UI/icon'
import Themes from '/src/themes';
import Swiper from 'react-native-swiper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import InterestContentInfo from '/src/components/UI/interestContentInfo'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5'
import ButtonStatus from '/src/components/UI/buttonStatus'

const data = [
    { id: 31, label: 'Mountain Biking' },
    { id: 32, label: 'Snowmobiling' },
    { id: 33, label: 'Painting' },
    { id: 34, label: 'Grilling' },
    { id: 35, label: 'Surf Fishing' },
    { id: 36, label: 'Bartending' },
    { id: 37, label: 'Stamp Collecting' },
    { id: 38, label: 'Helping The Homeless' },
]
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
        work, location, religiousBelief, job, education, dateOfBirth, ethnicity, oldYear,
        kids, height, drinking, smoking, familyPlans, arrImage, gender, bio, onPressLike, isShowOffButton
    } = props
    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
        >
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
                    <Icon
                        size={35}
                        color={'white'}
                        name={'arrowhead-down'}
                    />
                </LinearGradient>
            </View>
            <View style={styles.containFooter}>
                <View style={styles.containHeaderWrap}>
                    <View style={styles.containContent}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={[styles.txtName, { marginBottom: 0 }]}>{`${name}, ${oldYear}`}</Text>
                            {gender === 'male'
                                ? <SimpleLineIcons name={"symbol-male"} size={18} color={Themes.Colors.PINK_DARK} />
                                : <SimpleLineIcons name={"symbol-female"} size={18} color={Themes.Colors.PINK_DARK} />}
                        </View>
                        <View style={styles.containInfo}>
                            <FontAwesomeIcons
                                style={[styles.icoInfo, { marginLeft: 5 }]}
                                name={"birthday-cake"} size={Themes.Const.FONT_SIZE + 3} color={Themes.Colors.GRAY_BRIGHT_I} />
                            <Text style={styles.txtInfo}>{dateOfBirth}</Text>
                        </View>
                        <View style={styles.containInfo}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="pin-outline"></Icon>
                            <Text style={styles.txtInfo}>{location}</Text>
                        </View>
                        <InterestContentInfo
                            data={data}
                        />
                    </View>
                </View>
                <View style={styles.containTextBio}>
                    <Text style={styles.txtBio}>
                        {bio}
                    </Text>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Virtues</Text>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="star-outline"></Icon>
                            <Text style={styles.txtHeader}>Religious belief</Text>
                        </View>
                        <Text style={styles.txtContent}>{religiousBelief}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="google-outline"></Icon>
                            <Text style={styles.txtHeader}>Work</Text>
                        </View>
                        <Text style={styles.txtContent}>{work}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="briefcase-outline"></Icon>
                            <Text style={styles.txtHeader}>Job</Text>
                        </View>
                        <Text style={styles.txtContent}>{job}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="home-outline"></Icon>
                            <Text style={styles.txtHeader}>Education</Text>
                        </View>
                        <Text style={styles.txtContent}>{education}</Text>
                    </View>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Vitals</Text>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="people-outline"></Icon>
                            <Text style={styles.txtHeader}>Ethnicity</Text>
                        </View>
                        <Text style={styles.txtContent}>{ethnicity}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="smiling-face-outline"></Icon>
                            <Text style={styles.txtHeader}>Kids</Text>
                        </View>
                        <Text style={styles.txtContent}>{kids}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="clipboard-outline"></Icon>
                            <Text style={styles.txtHeader}>Family Plans</Text>
                        </View>
                        <Text style={styles.txtContent}>{familyPlans}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <Icon style={styles.icoInfo}
                                size={Themes.Const.FONT_SIZE + 10}
                                color={Themes.Colors.GRAY_BRIGHT_I}
                                name="pantone-outline"></Icon>
                            <Text style={styles.txtHeader}>Height</Text>
                        </View>
                        <Text style={styles.txtContent}>{height}</Text>
                    </View>
                </View>
                <View style={styles.containOther}>
                    <Text style={styles.txtName}>Vices</Text>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <FontAwesomeIcons
                                style={styles.icoInfo}
                                name={"wine-bottle"} size={Themes.Const.FONT_SIZE + 5} color={Themes.Colors.GRAY_BRIGHT_I} />
                            <Text style={styles.txtHeader}>Drinking</Text>
                        </View>
                        <Text style={styles.txtContent}>{drinking}</Text>
                    </View>
                    <View style={styles.containRow}>
                        <View style={styles.containHeaderContent}>
                            <FontAwesomeIcons
                                style={styles.icoInfo}
                                name={"smoking"} size={Themes.Const.FONT_SIZE + 3} color={Themes.Colors.GRAY_BRIGHT_I} />
                            <Text style={styles.txtHeader}>Smoking</Text>
                        </View>
                        <Text style={styles.txtContent}>{smoking}</Text>
                    </View>
                </View>
            </View>
            {isShowOffButton && <View style={styles.containFooterBottom}>
                {/* <ButtonStatus
                    onPress={() => onPressBack()}
                    color={Themes.Colors.YELLOW} size={25} nameFontAwesome5={"undo-alt"} /> */}
                {/* <ButtonStatus
                    onPress={onPressUnlike}
                    style={styles.icoBigger}
                    color={Themes.Colors.BROWN_DARK} size={55} name={"close"} /> */}
                {/* <ButtonStatus
                    onPress={() => onPressBack()}
                    color={Themes.Colors.PURPLE} size={30} name={"flash"} /> */}
                <ButtonStatus style={styles.icoBigger}
                    onPress={onPressLike}
                    color={Themes.Colors.GREEN_DARK} size={45} name={"heart"} />
                {/* <ButtonStatus
                    color={Themes.Colors.BLUE_DARK} size={30} name={"star"} /> */}
            </View>}

        </ScrollView>
    )
}

const FONT_SIZE = 16
const MARGIN_BOTTOM = 10
const SIZE = 60
const styles = StyleSheet.create({
    icoBigger: {
        width: SIZE, height: SIZE,
        borderRadius: SIZE / 2
    },
    containFooterBottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10,
    },
    txtBio: {
        fontSize: FONT_SIZE,
        color: 'black',
        fontFamily: Themes.FontFamily.FontThinDefault,
    },
    containTextBio: {
        borderBottomWidth: 0.6, borderColor: Themes.Colors.GRAY_BRIGHT_II,
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
    },
    containHeaderContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containHeaderWrap: {
        borderBottomWidth: 0.6, borderColor: Themes.Colors.GRAY_BRIGHT_II,
        // marginBottom: MARGIN_BOTTOM
    },
    txtContent: {
        fontSize: FONT_SIZE,
        color: Themes.Colors.GRAY_BRIGHT,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    txtHeader: {
        fontSize: FONT_SIZE,
        color: 'black',
        fontFamily: Themes.FontFamily.FontThinDefault,
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
        fontSize: FONT_SIZE, color: 'black',
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    icoInfo: {
        marginRight: 8
    },
    containInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: MARGIN_BOTTOM
    },
    txtName: {
        fontSize: 20,
        color: Themes.Colors.GRAY_BRIGHT,
        marginRight: 10,
        marginBottom: 10,
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
