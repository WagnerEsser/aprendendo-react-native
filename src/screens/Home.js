import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    const onPress = (url) => () => {
        navigation.navigate(url);
    };

    return (
        <View style={styles.wrapper}>
            <Text>Hello World!</Text>
            <View style={styles.button}>
                <Button title="Spotify player" onPress={onPress("spotify")} />
            </View>
            <View style={styles.button}>
                <Button title="Instagram" onPress={onPress("instagram")} />
            </View>
            <View style={styles.button}>
                <Button title="Tabs" onPress={onPress("tabs")} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    button: {
        marginTop: 15,
        minWidth: 200,
    },
});

export default HomeScreen;
