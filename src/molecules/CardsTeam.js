import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { responsePeople } from "../utils/fetchApis";

const CardsTeam = () => {
  const [people, setPeople] = useState(null);

  async function resData() {
    const response = await responsePeople();
    setPeople(response);
  }

  useEffect(() => {
    resData();
  }, []);

  return (
    people !== null &&
    people.slice(0, 3).map((e, index) => {
      return (
        <View key={`${e}-${index}`} style={styles.content}>
          <View style={styles.container}>
            <View style={styles.card}>
              <Image
                key={`${e}-${index}`}
                source={{ uri: `${e.photograph}` }}
                style={styles.image}
              />
              <View style={styles.textContent}>
                <Text style={styles.textName}>{e.name}</Text>
                <Text style={styles.textArea}>{e.area}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 10,
  },
  container: {
    width: "100%",
    height: 250,
    alignItems: "center",
    backgroundColor: "#256097",
    borderRadius: 10,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContent: {
    alignItems: "center",
    paddingTop: 20,
  },
  textName: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
  },
  textArea: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 14,
    paddingTop: 5,
  },
});

export default CardsTeam;
