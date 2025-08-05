import { ScrollView, StyleSheet, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView
      indicatorStyle="black"
      style={WelcomeScreenStyles.scrollContainer}
    >
      <Text style={WelcomeScreenStyles.titleText}>Welcome to Little Lemon</Text>
      <Text style={WelcomeScreenStyles.bodyText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const WelcomeScreenStyles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#333333",
  },
  titleText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  bodyText: {
    padding: 20,
    fontSize: 24,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
