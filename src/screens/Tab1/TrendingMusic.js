import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TrendingMusic = () => {
  return (
    <View style={styles.container}>
      <Text>Trending Music</Text>
    </View>
  );
};

export default TrendingMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
