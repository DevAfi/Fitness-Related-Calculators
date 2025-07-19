import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import BodyfatCalculator from "./BodyfatCalculator";
import CalorieCalculator from "./CalorieCalculator";
import MacroCalculator from "./MacroCalculator";

const Tab = createBottomTabNavigator();

const BMIcalculator = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>BMI Calculator</Text>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
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

          {/*  Navigation Bar */}

          <View style={styles.navBarContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate("BMI")}
              >
                <Text style={styles.navButtonText}>BMI</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate("BodyFat")}
              >
                <Text style={styles.navButtonText}>Body Fat</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate("Calories")}
              >
                <Text style={styles.navButtonText}>Calorie</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate("Macros")}
              >
                <Text style={styles.navButtonText}>Macros</Text>
              </TouchableOpacity>

              {/* Add more buttons here if needed */}
            </ScrollView>
          </View>
          <View style={styles.disclaimerContainer}>
            <Text style={styles.finePrint}>
              Disclaimer: The macronutrient and calorie estimates provided here
              are for general informational purposes only and do not constitute
              medical advice. Individual needs may vary. Always consult with a
              qualified healthcare professional before making changes to your
              diet, nutrition, or lifestyle. We do not recommend using these
              calculators as the sole basis for dietary decisions{" "}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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

  /* Navigation Bar */

  navBarContainer: {
    paddingVertical: 10,
    //backgroundColor: "black",
    height: 60,

    position: "absolute",
    bottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  navButton: {
    backgroundColor: "#d0d8c3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,

    borderWidth: 1,
    borderColor: "#014421",
  },
  navButtonText: {
    color: "#014421",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Arial",
  },
  disclaimerContainer: {
    width: "90%",
    paddingVertical: 10,
  },
  finePrint: {
    color: "grey",
    fontSize: "10",
  },
});

export default BMIcalculator;
