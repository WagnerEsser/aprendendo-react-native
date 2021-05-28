import React, { useState } from "react";
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { FlexView } from "../default-styles";
import { BORDER } from "../colors";

const Login = ({ navigation }) => {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null);

    const login = () => {
        navigation.navigate("home");
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <FlexView style={styles.area}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Senha"
                    keyboardType="visible-password"
                />
                <View style={styles.buttonWrapper}>
                    <Button onPress={login} title="Entrar" />
                </View>
            </FlexView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    area: {
        alignItems: "center",
        width: 250,
        height: "auto",
    },
    title: {
        fontSize: 24,
        marginBottom: 15,
    },
    input: {
        width: "100%",
        height: 50,
        margin: 12,
        padding: 15,
        borderWidth: 1,
        borderColor: BORDER,
        borderRadius: 4,
    },
    buttonWrapper: {
        marginTop: 15,
        width: 150,
    },
});

export default Login;
