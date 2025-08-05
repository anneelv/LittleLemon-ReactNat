import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "defaultLato" ? styles.defaultLato : undefined,
        type === "defaultGrand" ? styles.defaultGrand : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Lato",
    color: "black",
  },
  defaultLato: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Lato",
    color: "black",
  },
  defaultGrand: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Grandstander",
    color: "black",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    // fontWeight: "600",
    fontFamily: "Lato",
    color: "black",
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontFamily: "Grandstander",
    color: "black",
  },
  subtitle: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Grandstander",
    color: "black",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "Lato",
  },
});
