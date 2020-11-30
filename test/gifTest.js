import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { GifSearch } from 'react-native-gif-search'
import Const from '/src/const'
// Const.GifPhyKey.GIFPHY_KEY
export default function gifTest() {
    const [visible, setVisible] = useState(true)
    const [uriGif, setUriGif] = useState(null)
    return (
        <View style={{ flex: 1 }}>
            <Image
                resizeMode={'stretch'}
                style={{ width: 200, height: 200 }}
                source={{ uri: uriGif ? uriGif : "https://www.clicktorelease.com/code/gif/1.gif" }} />
            <GifSearch
                giphyApiKey={Const.GifPhyKey.GIFPHY_KEY}
                gifsToLoad={10}
                maxGifsToLoad={25}
                style={{ backgroundColor: 'white' }}
                textInputStyle={{ fontWeight: 'bold', color: 'black' }}
                gifListStyle={{ height: 320 }}
                gifStyle={{ height: 160 }}
                loadingSpinnerColor={'black'}
                placeholderTextColor={'grey'}
                placeholderText={'Search'}
                darkGiphyLogo={true}
                onGifSelected={(gif_url) => { setUriGif(gif_url) }}
                visible={visible}
                onBackPressed={() => { setVisible(false) }}
                developmentMode={false}
                horizontal={false}
                showScrollBar={false}
                onError={(error) => { console.log(error) }}
            />
        </View>

    )
}

const styles = StyleSheet.create({})
