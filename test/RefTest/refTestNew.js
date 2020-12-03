import React from "react";
import { View, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const RefTestNew = React.forwardRef((props, ref) => {
    console.log('render refTestNew')

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000"
            }}
        >
            <RBSheet
                ref={ref}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                {props.children}
            </RBSheet>
        </View>
    )
});
export default RefTestNew