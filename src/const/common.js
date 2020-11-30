
import { Dimensions, Platform } from 'react-native'

import ExtraDimensions from 'react-native-extra-dimensions-android';

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Platform.OS === "ios"
    ? Dimensions.get("window").height
    : ExtraDimensions.get("REAL_WINDOW_HEIGHT");

export const MAX_LEN_PASSWORD = 40
export const MIN_LEN_PASSWORD = 6

export const PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

