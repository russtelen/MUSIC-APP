import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const TrendingMusicItem = ({ results }) => {
  const [track, setTrack] = useState(results);

  return (
    <View>
      <Text>{track.strArtist}</Text>
    </View>
  );
};

export default TrendingMusicItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
