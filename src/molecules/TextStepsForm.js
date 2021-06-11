import React from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";

const TextStepsForm = (props) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentImage}>
        <Image source={props.image} style={styles.image} />
      </View>

      <View style={styles.conainerText}>
        <View style={styles.atomiclabs}>
          <Text style={{ ...styles.textColorWhite, fontSize: 35 }}>
            {props.textWhite}
          </Text>
        </View>
        <Text style={{ ...styles.textColorRed, fontSize: 35 }}>
          {props.textRed}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentImage: {
    padding: 30,
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  conainerText: {
    margin: 20,
    alignItems: "flex-start",
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

export default TextStepsForm;
