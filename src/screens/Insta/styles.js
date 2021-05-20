import { View, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import { Flex, FlexView } from "../default-styles";

export const Top = styled(FlexView)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
`;

export const CardWrapper = styled(Flex)`
  justify-content: center;
`;

export const ImageSmall = styled(Image)`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const ImageBig = styled(Image)`
  width: 100%;
  height: 350px;
`;

export const Logo = styled(Image)`
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const TopWrapper = styled(FlexView)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTop = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Author = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

export const Place = styled(Text)`
  font-size: 12px;
`;

export const IconWrapper = styled(TouchableOpacity)`
  margin-right: 10px;
`;

export const BookmarkIconWrapper = styled(IconWrapper)`
  flex: 1;
  flex-direction: row-reverse;
`;

export const WrapperIconsBottomImage = styled(FlexView)`
  flex-direction: row;
  padding: 10px;
`;
