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
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const CalorieInfo = ({ route }) => {
  const { calories } = route.params;
  const [selectedGoal, setSelectedGoal] = React.useState("weight_loss");
  const navigation = useNavigation();

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
          <Text style={styles.cardTitle}>Calorie Information</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.QuestionContainer}>
            <GoalPicker
              selectedGoal={selectedGoal}
              onSelect={setSelectedGoal}
            />
          </View>

          {selectedGoal == "weight_loss" ? (
            <View style={styles.CardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Mild Weight Loss</Text>
                <Text style={styles.cardValue}>
                  {Math.round(calories * 0.89)} kcal/day
                </Text>
                <Text style={styles.cardSubtitle}>-11% (0.25kg/week)</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Weight Loss</Text>
                <Text style={styles.cardValue}>
                  {Math.round(calories * 0.79)} kcal/day
                </Text>
                <Text style={styles.cardSubtitle}>-21% (0.5kg/week)</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Extreme Weight Loss</Text>
                <Text style={styles.cardValue}>
                  {Math.round(calories * 0.57)} kcal/day
                </Text>
                <Text style={styles.cardSubtitle}>-43% (1kg/week)</Text>
              </View>
            </View>
          ) : (
            <View style={styles.CardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Mild Weight Loss</Text>
                <Text style={styles.cardValue}>
                  {Math.round(calories * 1.05)} kcal/day
                </Text>
                <Text style={styles.cardSubtitle}>+5% (0.25kg/week)</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Weight Loss</Text>
                <Text style={styles.cardValue}>
                  {Math.round(calories * 1.21)} kcal/day
                </Text>
                <Text style={styles.cardSubtitle}>+21% (0.5kg/week)</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Extreme Weight Gain</Text>
                <Text style={styles.cardValue}>
                  {Math.round(calories * 1.43)} kcal/day
                </Text>
                <Text style={styles.cardSubtitle}>+43% (1kg/week)</Text>
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
    alignItems: "center",
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
    color: "#6b7280",
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

export default CalorieInfo;
