import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

export default function TaskPageHeader() {
  return (
    <View style={{ flexDirection: "row", padding: 50, paddingTop: 100 }}>
      <View style={{ flex: 0.4 }}>{/* Insert image */}</View>
      <View style={{ flex: 0.6 }}>
        <ThemedText type="title">Hello</ThemedText>
        <ThemedText type="defaultLato">Let's be productive!</ThemedText>
      </View>
    </View>
  );
}
