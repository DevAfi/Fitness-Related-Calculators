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
import ResultBF from "./screens/ResultBF";
import ResultMacro from "./screens/ResultMacro";

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
        <Stack.Screen name="ResultBF" component={ResultBF} />
        <Stack.Screen name="ResultMacro" component={ResultMacro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#1e293b",
    textAlign: "center",
    fontFamily: "System",
  },

  calcButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 18,
    paddingHorizontal: 24,
    width: "100%",
    alignItems: "center",
    borderRadius: 16,
    marginVertical: 8,
    shadowColor: "#3b82f6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  calcButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "System",
  },
});
