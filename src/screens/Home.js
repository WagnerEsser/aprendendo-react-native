import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";

const defaultStyle = {
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};

const ButtonWrapper = styled(View)`
  margin-top: 15px;
`;

const HomeScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Player");
  };

  return (
    <View style={defaultStyle}>
      <Text>Hello World!</Text>
      <ButtonWrapper>
        <Button title='Spotify player' onPress={onPress} />
      </ButtonWrapper>
    </View>
  );
};

export default HomeScreen;
