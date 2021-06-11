import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View styles={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textName}>
          &#169; 2020 AtomicLabs. Todos los derechos reservados
        </Text>
        <Text style={styles.privacy}>Aviso de privacidad</Text>

        <View style={styles.contentImage}>
          <View style={styles.linkedin}>
            <Image
              source={require("../../assets/linkedin.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.twitter}>
            <Image
              source={require("../../assets/twitter.png")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "black",
    paddingTop: "10%",
    paddingBottom: "20%",
  },
  textName: {
    color: "white",
    fontSize: 16,
  },
  privacy: {
    color: "white",
    fontSize: 16,
    paddingTop: 20,
    textDecorationLine: "underline",
  },
  contentImage: { flexDirection: "row", alignItems: "center", paddingTop: 30 },
  linkedin: {
    paddingRight: 10,
  },
  twitter: {
    paddingLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default Footer;
