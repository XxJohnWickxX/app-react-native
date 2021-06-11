import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const image = require("../../assets/MaskGroup1.png");

const HomeLayout = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        {props.children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
  },
  image: {
    
    width: "100%",
    height: "100%",
  },
});

export default HomeLayout;
