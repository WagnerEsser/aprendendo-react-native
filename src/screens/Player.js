import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import { ChevronIcon } from "../../assets/icons/Chevron";
import { MoreVertIcon } from "../../assets/icons/MoreVert";
import { LinearGradient } from "expo-linear-gradient";
import { PlayIcon } from "../../assets/icons/Play";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Background = styled(View)`
  flex: 1;
  background-color: gray;
`;

const TopBar = styled(View)`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;
TopBar.Left = styled(View)`
  flex: 1;
  padding-left: 25px;
  padding-top: 10px;
`;
TopBar.Middle = styled(View)`
  display: flex;
  flex: 3;
`;
TopBar.Right = styled(View)`
  flex: 1;
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

const ScreenArea = styled(View)`
  flex: 1;
  padding: 32px;
`;

const CoverArea = styled(View)`
  flex: 4;
`;
CoverArea.Image = styled(Image)`
  width: 100%;
  flex: 1;
`;

const InfoArea = styled(View)`
  flex: 1;
`;
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

const ControlsArea = styled(View)`
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

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

export default function Player() {
  const [time, setTime] = useState(0);

  const onChangeTime = (value) => {
    setTime(value);
  };

  return (
    <Background>
      <LinearGradient colors={["#200666", "#161616"]} style={{ flex: 1 }}>
        <TopBar>
          <TopBar.Left>
            <ChevronIcon />
          </TopBar.Left>
          <TopBar.Middle>
            <TopBar.Title>Tocando da playlist</TopBar.Title>
            <TopBar.Subtitle>This is AC/DC</TopBar.Subtitle>
          </TopBar.Middle>
          <TopBar.Right>
            <MoreVertIcon />
          </TopBar.Right>
        </TopBar>
        <ScreenArea>
          <CoverArea>
            <CoverArea.Image
              resizeMode='contain'
              source={require("../../assets/acdc.jpeg")}
            ></CoverArea.Image>
          </CoverArea>
          <InfoArea>
            <InfoArea.Title>Thunderstruck</InfoArea.Title>
            <InfoArea.Subtitle>AC/DC</InfoArea.Subtitle>
          </InfoArea>
          <ControlsArea>
            <ControlsArea.Slider>
              <AudioSlider
                thumbTintColor='#fff'
                maximumTrackTintColor='#777'
                minimumTrackTintColor='#1dd65f'
                minimumValue={0}
                maximumValue={100}
                value={time}
                onValueChange={onChangeTime}
              />
              <ControlsArea.Slider.CurrentTime>
                {time}
              </ControlsArea.Slider.CurrentTime>
              <ControlsArea.Slider.TotalTime>
                03:30
              </ControlsArea.Slider.TotalTime>
            </ControlsArea.Slider>
            <TouchableOpacity>
              <FontAwesome
                name='random'
                size={24}
                color='white'
                style={{ marginRight: 35 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome
                name='step-backward'
                size={30}
                color='white'
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <PlayIcon width={90} height={90} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome
                name='step-forward'
                size={30}
                color='white'
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name='repeat'
                size={24}
                color='white'
                style={{ marginLeft: 35 }}
              />
            </TouchableOpacity>
          </ControlsArea>
        </ScreenArea>
      </LinearGradient>
    </Background>
  );
}
