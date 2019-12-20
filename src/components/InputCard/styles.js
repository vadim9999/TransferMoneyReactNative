import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  itemPicker: {
    marginTop: 5
  },
  inputGroup: { flexDirection: "row" },
  item: { flex: 1 },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "white",
    borderWidth: 1
  },
  blackText: {
    color: "black"
  }
});

export default styles;
