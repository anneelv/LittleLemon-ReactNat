import * as React from "react";
import { StyleSheet, View } from "react-native";

// Import LittleLemonHeader
import LittleLemonFooter from "../../components/LittleLemonFooter";
import LittleLemonHeader from "../../components/LittleLemonHeader";
import WelcomeScreen from "../../components/WelcomeScreen";

export default function App() {
  return (
    <>
      <View style={rootStyles.mainContainer}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuItems /> */}
      </View>
      <View style={rootStyles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const rootStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: {
    backgroundColor: "#333333",
  },
});
