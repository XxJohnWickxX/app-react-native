import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TextTwoHome = (props) => {
  const { textWhite, textCombineWhite, textCombineRed, textCombineRedTwo } =
    props;

  return (
    <View style={styles.conainerText}>
      <Text style={{ ...styles.textColorWhite, fontSize: 40 }}>
        {textWhite}
      </Text>
      <View style={styles.atomiclabs}>
        <Text style={{ ...styles.textColorWhite, fontSize: 40 }}>
          {textCombineWhite}{" "}
        </Text>
        <Text style={{ ...styles.textColorRed, fontSize: 40 }}>
          {textCombineRed}
        </Text>
      </View>
      <Text
        style={{ ...styles.textColorRed, fontSize: 40, textAlign: "center" }}
      >
        {textCombineRedTwo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conainerText: {
    margin: 20,
    alignItems: "center",
    paddingVertical: 30,
  },
  textColorWhite: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  textColorRed: {
    color: "#fa4d09",
    fontWeight: "bold",
  },
  atomiclabs: {
    flexDirection: "row",
  },
});

export default TextTwoHome;
