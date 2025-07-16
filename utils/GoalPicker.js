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
    padding: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#014421",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  selectedButton: {
    backgroundColor: "#014421",
  },
  genderText: {
    color: "#014421",
    fontWeight: "bold",
    fontSize: 19,
  },
  selectedText: {
    color: "white",
  },
});

export default GoalPicker;
