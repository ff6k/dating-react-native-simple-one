import React from 'react'
import Gender from './gender'
import Const from '/src/const'
export default function GenderController(props) {
    const { route, navigation } = props
    console.log("🚀 ~ file: gender.controller.js ~ line 6 ~ GenderController ~ route", route)
    const params = route.params

    let genderTemp = ""
    const onPressBack = () => {
        navigation.goBack()
    }

    const onPressNext = () => {
        navigation.navigate(Const.NameScreens.Picture, { ...params, gender: genderTemp })
    }

    const getGender = (gender) => {
        genderTemp = gender
    }
    return (
        <Gender
            onPressBack={onPressBack}
            onPressNext={onPressNext}
            getGender={getGender}
        />
    )
}

