import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";

export default StackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {}
);
