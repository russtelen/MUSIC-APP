import React, { useEffect, useState, useCallback, useRef } from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import { Accordion } from "native-base";
import YoutubePlayer from "react-native-youtube-iframe";

const TrendingMusicDetailInfo = ({ music }) => {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    setTrack(music);
    getYoutubeId();
  }, []);

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

  const getYoutubeId = async () => {
    try {
      const str = await music.strMusicVid;
      console.log(str);
      //   const str = await "https://www.youtube.com/watch?v=B6_iQvaIjXw";
      console.log(await str.substring(str.lastIndexOf("=") + 1));
    } catch (e) {
      console.log(e);
    }
  };

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
          height={180}
          play={playing}
          videoId={"B6_iQvaIjXw"}
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
