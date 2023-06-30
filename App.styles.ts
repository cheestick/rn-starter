import { StyleSheet } from "react-native";
import { theme } from "./appearance";

export const sx = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg.primary,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
