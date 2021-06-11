import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextCustom } from "../atoms";

const Form = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    nombre: "",
    apellido: "",
    border1: "",
    borderWidth1: 0,
    border2: "",
    borderWidth2: 0,
  });

  function handleState(key, value) {
    switch (key) {
      case "nombre":
        if (state.nombre.length < 5) {
          setState((prev) => ({ ...prev, border1: "red", borderWidth1: 2 }));
        }
        if (state.nombre.length >= 5) {
          setState((prev) => ({ ...prev, border1: "", borderWidth1: 0 }));
        }
        break;
      case "apellido":
        if (state.apellido.length < 5) {
          setState((prev) => ({ ...prev, border2: "red", borderWidth2: 2 }));
        }

        if (state.apellido.length >= 5) {
          setState((prev) => ({ ...prev, border2: "", borderWidth2: 0 }));
        }
        break;
      default:
        break;
    }

    setState((prev) => ({ ...prev, [key]: value }));
  }
  const params = {
    nombre: state.nombre,
    apellido: state.apellido,
  };
  const disabled = state.nombre.length > 5 && state.apellido.length > 5;

  return (
    <>
      <View style={styles.container}>
        <TextCustom text={"Nombre (s)"} stylect={styles.text} />
        <View
          style={{
            ...styles.content,
            borderColor: state.border1,
            borderWidth: state.borderWidth1,
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleState("nombre", value)}
          />
          <Image
            source={require("../../assets/lock.png")}
            style={styles.image}
          />
        </View>
        {state.border1 !== "" && (
          <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>
            El nombre deberá tener minimo 5 caracteres
          </Text>
        )}
      </View>
      <View style={styles.container}>
        <TextCustom text={"Apellidos"} stylect={styles.text} />
        <View
          style={{
            ...styles.content,
            borderColor: state.border2,
            borderWidth: state.borderWidth2,
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleState("apellido", value)}
          />
          <Image
            source={require("../../assets/lock.png")}
            style={styles.image}
          />
        </View>
        {state.border2 !== "" && (
          <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>
            Los apellidos deberán tener minimo 5 caracteres
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.contentButton}
        disabled={!disabled}
        onPress={() =>
          navigation.navigate("ConetnRegisterCellphone", { ...params })
        }
      >
        <View
          style={
            !disabled
              ? styles.contentTextButtonDisabled
              : styles.contentTextButton
          }
        >
          <Text style={styles.textButton}>Enviar</Text>
        </View>
      </TouchableOpacity>
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

export default Form;
