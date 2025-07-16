export const calculateBMI = (weight, height) => {
  if (height > 0) {
    return weight / (height * height);
  }
  return 0;
};

export const calculateCaloricNeeds = (
  age,
  gender,
  weight,
  height,
  activityLevel
) => {
  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height * 100 - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height * 100 - 5 * age - 161;
  }

  const activityMultipliers = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725,
    extremely_active: 1.9,
  };

  return Math.round(bmr * activityMultipliers[activityLevel]);
};
