import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import GenderPicker from "../utils/GenderPicker";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { calculateBMI } from "../utils/Calculations";

const Tab = createBottomTabNavigator();

const BMIcalculator = () => {
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("60");
  const [height, setHeight] = useState("180");

  const [bmi, setBMI] = useState(null);
  const navigation = useNavigation();

  const handleCalculate = () => {
    if (!age || !weight || !height) {
      alert("Please fill in all fields");
      return;
    }
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    if (isNaN(ageNum) || isNaN(weightNum) || isNaN(heightNum)) {
      alert("Please enter valid numbers");
      return;
    }
    const cBMI = calculateBMI(weightNum, heightNum);
    setBMI(cBMI);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topHeader}>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => navigation.goBack()}
          >
            <Text>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>BMI Calculator</Text>

          <Tab.Screen
            name="BMIcalculator"
            component={BMIcalculator}
            options={{ headerShown: false }}
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.QuestionContainer}>
            <Text style={styles.QuestionCaption}>Age:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Age"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />
            <GenderPicker selectedGender={gender} onSelect={setGender} />
            <Text style={styles.QuestionCaption}>Weight (kg):</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Weight (kg)"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
            <Text style={styles.QuestionCaption}>Height (cm):</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your height (m)"
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />

            <Button
              title="Calculate Body Mass Index"
              onPress={handleCalculate}
              style={styles.buttonSub}
            />
          </View>

          {bmi && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Body Mass Index</Text>
              <Text style={styles.resultValue}>{bmi}</Text>
            </View>
          )}
          <View style={styles.disclaimerContainer}>
            <Text style={styles.finePrint}>
              Disclaimer: The macronutrient and calorie estimates provided here
              are for general informational purposes only and do not constitute
              medical advice. Individual needs may vary. Always consult with a
              qualified healthcare professional before making changes to your
              diet, nutrition, or lifestyle. We do not recommend using these
              calculators as the sole basis for dietary decisions{" "}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d8c3",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  scrollContent: {
    width: "100%",
    alignItems: "center",
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
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#014421",
    fontFamily: "Arial",
  },
  /* Input Fields */

  QuestionContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  QuestionCaption: {
    fontSize: 16,
    marginBottom: 8,
    color: "#014421",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#014421",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },

  buttonSub: {
    backgroundColor: "#014421",
    padding: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  resultContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  resultTitle: {
    fontSize: 16,
    color: "#014421",
    fontWeight: "bold",
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#014421",
    marginBottom: 15,
  },
  calorieInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  calorieBox: {
    width: "48%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#014421",
    alignItems: "center",
  },
  calorieLabel: {
    fontSize: 16,
    color: "#014421",
    fontWeight: "bold",
  },
  calorieValue: {
    fontSize: 20,
    color: "#014421",
    fontWeight: "bold",
    marginVertical: 5,
  },
  calorieSubtext: {
    fontSize: 12,
    color: "#014421",
  },
  disclaimerContainer: {
    width: "90%",
    paddingVertical: 10,
  },
  finePrint: {
    color: "grey",
    fontSize: "10",
  },
});

export default BMIcalculator;
