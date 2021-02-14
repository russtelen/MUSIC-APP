import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios";
import { URL } from "@env";
import CONFIG from "../../api/api";

const TrendingMusic = () => {
  const [trendingMusic, setTrendingMusic] = useState([]);

  const fetchTrendingMusic = async () => {
    try {
      const res = await axios.get(`${URL}/trending.php`, CONFIG);
      const data = await res.data.trending;
      setTrendingMusic(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTrendingMusic();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Artist: </Text>
    </View>
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
