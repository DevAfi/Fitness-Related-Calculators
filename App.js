import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BMIcalculator from "./screens/BMIcalculator";
import BodyfatCalculator from "./screens/BodyfatCalculator";
import CalorieCalculator from "./screens/CalorieCalculator";
import MacroCalculator from "./screens/MacroCalculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
