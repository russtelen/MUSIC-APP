import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ArtistSearchScreen = ({ navigation }) => {
  const showDetail = () => {
    navigation.navigate("ArtistDetailScreen");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => showDetail()}>
        <Text>ArtistSearchScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArtistSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
