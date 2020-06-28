import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export default StyleSheet.create({
  inputContainer: {
    height: 46,
    paddingBottom: 6,
    justifyContent: "flex-end",
  },
  bottomLine: {
    alignSelf: "stretch",
    height: 1,
    backgroundColor: colors.gray,
  },
  bottomLineOnFocus: {
    height: 2,
    backgroundColor: colors.orange,
  },
  text: {
    fontSize: 16,
    margin: 0, // Because TextInput in Android adds a default margin, and we want none.
    padding: 0, // Because TextInput in Android adds a default padding, and we want none.
    width: "100%",
  },
  label: {
    position: "absolute",
    left: 0,
    top: 0,
    fontSize: 12,
    fontWeight: "600",
  },
  emptyLabel: {
    position: "absolute",
    left: 0,
  },
});
