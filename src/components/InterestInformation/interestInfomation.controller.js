import React from 'react'
import InterestInfomation from './interestInfomation'
let arrInterest = []

export default function InterestInfomationController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    const selectedItem = (item) => {
        if (arrInterest.indexOf(item) >= 0) {
            arrInterest = arrInterest.filter((ele) => {
                return ele != item;
            });
        } else {
            arrInterest.push(item)
        }
    }

    return (
        <InterestInfomation
            onPressBack={onPressBack}
            selectedItem={selectedItem}
            arrInterest={arrInterest}
        />
    )
}

