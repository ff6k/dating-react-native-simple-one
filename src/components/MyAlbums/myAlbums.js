
let SampleData = [
    { id: '1', url: 'https://giupban.com.vn/wp-content/uploads/2019/09/hinh-anh-hot-girl-de-thuong-19.jpg', subTitle: 'Dance with' },
    { id: '2', url: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg' },
    { id: '3', url: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_02_180_34912744/288e03366d75842bdd64.jpg' },
    { id: '4', url: 'https://zicxa.com/hinh-anh/wp-content/uploads/2019/09/Tuy%E1%BB%83n-t%E1%BA%ADp-h%C3%ACnh-%E1%BA%A3nh-hot-girl-h%E1%BB%8Dc-sinh-Cute-d%E1%BB%85-th%C6%B0%C6%A1ng-11.jpg' },
    { id: '1', url: 'https://giupban.com.vn/wp-content/uploads/2019/09/hinh-anh-hot-girl-de-thuong-19.jpg', subTitle: 'Dance with' },
    { id: '2', url: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg' },
    { id: '3', url: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_02_180_34912744/288e03366d75842bdd64.jpg' },
    { id: '4', url: 'https://zicxa.com/hinh-anh/wp-content/uploads/2019/09/Tuy%E1%BB%83n-t%E1%BA%ADp-h%C3%ACnh-%E1%BA%A3nh-hot-girl-h%E1%BB%8Dc-sinh-Cute-d%E1%BB%85-th%C6%B0%C6%A1ng-11.jpg' }
    , { id: '1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTJOv9W4Y2R1Abevlo0NuyrOqIFEc41Wwzw&usqp=CAU', subTitle: 'Dance with' },
    { id: '2', url: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-hot-girl-dep_025104603.jpg' },
    { id: '3', url: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_02_180_34912744/288e03366d75842bdd64.jpg' },
    { id: '4', url: 'https://zicxa.com/hinh-anh/wp-content/uploads/2019/09/Tuy%E1%BB%83n-t%E1%BA%ADp-h%C3%ACnh-%E1%BA%A3nh-hot-girl-h%E1%BB%8Dc-sinh-Cute-d%E1%BB%85-th%C6%B0%C6%A1ng-11.jpg' }
]

import React, { useState } from 'react'
import { StyleSheet, ToastAndroid, View } from 'react-native'
import ImageLayout from "react-native-image-layout";
import ButtonAddImage from '/src/components/UI/buttonAddImage'
import ButtonBack from '/src/components/UI/buttonBack'
import Utils from '/src/utils'

export default function myAlbums(props) {
    const [isShowHeader, setIsShowHeader] = useState(true)
    const { onPressBack } = props
    const onPressTest = () => {
        setIsShowHeader(false)
        Utils.Toast.ToastShortTop('Swipe on top or bottom to back')
    }
    const onScrollClose = () => {
        setIsShowHeader(true)
    }

    const onLongPress = () => {
    }

    return (
        <View style={{ flex: 1 }}>
            {isShowHeader && <ButtonBack
                title={'My Photos'}
                onPress={onPressBack}
            />}
            <ImageLayout
                images={SampleData}
                // onEndReached={() => {
                //     // add more images when scroll reaches end
                // }}
                onPageSelected={() => onPressTest()}
                onSwipeDownReleased={() => onScrollClose()}
                onSwipeUpReleased={() => onScrollClose()}
                onLongPressImage={() => onLongPress()}
            />
            {isShowHeader && <ButtonAddImage />}
        </View>

    );
}

const styles = StyleSheet.create({

})
