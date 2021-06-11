import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { FormLayout, ImageHeader, TextCustom } from "../atoms";
import { ProgressForm, TextStepsForm, FormCellphone, Footer } from "../molecules";

const FormRegisterCellphone = (props) => {
  return (
    <FormLayout>
      <ScrollView style={styles.content}>
        <ImageHeader />
        <ProgressForm
          imageLeft={require("../../assets/Group4016.png")}
          imageRigth={require("../../assets/Group4020.png")}
          widthBar={"100%"}
        />
        <TextStepsForm
          textWhite={"VALIDA TU"}
          textRed={"CELULAR"}
          image={require("../../assets/Group4023.png")}
        />
        <TextCustom text={"Necesitamos validar tu número para continuar"} />
        <TextCustom
          text={"Ingresa tu numero a 10 digitos y te enviaremos un codigo SMS"}
        />
        <FormCellphone {...props} />
        <View style={styles.contents}>
          <Image
            source={require("../../assets/Group4034.png")}
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
    
  },
  astronaut: {
    width: 500,
    height: 550,
    resizeMode: "contain",
  },
});

export default FormRegisterCellphone;
