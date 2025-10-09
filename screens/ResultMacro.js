import React from "react";
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
import { useState } from "react";

import GoalPicker from "../utils/GoalPicker";
import GenderPicker from "../utils/GenderPicker";
import MacroCalRate from "../utils/MacroCalRate";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { calculateCaloricNeeds, calculateMacros } from "../utils/Calculations";

const ResultMacro = ({ route }) => {
  const { calories, weight } = route.params;
  const [selectedGender, setGender] = React.useState("male");
  const [selectedGoal, setSelectedGoal] = React.useState("weight_loss");
  const [selectedRate, setSelectedRate] = React.useState("mild");
  const navigation = useNavigation();

  const getAdjustedCalories = () => {
    let factor = 1;
    if (selectedGoal === "weight_loss") {
      if (selectedRate === "mild") factor = 0.89;
      else if (selectedRate === "normal") factor = 0.79;
      else if (selectedRate === "extreme") factor = 0.57;
    } else if (selectedGoal === "muscle_gain") {
      if (selectedRate === "mild") factor = 1.05;
      else if (selectedRate === "normal") factor = 1.21;
      else if (selectedRate === "extreme") factor = 1.43;
    }
    return Math.round(calories * factor);
  };

  const adjustedCalories = getAdjustedCalories();

  /*  console.log("Before calculateMacros:", {
    adjustedCalories,
    weight,
    typeofAdjustedCalories: typeof adjustedCalories,
    typeofWeight: typeof weight,
  });  */

  const { protein, carbs, fats } = calculateMacros(adjustedCalories, weight);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topHeader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.infoButton}
          >
            <Text>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.cardTitle}>Macro Information</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <MacroCalRate
            selectedGoal={selectedGoal}
            selectedRate={selectedRate}
            onSelect={(value) => {
              if (["weight_loss", "muscle_gain"].includes(value)) {
                setSelectedGoal(value);
              } else {
                setSelectedRate(value);
              }
            }}
          />

          {selectedGoal == "weight_loss" ? (
            <View style={styles.CardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Calories:</Text>
                <Text style={styles.cardValue}>
                  {adjustedCalories.toFixed(1)} grams/day
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Protein:</Text>
                <Text style={styles.cardValue}>
                  {protein.toFixed(1)} grams/day
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Carbohydrates:</Text>
                <Text style={styles.cardValue}>
                  {carbs.toFixed(1)} grams/day
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Fat:</Text>
                <Text style={styles.cardValue}>
                  {fats.toFixed(1)} grams/day
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.CardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Calories:</Text>
                <Text style={styles.cardValue}>
                  {adjustedCalories.toFixed(1)} grams/day
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Protein:</Text>
                <Text style={styles.cardValue}>
                  {protein.toFixed(1)} grams/day
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Carbohydrates:</Text>
                <Text style={styles.cardValue}>
                  {carbs.toFixed(1)} grams/day
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Fat:</Text>
                <Text style={styles.cardValue}>
                  {fats.toFixed(1)} grams/day
                </Text>
              </View>
            </View>
          )}
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
    padding: 20,
    backgroundColor: "#f8fafc",
    width: "100%",
  },
  scrollContent: {
    width: "100%",
    alignItems: "center",
  },
  CardContainer: {
    width: "80%",
    gap: 15,
    marginVertical: 50,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  InfoContainer: {
    width: "80%",
    height: "100%",
    alignItems: "center",
    gap: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#014421",
    backgroundColor: "#f0f0f0",
  },
  cardTitle: {
    fontSize: 20,
    color: "#374151",
    fontWeight: "600",
  },
  cardValue: {
    fontSize: 28,
    color: "#10b981",
    fontWeight: "bold",
    marginVertical: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#014421",
  },
  QuestionContainer: {
    width: "80%",
    alignItems: "center",
    gap: 5,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    backgroundColor: "#ffffff",
    position: "absolute",
    left: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  disclaimerContainer: {
    width: "90%",
    paddingVertical: 10,
  },
  finePrint: {
    color: "#6b7280",
    fontSize: 12,
    lineHeight: 16,
  },
});

export default ResultMacro;
