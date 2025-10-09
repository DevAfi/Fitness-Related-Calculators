import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalPicker = ({ selectedGoal, onSelect }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGoal === "weight_loss" && styles.selectedButton,
          ]}
          onPress={() => onSelect("weight_loss")}
        >
          <Text
            style={[
              styles.genderText,
              selectedGoal === "weight_loss" && styles.selectedText,
            ]}
          >
            Weight Loss
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGoal === "muscle_gain" && styles.selectedButton,
          ]}
          onPress={() => onSelect("muscle_gain")}
        >
          <Text
            style={[
              styles.genderText,
              selectedGoal === "muscle_gain" && styles.selectedText,
            ]}
          >
            Muscle Gain
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  genderButton: {
    flex: 1,
    padding: 14,
    marginHorizontal: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d1d5db",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  selectedButton: {
    backgroundColor: "#3b82f6",
    borderColor: "#3b82f6",
    shadowColor: "#3b82f6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  genderText: {
    color: "#374151",
    fontWeight: "600",
    fontSize: 16,
  },
  selectedText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default GoalPicker;
