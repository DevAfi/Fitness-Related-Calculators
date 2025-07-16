import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GenderPicker = ({ selectedGender, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === "male" && styles.selectedButton,
          ]}
          onPress={() => onSelect("male")}
        >
          <Text
            style={[
              styles.genderText,
              selectedGender === "male" && styles.selectedText,
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === "female" && styles.selectedButton,
          ]}
          onPress={() => onSelect("female")}
        >
          <Text
            style={[
              styles.genderText,
              selectedGender === "female" && styles.selectedText,
            ]}
          >
            Female
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
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#014421",
    fontWeight: "bold",
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
  },
  selectedText: {
    color: "white",
  },
});

export default GenderPicker;
