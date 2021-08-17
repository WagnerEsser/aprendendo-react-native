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

const INITIAL_STATE = {
    name: "",
    user: "",
    birthday: undefined,
    email: "",
    gender: undefined,
    phone: "",
    donor: false,
    password: undefined,
};

const Register = ({ navigation }) => {
    const [values, setValues] = useState(INITIAL_STATE);

    const submit = () => {
        navigation.navigate("home");
    };

    const onChange = () => {};

    return (
        <SafeAreaView style={styles.wrapper}>
            <FlexView style={styles.area}>
                <Text style={styles.title}>Cadastre-se</Text>
                <form>
                    <TextInput
                        name="user"
                        style={styles.input}
                        placeholder="Usuário"
                        value={values.user}
                        onChangeText={onChange}
                    />
                    <TextInput
                        name="name"
                        style={styles.input}
                        placeholder="Nome"
                        value={values.name}
                        onChangeText={onChange}
                    />
                    <TextInput
                        name="birthday"
                        style={styles.input}
                        placeholder="Data de Nascimento"
                        value={values.birthday}
                        onChangeText={onChange}
                    />
                    <TextInput
                        name="email"
                        style={styles.input}
                        placeholder="E-mail"
                        value={values.email}
                        onChangeText={onChange}
                    />
                    <TextInput
                        name="gender"
                        style={styles.input}
                        placeholder="Gênero"
                        value={values.gender}
                        onChangeText={onChange}
                    />
                    <TextInput
                        name="phone"
                        style={styles.input}
                        placeholder="Telefone"
                        value={values.phone}
                        onChangeText={onChange}
                    />
                    <TextInput
                        name="donor"
                        style={styles.input}
                        placeholder="Doador"
                        value={values.donor}
                        onChangeText={onChange}
                    />
                    <TextInput
                        name="password"
                        style={styles.input}
                        placeholder="Senha"
                        keyboardType="visible-password"
                        value={values.password}
                        onChangeText={onChange}
                    />
                    <View style={styles.buttonWrapper}>
                        <Button onPress={submit} title="Entrar" />
                    </View>
                </form>
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

export default Register;
