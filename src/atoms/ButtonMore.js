import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";

const ButtonMore = () => {
  return (
    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {}}>
      <Image
        source={require("../../assets/Group4013.png")}
        style={styles.imageMore}
      />
      <Text style={{ ...styles.textColorWhite, fontSize: 18 }}>
        Quiero saber mas
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textColorWhite: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "justify",
  },
  imageMore: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});
export default ButtonMore;
