import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
    const onPress = (url) => () => {
        navigation.navigate(url);
    };

    return (
        <View style={styles.wrapper}>
            <Text>Hello World!</Text>
            <View style={styles.buttonWrapper}>
                <Button title="Spotify Player" onPress={onPress("spotify")} />
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Instagram" onPress={onPress("instagram")} />
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Tabs" onPress={onPress("tabs")} />
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Login" onPress={onPress("login")} />
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
    buttonWrapper: {
        marginTop: 15,
        minWidth: 200,
    },
});

export default HomeScreen;
