import { StyleSheet } from "react-native";
import { theme } from "../../appearance";

export const sx = StyleSheet.create({
  form: { gap: 0 },
  input: {
    flexGrow: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: theme.utils.width,
    borderBottomColor: theme.color.bg.main,
    fontSize: theme.text.size.md,
    color: theme.color.text.dark,
  },
  button: {
    paddingVertical: 4,
    justifyContent: "center",
    backgroundColor: theme.color.bg.main,
    borderRadius: theme.utils.radius,
  },
});
