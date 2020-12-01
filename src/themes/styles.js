import * as Const from './const'
import * as Colors from './colors'
import * as FontFamily from './fontFamily'
import ConstDevices from '/src/const'
export const shadowButton = {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
}

export const BtnBetweenContent = {
    height: 60,
    backgroundColor: Const.COLOR_MODAL,
    borderTopWidth: Const.BORDER_WIDTH_BUTTON,
    borderTopColor: Const.COLOR_BORDER_BUTTON,
    borderBottomWidth: Const.BORDER_WIDTH_BUTTON,
    borderBottomColor: Const.COLOR_BORDER_BUTTON,
    justifyContent: 'center'
}

export const SpinnerTextStyle = {
    color: '#FFF'
}

export const ShadowCircleView = {
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    ...shadowButton
}

export const TxtContentButton = {
    alignSelf: 'center',
    color: Const.COLOR_CONTENT_MODAL,
    // fontWeight: 'bold',
    fontSize: Const.FONT_SIZE_BOTTOM - 3,
    fontFamily: FontFamily.FontBoldSemi
}

export const BtnBottomContent = {
    height: 60,
    backgroundColor: Const.COLOR_MODAL,
    borderBottomLeftRadius: Const.BORDER_BUTTON,
    borderBottomRightRadius: Const.BORDER_BUTTON,
    justifyContent: 'center'
}

export const TitleCard = {
    fontSize: 18,
    // fontWeight: 'bold',
    color: Colors.PINK,
    fontFamily: FontFamily.FontBoldSemi
}



export const TabMenu = {
    backgroundColor: 'gray',
    width: '100%',
    opacity: 0.4,
    flexDirection: 'row', height: 40,
    position: 'absolute', zIndex: 1,
    paddingHorizontal: 15,
    alignItems: 'center'
}

export const TextHeader = {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: FontFamily.FontBoldSemi
}

export const TextContent = {
    justifyContent: 'center',
    height: 50,
}
export const TextInput = {
    borderWidth: 1,
    marginHorizontal: Const.MARGIN_HORIZONTAL,
    height: Const.HEIGHT,
    // height: 50,
    paddingLeft: Const.PADDING_TEXT_INPUT,
    borderRadius: Const.BORDER_RADIUS,
    fontFamily: FontFamily.FontBoldSemi
}



export const Card = {
    backgroundColor: 'white', marginHorizontal: 15, height: 100,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    ...shadowButton
}

export const Button = {
    marginHorizontal: Const.MARGIN_HORIZONTAL,
    height: Const.HEIGHT,
    justifyContent: 'center',
    borderRadius: Const.BORDER_RADIUS,
}

export const ButtonBottom = {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 25,
}

export const txtTitle = {
    fontSize: Const.FONT_SIZE_V1,
    color: Colors.GRAY_BRIGHT,
    marginTop: Const.MARGIN_TOP_V1,
    fontFamily: FontFamily.FontBoldSemi
}

export const txtTitle2 = {
    fontSize: Const.FONT_SIZE_V1,
    color: Colors.PINK_DARK,
    marginBottom: Const.MARGIN_TOP_V1,
    fontFamily: FontFamily.FontBoldSemi
}

export const txtDetail = {
    fontSize: Const.FONT_SIZE,
    marginTop: 15,
    color: Colors.GRAY_BRIGHT_I,
    fontFamily: FontFamily.FontThinDefault
}

export const ButtonBottomNext = {
    backgroundColor: Colors.GRAY_BRIGHT_I,
    width: Const.BUTTON_NEXT,
    height: Const.BUTTON_NEXT,
    borderRadius: Const.BUTTON_NEXT / 2,
    justifyContent: 'center',
    position: 'absolute',
    right: Const.ABSOLUTE_BOTTOM,
    bottom: Const.ABSOLUTE_BOTTOM,
}

export const IconBack = {
    width: 30,
    margin: 5
}

export const IconSkip = {
    position: 'absolute',
    right: 10,
    top: 10
}

export const Title = {
    color: Colors.PINK,
    fontSize: Const.FONT_SIZE_V1,
    marginLeft: 20,
    fontFamily: FontFamily.FontBoldDefault
}

export const TextButton = {
    alignSelf: 'center',
    color: 'white',
    fontSize: Const.FONT_SIZE,
    fontFamily: FontFamily.FontBoldSemi
}

export const TextButtonBottom = {
    alignSelf: 'center',
    color: Colors.BLUE_BRIGHT,
    fontSize: Const.FONT_SIZE,
    // fontWeight: 'bold',
    fontFamily: FontFamily.FontBoldSemi
}
export const UnderlineBottom = {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_BRIGHT_II
}
//Top bar
export const HeaderBar = {
    backgroundColor: 'white',
    ...UnderlineBottom
}

export const HeaderApp = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 10,
    ...shadowButton
}

export const TitleBar = {
    alignSelf: 'center', color: 'black',
    color: Colors.GRAY_BRIGHT,
    fontFamily: FontFamily.FontBoldDefault
}

export const underlineScrollTab = {
    backgroundColor: Colors.PINK_DARK,
    height: 2
}

export const ActiveTextTab = {
    color: 'black',
    fontFamily: FontFamily.FontBoldDefault
}

export const linearGradientCircleAdd = {
    width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 60 / 2,
    alignSelf: 'center',

}

export const itemContent = {
    backgroundColor: Colors.GRAY_BRIGHT_V,
    // height: ConstDevices.HEIGHT_HEADER
}

export const circleAddImageSmall = {
    ...linearGradientCircleAdd,
    position: 'absolute',
    marginBottom: 10,
    width: 25, height: 25, right: -6, bottom: -6,
}

export const TextTab = {
    color: '#9C989D',
    fontFamily: FontFamily.FontBoldDefault,
}

export const ActiveTab = {
    backgroundColor: 'white', width: ConstDevices.Common.deviceWidth / 2
}

export const Tab = {
    backgroundColor: 'white', width: ConstDevices.Common.deviceWidth / 2
}

export const TabHeader = {
    backgroundColor: "white"
}

export const TextError = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15
}