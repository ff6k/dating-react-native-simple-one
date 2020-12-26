import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, TouchableOpacity }
    from 'react-native';
import Themes from '/src/themes'
import Utils from '/src/utils'
const SCREEN_WIDTH = Dimensions.get('window').width

import Icon from '/src/components/UI/icon'

const STATUS = {
    LIKE: "Like",
    UNLIKE: "Unlike"
}

const SIZE_IMAGE_PER = 95
let current = 0

const Footer = (props) => {
    const { onPressInfo, data } = props
    return (
        <View style={styles.containFooter}>
            <View style={styles.containInfo}>
                <Text style={styles.txtName}>{data && data[current].name}</Text>
                <Text style={styles.txtOlds}>{data && Utils.Calculator.getOldYear(data[current].dateOfBirth)}</Text>
                <TouchableOpacity style={styles.containIcoInfo}
                    onPress={() => onPressInfo && onPressInfo()}
                >
                    <Icon name="info-outline" size={22} color={"white"}></Icon>
                </TouchableOpacity>
            </View>
            <View style={styles.containSubInfo}>
                <Text style={styles.txtSubInfo}>{data && data[current].location}</Text>
            </View>
        </View>
    )
}
const TabSwipe = (props) => {
    const { length, currentIndexPicture } = props
    return (<View style={{
        backgroundColor: Themes.Colors.GRAY_BRIGHT_I,
        width: `${SIZE_IMAGE_PER}%`, height: 8, position: 'absolute', zIndex: 1,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',

    }}>
        <View style={{
            backgroundColor: Themes.Colors.GRAY_BRIGHT_IV,
            width: `${(currentIndexPicture + 1) * 100 / length + 1}%`,
            height: '100%',
            borderRadius: 10,
        }}>
        </View>
    </View>)
}
export default class ImageSwipe extends React.Component {

