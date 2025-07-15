import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

const BMIcalculator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>BMI Calculator</Text>

      <View style={styles.QuestionContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your weight (kg)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your height (m)"
          keyboardType="numeric"
        />
        <Button title="Calculate BMI" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

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
});

export default BMIcalculator;
