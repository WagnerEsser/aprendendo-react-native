import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator>
        <Tab.Screen name="Página 1" component={Page1} />
        <Tab.Screen name="Página 2" component={Page2} />
    </Tab.Navigator>
);

export default Tabs;
