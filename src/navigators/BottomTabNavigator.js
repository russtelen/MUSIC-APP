import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrendingMusicStackNavigator from "./StackNavigator/TrendingMusicNavigator";
import ArtistSearchStackNavigator from "./StackNavigator/ArtistSearchNavigator";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="ScreenOne">
      {/* TrendingMusic Stack */}
      <BottomTab.Screen
        name="Trending Music"
        component={TrendingMusicStackNavigator}
        options={{ tabBarIcon: () => <Text>🌍</Text> }}
      />
      {/* ArtistSearch/ArtistDetailScreen Stack */}
      <BottomTab.Screen
        name="Artist Search"
        component={ArtistSearchStackNavigator}
        options={{ tabBarIcon: () => <Text>🔍</Text> }}
      />
    </BottomTab.Navigator>
  );
}
