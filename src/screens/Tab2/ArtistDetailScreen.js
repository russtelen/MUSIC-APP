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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 50,
          marginTop: 20,
        }}
      >
        <Text style={styles.name}>{artist.strArtist}</Text>
        {artist.strArtistLogo ? (
          <Image
            source={{ uri: artist.strArtistLogo }}
            style={{ width: 100, height: 50 }}
          />
        ) : null}
      </View>
      <Text style={{ textAlign: "center", fontStyle: "italic" }}>
        {artist.strGenre}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 20,
        }}
      >
        About
      </Text>
      <Text style={{ marginTop: 20, padding: 20 }}>
        {artist.strBiographyEN}
      </Text>
      {artist.strWebsite ? (
        <Text style={{ padding: 20 }}>Website: {artist.strWebsite}</Text>
      ) : null}

      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 20,
        }}
      >
        Bio
      </Text>
      <Text style={{ marginTop: 20, padding: 20 }}>
        Country: {artist.strCountry}
      </Text>
      <Text style={{ padding: 20 }}>Gender: {artist.strGender}</Text>
      {artist.intBornYear ? (
        <Text style={{ padding: 20 }}>Year of birth: {artist.intBornYear}</Text>
      ) : null}
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
