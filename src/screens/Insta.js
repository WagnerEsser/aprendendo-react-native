import React from "react";
import { View, Text } from "react-native";

const defaultStyle = {
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};

const InstaScreen = () => (
  <View style={defaultStyle}>
    <Text>Insta Screen!</Text>
  </View>
);

export default InstaScreen;
