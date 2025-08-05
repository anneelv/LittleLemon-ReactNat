import { Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          color: "#EDEFEE",
          fontSize: 30,
          padding: 40,
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#EDEFEE",
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
