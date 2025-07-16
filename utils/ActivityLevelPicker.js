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
          dropdownIconColor="#014421"
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
    color: "#014421",
    fontWeight: "bold",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#014421",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  picker: {
    width: "100%",
    height: Platform.OS === "ios" ? 150 : 50,
  },
  pickerItem: {
    fontSize: 16,
    color: "#014421",
    height: 120,
  },
});

export default ActivityLevelPicker;
