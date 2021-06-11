import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { FormLayout, ImageHeader, TextCustom } from "../atoms";
import { ProgressForm, TextStepsForm, Form, Footer } from "../molecules";

const FormRegister = () => {
  return (
    <FormLayout>
      <ScrollView style={styles.content}>
        <ImageHeader />
        <ProgressForm
          imageLeft={require("../../assets/Group4014.png")}
          imageRigth={require("../../assets/Group4019.png")}
          widthBar={"30%"}
        />
        <TextStepsForm
          textWhite={"TE QUEREMOS"}
          textRed={"CONOCER"}
          image={require("../../assets/Group4014.png")}
        />
        <TextCustom
          text={
            "Queremos saber que ers tú, por favor ingresa los siguinetes datos:"
          }
        />
        <Form />
        <View style={styles.contents}>
          <Image
            source={require("../../assets/Group4033.png")}
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
  contents: {
    alignItems: "center",
    paddingTop: 30,
  },
  astronaut: {
    width: 400,
    height: 550,
    resizeMode: 'contain'
  },
});

export default FormRegister;
