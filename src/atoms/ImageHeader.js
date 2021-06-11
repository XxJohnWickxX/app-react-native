import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImageHeader = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/atomicsLogo.webp")}
        style={styles.imageHeader}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageHeader: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
});
export default ImageHeader;
