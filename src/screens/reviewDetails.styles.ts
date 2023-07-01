import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const sx = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: theme.colors.background,
  },
  text: {
    marginVertical: 15,
    textAlign: "center",
    fontSize: theme.text.size.heading,
  },
});
