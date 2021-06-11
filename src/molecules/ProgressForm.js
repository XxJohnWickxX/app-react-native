import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ProgressForm = (props) => {
    const {widthBar} = props;
  return (
    <View style={styles.content}>
      <View style={styles.containerImage}>
        <View style={styles.contenImageLeft}>
          <Image
            source={props.imageLeft}
            style={styles.imageLeft}
          />
        </View>
        <View style={styles.contentImageRigth}>
          <Image
            source={props.imageRigth}
            style={styles.imageRigth}
          />
        </View>
      </View>
      <View style={styles.backgroundBar}>
        <View style={{...styles.progress, width: widthBar}}>
          <Text />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  containerImage: {
    flexDirection: "row",
  },
  contenImageLeft: {
    paddingBottom: 10,
    paddingLeft: 80,
  },
  imageLeft: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  contentImageRigth: {
    alignItems: "flex-end",
    paddingBottom: 10,
    paddingLeft: 150,
  },
  imageRigth: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  backgroundBar: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "1%",
    backgroundColor: "#eaeaea",
    borderRadius: 20,
  },
  progress: {
    flex: 1,
    justifyContent: "center",
    
    height: "1%",
    backgroundColor: "#e85a2b",
    borderRadius: 20,
  },
});

export default ProgressForm;
