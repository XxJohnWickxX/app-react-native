import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const SlideHome = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.separator}>
            <View style={styles.left} />
            <View style={styles.center} />
            <View style={styles.rigth} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.contentText}>
            {item.text.map((e, index) => {
              return (
                <Text key={index} style={styles.text}>
                  <View style={styles.sphere} />
                  {"  "}
                  {e}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  const slides = [
    {
      key: "one",
      title: "IMAGINA",
      text: [
        "Etrategia Digital",
        "Big Data & Analysis",
        "Consultiría Tecnológica",
        "Reducción de costos TI",
      ],
      image: require("../../assets/Group4036.png"),
      backgroundColor: "#59b2ab",
    },
    {
      key: "two",
      title: "EXPLORA",
      text: ["Innovación y creación tecnológica", "UI / UX", "Innovación"],
      image: require("../../assets/Group4035.png"),
      backgroundColor: "#febe29",
    },
    {
      key: "three",
      title: "CONQUISTA",
      text: [
        "Desarrollo tecnológico y creación tecnológica",
        "Ciberseguridad",
        "Servicios de la Nube",
      ],
      image: require("../../assets/Group4037.png"),
      backgroundColor: "#22bcb5",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#e85a2b",
        margin: 20,
        borderRadius: 10,
      }}
    >
      <AppIntroSlider renderItem={renderItem} data={slides} />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    margin: 40,
    paddingBottom: 20,
  },
  container: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    height: 3,
    width: 80,
    backgroundColor: "white",
    borderRadius: 50,
  },
  center: {
    height: 3,
    width: 10,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 50,
  },
  rigth: {
    height: 3,
    width: 80,

    backgroundColor: "white",
    borderRadius: 50,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  contentText: {
    justifyContent: "center",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingBottom: 15,
  },
  sphere: {
    height: 8,
    width: 8,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SlideHome;
