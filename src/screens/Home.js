import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Player");
  };

  return (
    <View style={styles.wrapper}>
      <Text>Hello World!</Text>
      <View style={styles.button}>
        <Button title='Spotify player' onPress={onPress} />
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
  },
});

export default HomeScreen;
