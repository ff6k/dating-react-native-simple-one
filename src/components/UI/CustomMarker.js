import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View } from 'react-native-animatable';
import Themes from '/src/themes'

class CustomMarker extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 30 / 2,
        ...Themes.Styles.shadowButton
    },
});

export default CustomMarker;