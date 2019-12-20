import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  optionBlock:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  numberCard:{
    display: "flex",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  field:{
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row"
  },
  checkbox:{
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  button:{
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "white",
    borderWidth: 1
  },
  text:{
    color: "black"
  }
})

export default styles