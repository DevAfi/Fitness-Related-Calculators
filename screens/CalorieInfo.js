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
} from "react-native";
import { useState } from "react";

import GoalPicker from "../utils/GoalPicker";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const CalorieInfo = ({ route }) => {
  const { calories } = route.params;
  const [selectedGoal, setSelectedGoal] = React.useState("weight_loss");
  const navigation = useNavigation();

  return (
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
      <View style={styles.QuestionContainer}>
        <GoalPicker selectedGoal={selectedGoal} onSelect={setSelectedGoal} />
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
      {/*<View style={styles.card}>
        <Text style={styles.cardTitle}>Weight Gain</Text>
        <Text style={styles.cardValue}>
          {Math.round(calories * 1.15)} kcal/day
        </Text>
        <Text style={styles.cardSubtitle}>+15% (0.5kg/week)</Text>
      </View>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#d0d8c3",
    width: "100%",
    alignItems: "center",
  },
  CardContainer: {
    width: "80%",
    gap: 15,
    marginVertical: 50,
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
    paddingVertical: 10,
    backgroundColor: "#d0d8c3",
  },
  infoButton: {
    paddingVertical: 4.5,
    paddingHorizontal: 10.5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#014421",
    position: "absolute",
    left: 10,
  },
});

export default CalorieInfo;
