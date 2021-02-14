import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ArtistSearchScreen from "../../screens/Tab2/ArtistSearchScreen";
import ArtistDetailScreen from "../../screens/Tab2/ArtistDetailScreen";

const ArtistSearchStack = createStackNavigator();

export default function ArtistSearchStackNavigator() {
  return (
    <ArtistSearchStack.Navigator>
      <ArtistSearchStack.Screen
        name="ArtistSearchScreen"
        component={ArtistSearchScreen}
        options={{ headerTitle: "Artist Search" }}
      />
      <ArtistSearchStack.Screen
        name="ArtistDetailScreen"
        component={ArtistDetailScreen}
        options={{ headerTitle: "Artist Details" }}
      />
    </ArtistSearchStack.Navigator>
  );
}
