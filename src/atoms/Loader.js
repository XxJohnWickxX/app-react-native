import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.content}>
      <ActivityIndicator color={"#ffffff"} size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30
  },
});

export default Loader;
