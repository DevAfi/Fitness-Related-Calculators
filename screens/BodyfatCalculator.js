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

import CalorieCalculator from "./CalorieCalculator";
import BMIcalculator from "./BMIcalculator";
import MacroCalculator from "./MacroCalculator";
import CalorieInfo from "./CalorieInfo";
import ResultBF from "./ResultBF";

import {
  calculateBMI,
  calculateBodyFat,
  calculateCaloricNeeds,
} from "../utils/Calculations";

const Tab = createBottomTabNavigator();

const BodyfatCalculator = () => {
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("60");
  const [height, setHeight] = useState("180");
  const [waist, setWaist] = useState("80");
  const [hip, setHip] = useState("90");
  const [neck, setNeck] = useState("40");
  const [bodyFat, setBodyFat] = useState(null);
  const navigation = useNavigation();

  const handleCalculate = () => {
    if (!age || !weight || !height || !waist || !neck || !hip) {
      alert("Please fill in all fields");
      return;
    }
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const waistNum = parseFloat(waist);
    const neckNum = parseFloat(neck);
    const hipNum = parseFloat(hip);
    if (
      isNaN(ageNum) ||
      isNaN(weightNum) ||
      isNaN(heightNum) ||
      isNaN(waistNum) ||
      isNaN(neckNum) ||
      isNaN(hipNum)
    ) {
      alert("Please enter valid numbers");
      return;
    }

    const cBF = calculateBodyFat(
      ageNum,
      gender,
      weightNum,
      heightNum,
      waistNum,
      neckNum,
      hipNum
    );
    setBodyFat(cBF);
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
          <Text style={styles.titleText}>Body Fat Calculator</Text>

          <Tab.Screen
            name="ResultBF"
            component={ResultBF}
            options={{ headerShown: false }}
          />
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => navigation.navigate("ResultBF", { bodyFat })}
          >
            <Text>i</Text>
          </TouchableOpacity>
        </View>

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
          <Text style={styles.QuestionCaption}>Waist Circumference (cm):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your waist circumference (cm)"
            keyboardType="numeric"
            value={waist}
            onChangeText={setWaist}
          />
          <Text style={styles.QuestionCaption}>Neck Circumference (cm):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your neck circumference (cm)"
            keyboardType="numeric"
            value={neck}
            onChangeText={setNeck}
          />

          {gender == "female" ? (
            <View style={{ width: "100%" }}>
              <Text style={styles.QuestionCaption}>
                Hip Circumference (cm):
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your hip circumference (cm)"
                keyboardType="numeric"
                value={hip}
                onChangeText={setHip}
              />
            </View>
          ) : null}

          <Button
            title="Calculate Body Fat"
            onPress={handleCalculate}
            style={styles.buttonSub}
          />
        </View>

        {bodyFat && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Body Fat Percentage</Text>
            <Text style={styles.resultValue}>{bodyFat} %</Text>
          </View>
        )}

        {/*  Navigation Bar */}

        {/* <View style={styles.navBarContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("BMI")}
          >
            <Text style={styles.navButtonText}>BMI</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("BodyFat")}
          >
            <Text style={styles.navButtonText}>Body Fat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Calories")}
          >
            <Text style={styles.navButtonText}>Calorie</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Macros")}
          >
            <Text style={styles.navButtonText}>Macros</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>*/}
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
  /* Navigation Bar */

  navBarContainer: {
    paddingVertical: 10,
    //backgroundColor: "black",
    height: 60,

    position: "absolute",
    bottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  navButton: {
    backgroundColor: "#d0d8c3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,

    borderWidth: 1,
    borderColor: "#014421",
  },
  navButtonText: {
    color: "#014421",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Arial",
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

export default BodyfatCalculator;
