import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Processing = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{"Contratación\nremota"}</Text>
      <Text style={styles.arrow}>&#10140;</Text>
      <Text style={styles.text}>{"Entrevista con\nel area de RH"}</Text>
      <Text style={styles.arrow}>&#10140;</Text>
      <Text style={styles.text}>{"Prueba\npractica"}</Text>
      <Text style={styles.arrow}>&#10140;</Text>
      <Text style={styles.text}>{"Entrevista\ntécnica"}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  arrow: {
    color: "#fa4d09",
    padding: 10,
  },
});

export default Processing;
