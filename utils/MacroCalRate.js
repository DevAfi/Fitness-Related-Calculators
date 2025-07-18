import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MacroCalRate = ({ selectedGoal, selectedRate, onSelect }) => {
  return (
    <View style={styles.containerWrapper}>
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

      {/* bottom rate buttons */}
      {selectedGoal === "muscle_gain" && (
        <View style={styles.rateContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedRate === "mild" && styles.selectedButton,
            ]}
            onPress={() => onSelect("mild")}
          >
            <Text
              style={[
                styles.genderText,
                selectedRate === "mild" && styles.selectedText,
              ]}
            >
              Mild Weight Gain
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedRate === "normal" && styles.selectedButton,
            ]}
            onPress={() => onSelect("normal")}
          >
            <Text
              style={[
                styles.genderText,
                selectedRate === "normal" && styles.selectedText,
              ]}
            >
              Normal Weight Gain
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedRate === "extreme" && styles.selectedButton,
            ]}
            onPress={() => onSelect("extreme")}
          >
            <Text
              style={[
                styles.genderText,
                selectedRate === "extreme" && styles.selectedText,
              ]}
            >
              Extreme Weight Gain
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {selectedGoal === "weight_loss" && (
        <View style={styles.rateContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedRate === "mild" && styles.selectedButton,
            ]}
            onPress={() => onSelect("mild")}
          >
            <Text
              style={[
                styles.genderText,
                selectedRate === "mild" && styles.selectedText,
              ]}
            >
              Mild Weight Loss
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedRate === "normal" && styles.selectedButton,
            ]}
            onPress={() => onSelect("normal")}
          >
            <Text
              style={[
                styles.genderText,
                selectedRate === "normal" && styles.selectedText,
              ]}
            >
              Normal Weight Loss
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedRate === "extreme" && styles.selectedButton,
            ]}
            onPress={() => onSelect("extreme")}
          >
            <Text
              style={[
                styles.genderText,
                selectedRate === "extreme" && styles.selectedText,
              ]}
            >
              Extreme Weight Loss
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  rateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
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

export default MacroCalRate;
