import React from "react";
import { Text, View, StylSheet } from "react-native";

const TrendingMusicDetail = ({ navigation, route }) => {
  const {
    strTrackThumb,
    strTrack,
    strAlbum,
    strArtist,
    idTrack,
  } = route.params;

  return (
    <View>
      <Text>Trending Music Details: {strArtist}</Text>
    </View>
  );
};

export default TrendingMusicDetail;
