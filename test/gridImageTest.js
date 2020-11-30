import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    View,
    Text,
    StatusBar,
} from 'react-native';
import AnimationFlatlist from 'react-native-animated-image-list'

const { width, height } = Dimensions.get('window');

let SampleData = [
    { name: '1', title: 'Spiderman', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg', subTitle: 'Dance with' },
    { name: '2', title: 'Stormtrooper', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSUQRgx0P6e9sLEVplCW7xQYVB-spmLWhX1Q&usqp=CAU' },
    { name: '3', title: 'Woody toy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx4K4Y9yb4PAVMtpgSW3CUgyg2zutp768WNw&usqp=CAU' },
    { name: '4', title: 'Wolverine', image: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }
]


const ITEM_SIZE = width - 120
const ITEM_HEIGHT = height / 2

class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AnimationFlatlist
                    data={SampleData}
                    height={ITEM_HEIGHT}
                    width={ITEM_SIZE}
                    title={'Welcome'}
                    subTitle={'Choose your character'}
                    primaryBackgroundColor='#4528AC'
                    secondaryBackgroundColor='#d3d3d3'
                    textPrimaryColor='#fff'
                    textSecondaryColor='#000'
                />
            </View>
        )
    }
}

export default App