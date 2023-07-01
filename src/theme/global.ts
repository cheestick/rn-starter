import { StyleSheet } from "react-native";
import { theme } from ".";

export const sxg = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  titleText: {
    marginVertical: 15,
    color: theme.colors.almostBlack,
    fontFamily: theme.text.font.semibold,
    fontSize: theme.text.size.heading,
  },
  paragpraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
