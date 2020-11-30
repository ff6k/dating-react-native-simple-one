import React from 'react'
import Religious from './religious'
import Const from '/src/const'
export default function ReligiousController(props) {
    const { navigation } = props
    const onPressNext = () => {
        navigation.navigate(Const.NameScreens.Work)
    }
    return (
        <Religious
            onPressNext={onPressNext}
        />
    )
}

