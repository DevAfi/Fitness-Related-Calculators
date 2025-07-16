import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CalorieInfo = ({ route }) => {
  const { calories } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calorie Information</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Maintenance</Text>
        <Text style={styles.cardValue}>{calories} kcal/day</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weight Loss</Text>
        <Text style={styles.cardValue}>
          {Math.round(calories * 0.85)} kcal/day
        </Text>
        <Text style={styles.cardSubtitle}>-15% (0.5kg/week)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weight Gain</Text>
        <Text style={styles.cardValue}>
          {Math.round(calories * 1.15)} kcal/day
        </Text>
        <Text style={styles.cardSubtitle}>+15% (0.5kg/week)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#d0d8c3",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#014421",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#014421",
  },
  cardTitle: {
    fontSize: 18,
    color: "#014421",
    fontWeight: "bold",
  },
  cardValue: {
    fontSize: 24,
    color: "#014421",
    fontWeight: "bold",
    marginVertical: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#014421",
  },
});

export default CalorieInfo;
