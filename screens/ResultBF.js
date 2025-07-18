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
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const ResultBF = ({ route }) => {
  const { calories } = route.params;
  const [selectedGender, setGender] = React.useState("male");
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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.QuestionContainer}>
          <GenderPicker selectedGender={selectedGender} onSelect={setGender} />
        </View>

        {selectedGender == "male" ? (
          <View style={styles.CardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Essential</Text>
              <Text style={styles.cardValue}>2 - 5%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Athletes</Text>
              <Text style={styles.cardValue}>6 - 13%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Fitness</Text>
              <Text style={styles.cardValue}>14 - 17%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Acceptable</Text>
              <Text style={styles.cardValue}>18 - 24%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Obese</Text>
              <Text style={styles.cardValue}>25% +</Text>
            </View>
          </View>
        ) : (
          <View style={styles.CardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Essential</Text>
              <Text style={styles.cardValue}>10 - 13%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Athletes</Text>
              <Text style={styles.cardValue}>14 - 20%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Fitness</Text>
              <Text style={styles.cardValue}>21 - 24%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Acceptable</Text>
              <Text style={styles.cardValue}>25 - 31%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Obese</Text>
              <Text style={styles.cardValue}>32% +</Text>
            </View>
          </View>
        )}
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

export default ResultBF;
