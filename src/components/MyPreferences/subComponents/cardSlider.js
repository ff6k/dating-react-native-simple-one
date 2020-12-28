import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '/src/components/UI/card'
import CustomHeader from '/src/components/UI/customHeader'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Themes from '/src/themes'
import CustomMarker from '/src/components/UI/CustomMarker'
import Const from '/src/const'

export default function cardSlider(props) {
    const { content, textSwitchLeft, textSwitchRight,
        isSwitch, onSlide, valueStart, valueEnd,
        minValue, maxValue

    } = props

    const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
    ] = useState([0, 100]);


    useEffect(() => {
        setNonCollidingMultiSliderValue([valueStart, valueEnd])
    }, [valueStart, valueEnd])

    const nonCollidingMultiSliderValuesChange = values => {
        onSlide && onSlide(values)
        setNonCollidingMultiSliderValue(values)
    }
    return (
        <Card
            content={content}
            styleContent={styles.containSlider}
            customHeader={<CustomHeader
                textSwitchLeft={textSwitchLeft}
                // textSwitchRight={textSwitchRight}
                textLeft={nonCollidingMultiSliderValue[0]}
                textRight={nonCollidingMultiSliderValue[1]}
                isSwitch={isSwitch}
            />}
        >
            <MultiSlider
                values={[
                    nonCollidingMultiSliderValue[0],
                    nonCollidingMultiSliderValue[1],
                ]}
                sliderLength={Const.Common.deviceWidth - 70}
                onValuesChange={nonCollidingMultiSliderValuesChange}
                min={minValue ? minValue : 0}
                max={maxValue ? maxValue : 100}
                step={1}
                allowOverlap={false}
                snapped
                minMarkerOverlapDistance={40}
                selectedStyle={{
                    backgroundColor: Themes.Colors.PINK,
                    height: 2.5
                }}
                customMarker={CustomMarker}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    containSlider: {
        alignSelf: 'center'
    },
})
