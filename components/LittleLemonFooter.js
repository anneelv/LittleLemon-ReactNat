import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    <View style={FooterStyles.container}>
      <Text style={FooterStyles.footerText}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

const FooterStyles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
});
