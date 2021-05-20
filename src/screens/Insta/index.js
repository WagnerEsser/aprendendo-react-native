import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import posts from "./data";
import {
  Top,
  Logo,
  CardWrapper,
  CardTop,
  ImageSmall,
  ImageBig,
  Author,
  Place,
  WrapperIconsBottomImage,
  Likes,
  Description,
  HashtagsWrapper,
  IconWrapper,
  TopWrapper,
} from "./styles";
import { Flex, FlexView, FlexRowView } from "../default-styles";

const Card = ({ values }) => {
  const { author, tagPictureUrl, place, likes, description, hashtags } =
    values.item;
  const [heart, setHeart] = useState(false);

  const onChangeHeart = () => setHeart((value) => !value);

  return (
    <CardWrapper>
      <CardTop>
        <ImageSmall
          source={{ uri: `https://github.com/${tagPictureUrl}.png` }}
        />
        <TopWrapper>
          <Flex>
            <Author>{author}</Author>
            {!!place && <Place>{place}</Place>}
          </Flex>
          <Ionicons name='ellipsis-vertical' size={20} color='black' />
        </TopWrapper>
      </CardTop>
      <ImageBig source={{ uri: `https://github.com/${tagPictureUrl}.png` }} />
      <WrapperIconsBottomImage>
        <FlexRowView>
          <IconWrapper onPress={onChangeHeart}>
            {heart && <Ionicons name='ios-heart' size={24} color='#ce090b' />}
            {!heart && (
              <Ionicons name='ios-heart-outline' size={24} color='black' />
            )}
          </IconWrapper>
          <IconWrapper>
            <FontAwesome name='comment-o' size={20} color='black' />
          </IconWrapper>
          <IconWrapper>
            <Feather name='send' size={20} color='black' />
          </IconWrapper>
        </FlexRowView>
        <FlexView>
          <IconWrapper>
            <Feather name='bookmark' size={24} color='black' />
          </IconWrapper>
        </FlexView>
      </WrapperIconsBottomImage>
      <Likes>{likes} likes</Likes>
      {!!description && <Description>{description}</Description>}
      {!!hashtags.length && (
        <HashtagsWrapper>
          {hashtags.map((tag) => (
            <TouchableOpacity key={tag}>
              <Text style={styles.tag}>#{tag} </Text>
            </TouchableOpacity>
          ))}
        </HashtagsWrapper>
      )}
    </CardWrapper>
  );
};

const renderItem = (post) => <Card values={post} />;

const InstaScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <Top>
      <Flex>
        <Logo source={require("../../../assets/instagram.png")} />
      </Flex>
      <IconWrapper>
        <AntDesign name='plussquareo' size={24} color='black' />
      </IconWrapper>
      <IconWrapper>
        <Ionicons name='ios-heart-outline' size={24} color='black' />
      </IconWrapper>
      <IconWrapper>
        <Fontisto name='messenger' size={24} color='black' />
      </IconWrapper>
    </Top>
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: { marginBottom: 70, backgroundColor: 'white' },
  tag: { color: "#4e5153" },
});

export default InstaScreen;