    constructor(props) {
        super(props)
        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: current,
            currentIndexPicture: 0
        }
        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })

    }

    backPicture = () => {
        const { currentIndexPicture, currentIndex } = this.state
        if (currentIndexPicture > 0) {
            this.setState({ currentIndexPicture: currentIndexPicture - 1 })
        }
    }

    nextPicture = () => {
        const { currentIndexPicture, currentIndex } = this.state
        const length = this.props.data[currentIndex].photos.length
        if (currentIndexPicture < length - 1) {
            this.setState({ currentIndexPicture: currentIndexPicture + 1 })
        }
    }

    checkIsSwipe = (evt) => {
        const { locationX } = evt.nativeEvent
        if (locationX < SCREEN_WIDTH / 2) {
            this.backPicture()
        } else {
            this.nextPicture()
        }
    }


    handleSwipe = () => {
        if (this.state.currentIndex === this.props.data.length - 3) {
            this.props.updateData()
        }
        this.setState({ currentIndexPicture: 0 })
        if (this.state.currentIndex + 1 < this.props.data.length) {
            this.props.getUserCurrent && this.props.getUserCurrent(this.props.data[this.state.currentIndex + 1].id, this.state.currentIndex + 1)
        } else {
            this.props.getUserCurrent && this.props.getUserCurrent(null)
        }
    }

    //TODO: handle when like/unlike
    stateSwipe = (state) => {
        this.handleSwipe()
        switch (state) {
            case STATUS.LIKE:
                this.props.onLike()
                break;
            case STATUS.UNLIKE:
                break;
        }
    }

    UNSAFE_componentWillMount() {
        let count = 0
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                count++
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (count < 10) {
                    this.checkIsSwipe(evt)
                }
                count = 0
                if (gestureState.dx > 120) {
                    this.stateSwipe(STATUS.LIKE)
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
                        useNativeDriver: true
                    }).start(() => {
                        current = this.state.currentIndex + 1
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dx < -120) {
                    this.stateSwipe(STATUS.UNLIKE)
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
                        useNativeDriver: true
                    }).start(() => {
                        current = this.state.currentIndex + 1
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4,
                        useNativeDriver: true
                    }).start()
                }
            }
        })
    }


    componentDidUpdate() {
        if (this.props.isSwipeRight) {
            this.position.setValue({ x: 0, y: 0 })
            Animated.spring(this.position, {
                toValue: { x: SCREEN_WIDTH + 100, y: -26 },
                useNativeDriver: true
            }).start(() => {
                current = this.state.currentIndex + 1

                this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                    this.position.setValue({ x: 0, y: 0 })
                })
            })
            this.handleSwipe()
        }
        if (this.props.isSwipeLeft) {
            this.position.setValue({ x: 0, y: 0 })
            Animated.spring(this.position, {
                toValue: { x: -SCREEN_WIDTH - 100, y: 26 },
                useNativeDriver: true
            }).start(() => {
                current = this.state.currentIndex + 1

                this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                    this.position.setValue({ x: 0, y: 0 })
                })
            })
            this.handleSwipe()
        }
    }

    renderUsers = () => {
        const { t } = this.props
        let length
        if (this.state.currentIndex < this.props.data.length) {
            length = this.props.data[this.state.currentIndex].photos.length
        }
        return this.props.data.map((item, index) => {
            if (index < this.state.currentIndex) {
                return null
            }
            else if (index == this.state.currentIndex) {

                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id} style={[this.rotateAndTranslate, styles.containerAnim]}>
                        <Animated.View style={[{ opacity: this.likeOpacity }, styles.animLike]}>
                            <Text style={styles.txtLike}>{t("LIKE")}</Text>
                        </Animated.View>

                        <Animated.View style={[{ opacity: this.dislikeOpacity }, styles.animNope]}>
                            <Text style={styles.txtNope}>{t("NOPE")}</Text>
                        </Animated.View>
                        <TabSwipe length={length} currentIndexPicture={this.state.currentIndexPicture} />
                        <Image
                            style={styles.imgSwipe}
                            source={{ uri: item.photos[this.state.currentIndexPicture].url }} />
                        <Footer onPressInfo={this.props.onPressInfo} {...this.props} />
                    </Animated.View>
                )
            }
            else {
                return (
                    <Animated.View
                        key={item.id} style={[{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                        }, styles.containerAnim]}>
                        <Animated.View style={[{ opacity: 0 }, styles.animLike]}>
                            <Text style={styles.txtLike}>{t("LIKE")}</Text>
                        </Animated.View>

                        <Animated.View style={[{ opacity: 0 }, styles.animNope]}>
                            <Text style={styles.txtNope}>{t("NOPE")}</Text>
                        </Animated.View>
                        <TabSwipe length={length} currentIndexPicture={0} />
                        <Image
                            style={styles.imgSwipe}
                            source={{ uri: item.photos[0].url }} />
                        <Footer />
                    </Animated.View>
                )
            }
        }).reverse()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.renderUsers()}
                </View>
            </View>

        );
    }
}
const txtSwipe = {
    borderWidth: 1, fontSize: 25, padding: 10, fontFamily: Themes.FontFamily.FontBoldSemi
}
const styles = StyleSheet.create({
    containIcoInfo: {
        marginTop: 7, marginLeft: 5
    },
    containSubInfo: {
        marginTop: 5
    },
    txtSubInfo: {
        fontSize: 20, color: 'white', fontFamily: Themes.FontFamily.FontThinDefault
    },
    txtOlds: {
        fontSize: 22, color: 'white', marginLeft: 7, marginTop: 5, fontFamily: Themes.FontFamily.FontMediumDefault
    },
    containInfo: {
        flexDirection: "row", alignItems: 'center'
    },
    containFooter: {
        position: 'absolute', bottom: 50, left: 30
    },
    txtName: {
        fontSize: 30, color: 'white', fontFamily: Themes.FontFamily.FontBoldSemi
    },
    imgSwipe: {
        height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 20
    },

    txtNope: {
        ...txtSwipe, borderColor: 'red', color: 'red',
    },
    animNope: {
        transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000
    },
    txtLike: {
        ...txtSwipe, borderColor: 'green', color: 'green'
    },
    animLike: {
        transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000
    },
    containerAnim: {
        height: '100%', width: '100%', padding: 10, position: 'absolute'
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
