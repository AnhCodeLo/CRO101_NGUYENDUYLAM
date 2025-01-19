import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    padding: 15,
  },

  baseText: {
    fontFamily: "Cochin",
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },

  boldText: {
    fontWeight: "bold",
  },

  italicText: {
    fontStyle: "italic",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },

  marginTextInput: {
    marginTop: 60,
  },
});
