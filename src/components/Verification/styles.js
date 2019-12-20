import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, margin: 20 },
  block: { alignItems: "center" },

  image: { width: 50, height: 50 },
  textInfo: { 
  textAlign: "center", 
  fontSize: 13, 
  marginTop: 20 
},
  message: {
    color: "gray",
    alignSelf: "flex-start",
    marginTop: 25,
    fontSize: 13
  },
  item:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  input:{ textAlign: "center" },
  button:{
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "white",
    borderWidth: 1
  },
  textColor:{ color: "black" }
});

export default styles;
