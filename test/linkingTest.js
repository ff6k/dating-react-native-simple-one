import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
    // const handlePress = useCallback(async () => {
    //     // Checking if the link is supported for links with custom URL scheme.
    //     const supported = await Linking.canOpenURL(url);

    //     if (supported) {
    //         // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    //         // by some browser in the mobile
    //         await Linking.openURL(url);
    //     } else {
    //         Alert.alert(`Don't know how to open this URL: ${url}`);
    //     }
    // }, [url]);

    const handlePress = () => {
        const latitude = "37.4219091";
        const longitude = "-122.0840016";
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${latitude},${longitude}`;
        const label = 'Custom Label';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });


        Linking.openURL(url);
    }

    return <Button title={children} onPress={handlePress} />;
};

const App = () => {
    return (
        <View style={styles.container}>
            <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
            <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;