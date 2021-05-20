import React from "react";
import PlayerScreen from "./src/screens/Player";
import HomeScreen from "./src/screens/Home";
import InstaScreen from "./src/screens/Insta";
import TabsScreen from "./src/screens/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

const HomeTabStack = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Página inicial' component={HomeScreen} />
    <HomeStack.Screen name='Spotify Player' component={PlayerScreen} />
    <HomeStack.Screen name='Instagram' component={InstaScreen} />
    <HomeStack.Screen name='Tabs' component={TabsScreen} />
  </HomeStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <HomeTabStack />
    </NavigationContainer>
  );
}
