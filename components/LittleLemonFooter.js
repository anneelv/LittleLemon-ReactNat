import * as React from "react";
import { Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    // <View
    //   style={{
    //     flex: 0.03,
    //     backgroundColor: "#F4CE14",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text style={{ padding: 2, fontSize: 13, color: "black" }}>
    //     All rights reserved by Little Lemon, 2022
    //   </Text>
    // </View>
    <View style={{ backgroundColor: "#F4CE14", marginBottom: 10 }}>
      <Text style={{ fontSize: 18, color: "black", textAlign: "center" }}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}
