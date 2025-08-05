import * as React from "react";
import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{
        flex: 0.13,
        backgroundColor: "#F4CE14",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{ padding: 20, fontSize: 30, color: "black", paddingTop: 50 }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
