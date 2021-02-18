import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Button } from "native-base";
import { URL } from "@env";
import CONFIG from "../../api/api";
import axios from "axios";

const ArtistSearchScreen = ({ navigation }) => {
  const [inputField, setInputField] = useState("");
  const [artist, setArtist] = useState();
  const showDetail = (item) => {
    navigation.navigate("ArtistDetailScreen", item);
  };

  const searchApi = async () => {
    CONFIG.params = { s: inputField };
    const res = await axios.get(`${URL}/search.php`, CONFIG);
    const data = await res.data.artists[0];

    await setArtist(data);

    setInputField("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputField}
        placeholder="🔍  Artist Search..."
        style={styles.textInput}
        onChangeText={(newInput) => setInputField(newInput)}
        onSubmitEditing={() => searchApi()}
      />

      {!artist ? (
        <Text>Waiting..</Text>
      ) : (
        <View style={styles.resultContainer}>
          <Image source={{ uri: artist.strArtistThumb }} style={styles.image} />
          <Text style={styles.name}>{artist.strArtist}</Text>
          <TouchableOpacity onPress={() => showDetail(item)}>
            <Button full light style={{ margin: "auto" }}>
              <Text style={{ paddingHorizontal: 30 }}>More Details</Text>
            </Button>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ArtistSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 50,
    width: "100%",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
  resultContainer: {
    width: "90%",
    marginTop: "10%",
    marginHorizontal: 20,
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
});
