import { StyleSheet } from "react-native";
import { theme } from "../../appearance";

export const sx = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    color: theme.color.text.dark,
    fontWeight: "500",
    borderStyle: "dashed",
    borderColor: theme.color.bg.main,
    borderWidth: theme.utils.width,
    borderRadius: theme.utils.radius,
  },
});
