import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
    justifyContent: "flex-end"
  },
  imageBlock: { marginBottom: 35 },
  image: { width: 130, height: 130 },
  messageBlock: { alignItems: "center" },
  title: { color: "blue", fontSize: 30 },
  message: { fontSize: 14 },
  questiong: { alignContent: "flex-end", alignItems: "center" },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "white",
    borderWidth: 1
  },
  textColor: { color: "black" }
});

export default styles;
