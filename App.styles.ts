import { StyleSheet } from "react-native";
import { theme } from "./appearance";

export const sx = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 25,
    paddingTop: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
