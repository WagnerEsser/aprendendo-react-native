import React from "react";
import PlayerScreen from "./src/screens/Player";
import HomeScreen from "./src/screens/Home";
import InstaScreen from "./src/screens/Insta";
import TabsScreen from "./src/screens/Tabs";
import LoginScreen from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen
                    name="home"
                    component={HomeScreen}
                    options={{ title: "Página inicial" }}
                />
                <Stack.Screen
                    name="spotify"
                    component={PlayerScreen}
                    options={{ title: "Spotify Player" }}
                />
                <Stack.Screen
                    name="instagram"
                    component={InstaScreen}
                    options={{ title: "Instagram" }}
                />
                <Stack.Screen
                    name="tabs"
                    component={TabsScreen}
                    options={{ title: "Tabs" }}
                />
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{ title: "Login" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
