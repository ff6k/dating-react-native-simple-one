import React from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Themes from '/src/themes'

const BottomModalSlide = React.forwardRef((props, ref) => {
    const { children, height, style } = props
    return (
        <View
            style={[{
                // flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }, { ...style }]}
        >
            <RBSheet
                ref={ref}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={height}
                customStyles={{
                    container: {
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15
                    },
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    },
                    draggableIcon: {
                        backgroundColor: Themes.Colors.GRAY_BRIGHT_II
                    }
                }}
            >
                {children}
            </RBSheet>
        </View>
    );
})

export default BottomModalSlide