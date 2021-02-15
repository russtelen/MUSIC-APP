import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const TrendingMusicDetailInfo = ({ music }) => {
  return (
    <View>
      <Image source={{ uri: music.strTrackThumb }} style={styles.image} />
      <Text>
        {music.strTrack} by {music.strArtist}
      </Text>
      <Text>{music.strDescriptionEN}</Text>
      <Text>{music.strMusicVid}</Text>
      {music.strMusicVidCompany ? (
        <Text>
          Directed by: {music.strMusicVidDirector}, {music.strMusicVidCompany}
        </Text>
      ) : null}
    </View>
  );
};

export default TrendingMusicDetailInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
});
