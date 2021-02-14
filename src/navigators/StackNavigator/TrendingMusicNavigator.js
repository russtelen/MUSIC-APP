import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TrendingMusic from "../../screens/Tab1/TrendingMusic";

const TrendingMusicStack = createStackNavigator();

export default function TrendingMusicStackNavigator() {
  return (
    <TrendingMusicStack.Navigator>
      <TrendingMusicStack.Screen
        name="TrendingMusic"
        component={TrendingMusic}
        options={{ headerTitle: "Trending Music" }}
      />
    </TrendingMusicStack.Navigator>
  );
}
