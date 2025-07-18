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
import GenderPicker from "../utils/GenderPicker";
import MacroCalRate from "../utils/MacroCalRate";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const ResultMacro = ({ route }) => {
  const { calories } = route.params;
  const [selectedGender, setGender] = React.useState("male");
  const [selectedGoal, setSelectedGoal] = React.useState("weight_loss");
  const [selectedRate, setSelectedRate] = React.useState("mild");
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#d0d8c3",
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

export default ResultMacro;
