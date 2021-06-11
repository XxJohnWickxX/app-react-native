import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TextCustom = (props) => {
  return (
    <View style={[styles.content, props.stylect]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 30,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TextCustom;
