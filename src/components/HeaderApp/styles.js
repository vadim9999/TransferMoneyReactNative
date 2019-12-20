import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 4
  },
  leftButton: {
    flex: 2
  },
  body: {
    flex: 3
  },
  rigthButton: { flex: 1 },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  cardNameBlock: { display: "flex", flexDirection: "column" },
  cardName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: { color: "white" },
  money: { fontSize: 50, color: "white" },
  numberCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default styles;
