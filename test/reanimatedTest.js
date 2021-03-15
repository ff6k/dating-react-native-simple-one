import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
export default function Box() {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * 255 }],
        };
    });

    return (
        <>
            <Animated.View style={[{ backgroundColor: 'blue', width: 100, height: 100 }, animatedStyles]} />
            <Button
                onPress={() => {
                    offset.value = withSpring(Math.random(), {}, (finished) => {
                        if (finished) {
                            console.log("ANIMATION ENDED");
                        } else {
                            console.log("ANIMATION GOT CANCELLED");
                        }
                    });
                }}
                title="Move"
            />
        </>
    );
}