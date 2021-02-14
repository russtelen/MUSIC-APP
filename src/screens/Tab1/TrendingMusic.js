import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { URL } from "@env";
import CONFIG from "../../api/api";
import { FlatList } from "react-native-gesture-handler";
import TrendingMusicItem from "../components/Tab1/TrendingMusicItem";

const TrendingMusic = ({ navigation }) => {
  const [trendingMusic, setTrendingMusic] = useState([]);

  const fetchTrendingMusic = async () => {
    try {
      const res = await axios.get(`${URL}/trending.php`, CONFIG);
      const data = await res.data.trending;
      console.log(data);
      setTrendingMusic(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTrendingMusic();
  }, []);

  const showDetail = (item) => {
    navigation.navigate("TrendingMusicDetail", item);
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        keyExtractor={(music) => music.idTrend}
        data={trendingMusic}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={({ item }) => showDetail(item)}>
            <TrendingMusicItem results={item} />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default TrendingMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
