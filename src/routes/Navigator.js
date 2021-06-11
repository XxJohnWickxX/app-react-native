import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  FormRegisterName,
  ConetnRegisterCellphone,
  Success,
} from "../pages";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FormRegisterName" component={FormRegisterName} />
        <Stack.Screen
          name="ConetnRegisterCellphone"
          component={ConetnRegisterCellphone}
        />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
