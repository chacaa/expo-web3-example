import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export const padding = 24;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding,
    height: 50,
    borderRadius: 4,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: colors.white,
  },
  disabled: {
    backgroundColor: colors.gray,
  },
});
