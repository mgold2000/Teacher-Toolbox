import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  baseText: {
    color: "orange",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 30,
    top: -40,
    textAlignVertical: "center",
  },
  modText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 30,
    top: -40,
    textAlignVertical: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
