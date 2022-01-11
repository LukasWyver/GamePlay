import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
});
