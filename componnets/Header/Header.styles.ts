import { StyleSheet } from "react-native";
import { theme } from "../../appearance";

export const sx = StyleSheet.create({
  header: {
    // height: 80,
    paddingTop: theme.statusBar.height,
    backgroundColor: theme.color.bg.main,
  },
  title: {
    color: theme.color.text.light,
    fontSize: theme.text.size.heading,
    fontWeight: "700",
    marginVertical: 10,
    textAlign: "center",
  },
});
