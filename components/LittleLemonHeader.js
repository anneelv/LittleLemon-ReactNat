import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={HeaderStyles.container}>
      <Text style={HeaderStyles.headerText}>Little Lemon</Text>
    </View>
  );
}

const HeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
