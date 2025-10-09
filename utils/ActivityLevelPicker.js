import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ActivityLevelPicker = ({ selectedValue, onValueChange }) => {
  const activityLevels = [
    { label: "Sedentary (little/no exercise)", value: "sedentary" },
    { label: "Lightly Active (1-3 days/week)", value: "lightly_active" },
    { label: "Moderately Active (3-5 days/week)", value: "moderately_active" },
    { label: "Very Active (6-7 days/week)", value: "very_active" },
    { label: "Extremely Active (athlete/training)", value: "extremely_active" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Activity Level:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}
          dropdownIconColor="#6b7280"
          mode="dropdown"
          itemStyle={styles.pickerItem}
        >
          {activityLevels.map((level) => (
            <Picker.Item
              key={level.value}
              label={level.label}
              value={level.value}
            />
          ))}
        </Picker>
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
    color: "#374151",
    fontWeight: "600",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    overflow: "hidden",
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
  picker: {
    width: "100%",
    height: Platform.OS === "ios" ? 150 : 50,
  },
  pickerItem: {
    fontSize: 16,
    color: "#374151",
    height: 120,
  },
});

export default ActivityLevelPicker;
