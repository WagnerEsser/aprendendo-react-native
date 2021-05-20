import React from "react";
import { View, Image, SafeAreaView, FlatList, StyleSheet } from "react-native";
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
  IconWrapper,
  BookmarkIconWrapper,
  TopWrapper,
} from "./styles";
import { Flex } from "../default-styles";

const Card = ({ values }) => {
  const { author, tagPictureUrl, place } = values.item;
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
            <Place>{place}</Place>
          </Flex>
          <Ionicons name='ellipsis-vertical' size={20} color='black' />
        </TopWrapper>
      </CardTop>
      <ImageBig
        source={{ uri: `https://github.com/${tagPictureUrl}.png` }}
      />
      <WrapperIconsBottomImage>
        <IconWrapper onPress={onChangeHeart}>
          {heart && <Ionicons name='ios-heart' size={24} color='red' />}
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
        <BookmarkIconWrapper>
          <Feather name='bookmark' size={24} color='black' />
        </BookmarkIconWrapper>
      </WrapperIconsBottomImage>
    </CardWrapper>
  );
};

const renderItem = (post) => <Card values={post} />;

const InstaScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <Top>
      <View style={styles.logoWrapper}>
        <Logo source={require("../../../assets/instagram.png")} />
      </View>
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
  safeArea: { marginTop: 20 },
  logoWrapper: { flex: 1 },
});

export default InstaScreen;
