import React from 'react'
import MyAlbums from './myAlbums'
export default function MyAlbumsController(props) {
    const { navigation } = props
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <MyAlbums
            onPressBack={onPressBack}
        />
    )
}

