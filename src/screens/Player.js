import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { ChevronIcon } from "../../assets/icons/Chevron";
import { MoreVertIcon } from "../../assets/icons/MoreVert";
import { LinearGradient } from "expo-linear-gradient";

const Background = styled.View`
  flex: 1;
  background-color: gray;
`;
const TopBar = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
`;
TopBar.Left = styled.View`
  flex: 1;
  padding-left: 25px;
  padding-top: 10px;
`;
TopBar.Middle = styled.View`
  display: flex;
  flex: 3;
`;
TopBar.Right = styled.View`
  flex: 1;
  align-items: flex-end;
  padding-right: 25px;
  padding-top: 10px;
`;
TopBar.Title = styled.Text`
  color: white;
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
`;
TopBar.Subtitle = styled.Text`
  color: white;
  text-align: center;
  font-weight: 700;
`;

export default function Player() {
  return (
    <Background>
      <LinearGradient colors={["#200666", "#161616"]} style={{ flex: 1 }}>
        <TopBar>
          <TopBar.Left>
            <ChevronIcon />
          </TopBar.Left>
          <TopBar.Middle>
            <TopBar.Title>Tocando podcast</TopBar.Title>
            <TopBar.Subtitle>Hipsters Ponto Tech</TopBar.Subtitle>
          </TopBar.Middle>
          <TopBar.Right>
            <MoreVertIcon />
          </TopBar.Right>
        </TopBar>
      </LinearGradient>
    </Background>
  );
}
