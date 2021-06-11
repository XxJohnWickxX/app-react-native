import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { FormLayout, ImageHeader, TextCustom } from "../atoms";
import { TextTwoHome, Footer } from "../molecules";

const SuccessView = () => {
  return (
    <FormLayout>
      <ScrollView style={styles.content}>
        <ImageHeader />
        <TextTwoHome
          textWhite={"TUS DATOS"}
          textCombineWhite={"HAN SIDO"}
          textCombineRed={"ENVIADOS"}
          textCombineRedTwo={"CON EXITO"}
        />
        <TextCustom
          text={
            "En breve recibirás un corro de confirmación por parte del equipo AtomicLabs."
          }
          stylect={styles.text}
        />
        <TextCustom
          text={
            "Recuerda revisar tu bandeja de SPAM \n¡Esperamos verte pronto!"
          }
          stylect={styles.text2}
        />
        <View style={styles.contents}>
          <Image
            source={require("../../assets/Group4039.png")}
            style={styles.astronaut}
          />
        </View>
        <Footer />
      </ScrollView>
    </FormLayout>
  );
};
const styles = StyleSheet.create({
  content: {
    paddingTop: "5%",
  },
  text: {
    marginHorizontal: 10,
    margin: 30,
  },
  text2: {
    marginHorizontal: 10,
    margin: 10,
  },
  contents: {
    alignItems: "center",
  },
  astronaut: {
    width: 400,
    height: 500,
    resizeMode: "contain",
  },
});

export default SuccessView;
