import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

export default function TaskPageHeader() {
  return (
    <View style={{ flexDirection: "row", padding: 50, paddingTop: 80 }}>
      <View style={{ flex: 0.3 }}>{/* Insert image */}</View>
      <View style={{ flex: 0.7 }}>
        <ThemedText type="title">Hello</ThemedText>
        <ThemedText type="defaultLato">Let's be productive!</ThemedText>
      </View>
    </View>
  );
}
