import React from 'react'
import Job from './job'
import Const from '/src/const'
export default function JobController(props) {
    const { navigation } = props
    const onPressNext = () => {
        navigation.navigate(Const.NameScreens.Education)
    }
    return (
        <Job
            onPressNext={onPressNext}
        />
    )
}

