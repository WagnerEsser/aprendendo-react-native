import React from "react";
import { View, Text, Button } from "react-native";

const defaultStyle = {
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};

const buttonStyle = {
  marginTop: 15,
};

const HomeScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Player");
  };

  return (
    <View style={defaultStyle}>
      <Text>Hello World!</Text>
      <View style={buttonStyle}>
        <Button title='Spotify player' onPress={onPress} />
      </View>
    </View>
  );
};

export default HomeScreen;
