import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import ActivityLevelPicker from "../utils/ActivityLevelPicker";
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

import BodyfatCalculator from "./BodyfatCalculator";
import BMIcalculator from "./BMIcalculator";
import CalorieCalculator from "./CalorieCalculator";
import CalorieInfo from "./CalorieInfo";
import ResultMacro from "./ResultMacro";

import { calculateBMI, calculateCaloricNeeds } from "../utils/Calculations";

const Tab = createBottomTabNavigator();

const MacroCalculator = () => {
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("60");
  const [height, setHeight] = useState("1.8");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(null);
  const [calculatedWeight, setCalculatedWeight] = useState(null);

  const multipliers = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725,
    extremely_active: 1.9,
  };

  const navigation = useNavigation();

  const handleCalculate = () => {
    // Validate all fields are filled
    if (!age || !weight || !height) {
      alert("Please fill in all fields");
      return;
    }

    // Convert to numbers
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    // Validate numbers
    if (isNaN(ageNum) || isNaN(weightNum) || isNaN(heightNum)) {
      alert("Please enter valid numbers");
      return;
    }

    // Calculate and set results
    const calculatedCalories = calculateCaloricNeeds(
      ageNum,
      gender,
      weightNum,
      heightNum,
      activityLevel
    );
    setCalories(calculatedCalories);

    navigation.navigate("ResultMacro", {
      calories: calculatedCalories,
      weight: parseFloat(weight),
    });
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
          <Text style={styles.titleText}>Macro Calculator</Text>

          <Tab.Screen
            name="CalorieInfo"
            component={CalorieInfo}
            options={{ headerShown: false }}
          />
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() =>
              navigation.navigate("ResultMacro", {
                calories,
                weight: calculatedWeight,
              })
            }
          >
            <Text>i</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.QuestionContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your Age"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />

            <GenderPicker selectedGender={gender} onSelect={setGender} />

            <TextInput
              style={styles.input}
              placeholder="Enter your Weight (kg)"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your height (m)"
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />
            <ActivityLevelPicker
              selectedValue={activityLevel}
              onValueChange={setActivityLevel}
            />

            <Button
              title="Calculate Macros"
              onPress={handleCalculate}
              style={styles.buttonSub}
            />
          </View>

          {calories && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>MAINTENANCE CALORIES</Text>
              <Text style={styles.resultValue}>{calories} kcal/day</Text>

              <View style={styles.calorieInfoContainer}>
                <View style={styles.calorieBox}>
                  <Text style={styles.calorieLabel}>Weight Loss</Text>
                  <Text style={styles.calorieValue}>
                    {Math.round(calories * 0.85)} kcal
                  </Text>
                  <Text style={styles.calorieSubtext}>-15%</Text>
                </View>

                <View style={styles.calorieBox}>
                  <Text style={styles.calorieLabel}>Weight Gain</Text>
                  <Text style={styles.calorieValue}>
                    {Math.round(calories * 1.15)} kcal
                  </Text>
                  <Text style={styles.calorieSubtext}>+15%</Text>
                </View>
              </View>
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
    justifyContent: "space-between",
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

export default MacroCalculator;
