import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ArtistDetailScreen = ({ route }) => {
  const artist = route.params;
  const [photos, setPhotos] = useState([
    artist.strArtistFanart,
    artist.strArtistFanart2,
    artist.strArtistFanart3,
  ]);
  return (
    <ScrollView style={styles.container}>
      <FlatList
        keyExtractor={(artist) => artist.idArtist}
        data={photos}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Image source={{ uri: item }} style={{ width: 400, height: 200 }} />
          );
        }}
      />
      <Text style={styles.name}>{artist.strArtist}</Text>
    </ScrollView>
  );
};

export default ArtistDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    textAlign: "center",
    fontSize: 30,
    margin: 10,
  },
});
