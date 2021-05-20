import styled from "styled-components";
import Slider from "@react-native-community/slider";
import { View, Text, Image } from "react-native";
import { Flex, FlexView, FlexRowView } from "../default-styles";

export const Background = styled(Flex)`
  background-color: gray;
`;

export const TopBar = styled(FlexRowView)`
  padding-top: 20px;
`;
TopBar.Left = styled(Flex)`
  padding-left: 25px;
  padding-top: 10px;
`;
TopBar.Middle = styled(FlexView)`
  flex: 3;
`;
TopBar.Right = styled(Flex)`
  align-items: flex-end;
  padding-right: 25px;
  padding-top: 10px;
`;
TopBar.Title = styled(Text)`
  color: white;
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
`;
TopBar.Subtitle = styled(Text)`
  color: white;
  text-align: center;
  font-weight: 700;
`;

export const ScreenArea = styled(Flex)`
  padding: 32px;
`;

export const CoverArea = styled(View)`
  flex: 4;
`;
CoverArea.Image = styled(Image)`
  width: 100%;
  flex: 1;
`;

export const InfoArea = styled(Flex)``;

InfoArea.Title = styled(Text)`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
`;
InfoArea.Subtitle = styled(Text)`
  color: white;
  color: #83828e;
  font-size: 14px;
  font-weight: 600;
  margin-top: 3px;
`;

export const ControlsArea = styled(View)`
  flex: 2;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
ControlsArea.Slider = styled(View)`
  flex-basis: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
ControlsArea.Slider.CurrentTime = styled(Text)`
  color: #bbb;
`;
ControlsArea.Slider.TotalTime = styled(Text)`
  color: #bbb;
`;

export const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;
