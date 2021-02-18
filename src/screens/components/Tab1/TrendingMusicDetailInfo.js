import React, { useEffect, useState, useCallback, useRef } from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import { Accordion } from "native-base";
import YoutubePlayer from "react-native-youtube-iframe";

const TrendingMusicDetailInfo = ({ youtubeId, music }) => {
  const [playing, setPlaying] = useState(false);

  // YoutubePlayer
  //==================
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  // Accordion data
  //==================
  const dataArray = [
    {
      title: "Description",
      content: music.strDescriptionEN,
    },
  ];

  return (
    <View>
      <Image source={{ uri: music.strTrackThumb }} style={styles.image} />
      <Text style={styles.title}>
        {music.strTrack} by {music.strArtist}
      </Text>

      <View style={{ margin: 20 }}>
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={youtubeId}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        {music.strMusicVidCompany ? (
          <Text style={{ textAlign: "center", fontStyle: "italic" }}>
            Directed by: {music.strMusicVidDirector}, {music.strMusicVidCompany}
          </Text>
        ) : null}
      </View>

      <Text style={styles.title}>Description</Text>
      <Accordion dataArray={dataArray} expanded={[0]} />
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});
