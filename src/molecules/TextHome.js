import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

const TextHome = () => {
    return (
        <View style={styles.conainerText}>
          <Text style={{ ...styles.textColorWhite, fontSize: 55 }}>
            Desarrolla todo
          </Text>
          <Text style={{ ...styles.textColorRed, fontSize: 58 }}>
            tu POTENCIAL
          </Text>
          <Text style={{ ...styles.textColorWhite, fontSize: 48 }}>
            dentro del equipo
          </Text>
          <View style={styles.atomiclabs}>
            <Text style={{ ...styles.textColorRed, fontSize: 60 }}>ATOMIC</Text>
            <Text style={{ ...styles.textColorWhite, fontSize: 60 }}>LABS</Text>
          </View>
        </View>
    );
};
const styles = StyleSheet.create({
    conainerText: {
      margin: 15,
      alignSelf: "stretch",
      textAlign: "justify",
    },
    textColorWhite: {
      color: "#ffffff",
      fontWeight: "bold",
      textAlign: "justify",
    },
    textColorRed: {
      color: "#fa4d09",
      fontWeight: "bold",
      textAlign: "justify",
    },
    atomiclabs:{
        flexDirection: "row" 
    },
    
  });

export default TextHome;