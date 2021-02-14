import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TrendingMusic from "../../screens/Tab1/TrendingMusic";
import TrendingMusicDetail from "../../screens/Tab1/TrendingMusicDetail";

const TrendingMusicStack = createStackNavigator();

export default function TrendingMusicStackNavigator() {
  return (
    <TrendingMusicStack.Navigator>
      <TrendingMusicStack.Screen
        name="TrendingMusic"
        component={TrendingMusic}
        options={{ headerTitle: "Trending Music" }}
      />
      <TrendingMusicStack.Screen
        name="TrendingMusicDetail"
        component={TrendingMusicDetail}
        options={{ headerTitle: "Song Details" }}
      />
    </TrendingMusicStack.Navigator>
  );
}
