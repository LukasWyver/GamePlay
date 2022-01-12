import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    flexDirection: "row",
  },
  greeling: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  ContentTextExit: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 24,
  },
  textExit: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 22,
    textAlign: "center",
  },
  ContentButtonExit: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 40,
  },
  ButtonNot: {
    borderWidth: 2,
    borderColor: theme.colors.secondary30,
    borderRadius: 8,
    paddingHorizontal: 66,
    paddingVertical: 16,
  },
  TextButtonNot: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
  },
  ButtonYes: {
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 66,
    paddingVertical: 16,
  },
  TextButtonYes: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
  },
});
