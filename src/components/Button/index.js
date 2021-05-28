import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { BUTTON, WHITE } from "../../screens/colors";

const Button = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.textButton}>{props.title}</Text>
    </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: BUTTON,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    textButton: {
        color: WHITE,
        textTransform: "uppercase",
    },
});

Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
};
