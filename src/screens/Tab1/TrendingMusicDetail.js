import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, LogBox } from "react-native";
import axios from "axios";
import { URL } from "@env";
import CONFIG from "../../api/api";
import { ScrollView } from "react-native-gesture-handler";
import TrendingMusicDetailInfo from "../components/Tab1/TrendingMusicDetailInfo";

const TrendingMusicDetail = ({ route }) => {
  const {
    strTrackThumb,
    strTrack,
    strAlbum,
    strArtist,
    idTrack,
  } = route.params;

  const [music, setMusic] = useState("");
  const [youtubeId, setYoutubeId] = useState("");

  const fetchMusic = async () => {
    try {
      CONFIG.params = { s: strArtist, t: strTrack };

      const res = await axios.get(`${URL}/searchtrack.php`, CONFIG);

      const data = await res.data.track[0];

      const str = await data.strMusicVid;

      if (str) {
        const id = await str.substring(str.lastIndexOf("=") + 1);
        setYoutubeId(id);
      }

      setMusic(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    fetchMusic();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TrendingMusicDetailInfo youtubeId={youtubeId} music={music} />
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
