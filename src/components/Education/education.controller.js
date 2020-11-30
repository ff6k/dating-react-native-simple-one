import React from 'react'
import Education from './education'
import Const from '/src/const'
export default function EducationController(props) {
    const { navigation } = props
    const onPressNext = () => {
        navigation.navigate(Const.NameScreens.Politics)
    }
    return (
        <Education
            onPressNext={onPressNext}
        />
    )
}
