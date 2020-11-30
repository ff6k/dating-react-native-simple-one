import React from 'react'
import Work from './work'
import Const from '/src/const'
export default function WorkController(props) {
    const { navigation } = props
    const onPressNext = () => {
        navigation.navigate(Const.NameScreens.Job)
    }
    return (
        <Work
            onPressNext={onPressNext}
        />
    )
}

