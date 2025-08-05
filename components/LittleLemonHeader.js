import * as React from "react";
import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          padding: 20,
          fontSize: 30,
          color: "black",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
