import React, { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";
import PassMeter from "react-native-passmeter";

const MAX_LEN = 50,
    MIN_LEN = 6,
    PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

export default App = () => {
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                maxLength={MAX_LEN}
                secureTextEntry
                onChangeText={password => setPassword(password)}
            />
            <PassMeter
                height={5}
                showLabels
                password={password}
                maxLength={MAX_LEN}
                minLength={MIN_LEN}
                labels={PASS_LABELS}
            />
        </SafeAreaView>
    );
};
const styles = {
    container: { flex: 1, justifyContent: "center" },
    input: {
        margin: 5,
        padding: 6,
        borderRadius: 8,
        marginBottom: 8,
        paddingHorizontal: 10,
        backgroundColor: "#eceff1"
    }
};