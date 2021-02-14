import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const TrendingMusicItem = ({ results }) => {
  const [track, setTrack] = useState(results);

  return (
    <View style={styles.container}>
      <Image source={{ uri: track.strTrackThumb }} style={styles.image} />
      <Text style={styles.track}>
        {track.strTrack} by {track.strArtist}
      </Text>
    </View>
  );
};

export default TrendingMusicItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: "90%",
    margin: "auto",
    marginVertical: 20,
    height: 300,
    borderRadius: 10,
  },
  track: {
    textAlign: "center",
    fontSize: 20,
  },
});
