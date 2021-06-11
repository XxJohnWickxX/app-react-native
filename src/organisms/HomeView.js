import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { HomeLayout, ImageHeader, ButtonMore, ButtonWhite } from "../atoms";
import {
  TextHome,
  TextTwoHome,
  SliderHome,
  Processing,
  Footer,
  CardsTeam,
} from "../molecules";

const HomeView = () => {
  return (
    <HomeLayout>
      <ScrollView style={styles.content}>
        <ImageHeader />
        <TextHome />
        <ButtonMore />
        <View style={styles.contents}>
          <Image
            source={require("../../assets/Group4032.png")}
            style={styles.astronaut}
          />
        </View>
        <View style={styles.contents}>
          <ButtonWhite />
        </View>

        <TextTwoHome
          textWhite={"SOMOS EL BRAZO"}
          textCombineWhite={"DERECHO"}
          textCombineRed={"DE LA"}
          textCombineRedTwo={"TECNOLOGÍA"}
        />
        <SliderHome />
        <TextTwoHome
          textCombineWhite={"¡TE ENCANTARÁ"}
          textCombineRedTwo={"TRABAJAR CON NOSOTROS!"}
        />

        <View style={styles.contents}>
          <Image
            source={require("../../assets/Group4040.png")}
            style={styles.team}
          />
        </View>

        <Processing />
        <View style={styles.contents}>
          <ButtonWhite />
        </View>
        <TextTwoHome textCombineWhite={"NUESTRO"} textCombineRed={"EQUIPO"} />
        <CardsTeam />
        <Footer />
      </ScrollView>
    </HomeLayout>
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
    height: 350,
  },
  team: {
    width: 400,
    height: 100,
    resizeMode: "cover",
  },
});

export default HomeView;
