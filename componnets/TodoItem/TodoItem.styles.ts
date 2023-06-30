import { StyleSheet } from "react-native";
import { theme } from "../../appearance";

export const sx = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 16,
    marginTop: 16,
    borderStyle: "dashed",
    borderColor: theme.color.bg.main,
    borderWidth: theme.utils.width,
    borderRadius: theme.utils.radius,
  },
  text: {
    color: theme.color.text.dark,
    fontSize: theme.text.size.body,
    fontWeight: "500",
  },
});
