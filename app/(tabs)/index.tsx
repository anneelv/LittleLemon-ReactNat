import * as React from "react";
import { View } from "react-native";

// Import LittleLemonHeader
import LittleLemonFooter from "../../components/LittleLemonFooter";
import LittleLemonHeader from "../../components/LittleLemonHeader";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <LittleLemonHeader />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
