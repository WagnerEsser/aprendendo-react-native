import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const defaultStyle = {
  justifyContent: "center",
  flex: 1,
};

const imageSmallStyle = {
  width: 35,
  height: 35,
  borderRadius: 20,
  marginRight: 10,
};

const imageBigStyle = {
  width: "100%",
  height: 350,
};

const wrapperTopStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: 15,
};

const users = [
  "wagneresser",
  "omariosouto",
  "vweberfroes",
  "gabrielfroes",
  "peas",
];

const Card = (props) => {
  const [heart, setHeart] = useState(false);

  const onChangeHeart = () => setHeart((value) => !value);

  return (
    <View style={defaultStyle}>
      <View style={wrapperTopStyle}>
        <Image
          style={imageSmallStyle}
          source={{ uri: `https://github.com/${props.userUrl}.png` }}
        />
        <Text>{props.userUrl}</Text>
      </View>
      <Image
        style={imageBigStyle}
        source={{ uri: `https://github.com/${props.userUrl}.png` }}
      />
      <TouchableOpacity onPress={onChangeHeart} style={{ padding: 10 }}>
        {heart && <Ionicons name='ios-heart' size={24} color='red' />}
        {!heart && (
          <Ionicons name='ios-heart-outline' size={24} color='black' />
        )}
      </TouchableOpacity>
    </View>
  );
};

const InstaScreen = () => (
  <SafeAreaView style={{ marginTop: 20 }}>
    <ScrollView>
      <Image
        source={require("../../assets/instagram.png")}
        style={{ marginTop: 25, marginBottom: 10, marginLeft: 15 }}
      />
      {users.map((userUrl) => (
        <Card key={userUrl} userUrl={userUrl} />
      ))}
    </ScrollView>
  </SafeAreaView>
);

export default InstaScreen;
