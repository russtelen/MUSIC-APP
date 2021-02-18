import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const ArtistDetailScreen = ({ route }) => {
  const artist = route.params;

  return (
    <View style={styles.container}>
      <Text>{artist.strArtist}</Text>
    </View>
  );
};

export default ArtistDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
