import { View, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import { Flex, FlexRowView } from "../default-styles";

export const Top = styled(FlexRowView)`
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
`;

export const CardWrapper = styled(Flex)`
  justify-content: center;
  margin-bottom: 15px;
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

export const TopWrapper = styled(FlexRowView)`
  flex: 1;
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

export const WrapperIconsBottomImage = styled(FlexRowView)`
  padding: 10px 10px 5px 10px;
  justify-content: space-between;
`;

export const Likes = styled(Text)`
  font-size: 12px;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Description = styled(Text)`
  font-size: 12px;
  margin-left: 10px;
`;

export const HashtagsWrapper = styled(Text)`
  font-size: 12px;
  margin-top: 5px;
  margin-left: 10px;
`;
