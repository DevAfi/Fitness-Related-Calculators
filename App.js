import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import BMIcalculator from "./screens/BMIcalculator";
import BodyfatCalculator from "./screens/BodyfatCalculator";
import CalorieCalculator from "./screens/CalorieCalculator";
import MacroCalculator from "./screens/MacroCalculator";
import CalorieInfo from "./screens/CalorieInfo";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Select a Calculator</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("BMI")}
        style={styles.calcButton}
      >
        <Text style={styles.calcButtonText}>BMI Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("BodyFat")}
        style={styles.calcButton}
      >
        <Text style={styles.calcButtonText}>Body Fat Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Calories")}
        style={styles.calcButton}
      >
        <Text style={styles.calcButtonText}>Calorie Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Macros")}
        style={styles.calcButton}
      >
        <Text style={styles.calcButtonText}>Macro Calculator</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BMI" component={BMIcalculator} />
        <Stack.Screen name="BodyFat" component={BodyfatCalculator} />
        <Stack.Screen name="Calories" component={CalorieCalculator} />
        <Stack.Screen name="Macros" component={MacroCalculator} />
        <Stack.Screen name="CalorieInfo" component={CalorieInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d8c3",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#014421",
    fontFamily: "Arial",
  },

  calcButton: {
    backgroundColor: "#014421",
    padding: "30",
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
  },
  calcButtonText: {
    color: "#d0d8c3",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
});
