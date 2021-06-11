import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextCustom, Loader } from "../atoms";
import { sendForm } from "../utils/fetchApis";

const FormCellphone = (props) => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    cellphone: "",
    loading: false,
  });

  function handleState(key, value) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  async function response(variables, navigation) {
    const res = sendForm(variables, navigation);
    setState((prev) => ({ ...prev, loading: false }));
    
  }

  const disabled = state.cellphone.length >= 10;
  const { apellido, nombre } = props.route.params;

  const variables = {
    firstname: nombre,
    lastname: apellido,
    cellphone: state.cellphone,
  };

  return (
    <>
      <View style={styles.container}>
        <TextCustom text={"Número de Celular"} stylect={styles.text} />
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleState("cellphone", value)}
            keyboardType="numeric"
          />
          <Image
            source={require("../../assets/lock.png")}
            style={styles.image}
          />
        </View>
      </View>
      {state.loading ? (
        <Loader />
      ) : (
        <TouchableOpacity
          style={styles.contentButton}
          disabled={!disabled}
          onPress={() =>
            Alert.alert("¿Seguro que tu informacíon es correcta?", "", [
              {
                text: "Si, mi informacíon es correcta",
                onPress: () => {
                  handleState("loading", true);
                  response(variables, navigation);
                },
              },
              {
                text: "No",
              },
            ])
          }
        >
          <View
            style={
              !disabled
                ? styles.contentTextButtonDisabled
                : styles.contentTextButton
            }
          >
            <Text style={styles.textButton}>Continuar</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
    paddingRight: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  text: {
    marginHorizontal: 0,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    paddingRight: 10,
  },
  contentButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  contentTextButton: {
    backgroundColor: "#fa4d09",
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  contentTextButtonDisabled: {
    backgroundColor: "#fa4d09",
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    opacity: 0.5,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FormCellphone;
