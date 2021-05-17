import React from "react";
import PlayerScreen from "./src/screens/Player";
import HomeScreen from "./src/screens/Home";
import InstaScreen from "./src/screens/Insta";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

const HomeTabStack = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={HomeScreen} />
    <HomeStack.Screen name='Player' component={PlayerScreen} />
  </HomeStack.Navigator>
);

const Tab = createBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name='Home' component={HomeTabStack} />
    <Tab.Screen name='Insta' component={InstaScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
