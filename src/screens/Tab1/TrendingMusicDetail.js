import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import axios from "axios";
import { URL } from "@env";
import CONFIG from "../../api/api";
import { ScrollView } from "react-native-gesture-handler";

const TrendingMusicDetail = ({ navigation, route }) => {
  const {
    strTrackThumb,
    strTrack,
    strAlbum,
    strArtist,
    idTrack,
  } = route.params;

  const [music, setMusic] = useState("");

  const fetchMusic = async () => {
    CONFIG.params = { s: strArtist, t: strTrack };

    const res = await axios.get(`${URL}/searchtrack.php`, CONFIG);

    const data = await res.data.track[0];
    console.log(data);
    setMusic(data);
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};

export default TrendingMusicDetail;

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
