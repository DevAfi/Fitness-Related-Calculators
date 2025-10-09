# 💪 Fitness Calculators

<<<<<<< HEAD
A comprehensive React Native app featuring four essential fitness calculators to help you track your health and fitness goals.

![React Native](https://img.shields.io/badge/React_Native-0.79.5-blue.svg)
![Expo](https://img.shields.io/badge/Expo-~53.0.17-black.svg)
![License](https://img.shields.io/badge/License-0BSD-green.svg)

## 🚀 Features

### 📊 BMI Calculator
Calculate your Body Mass Index using your age, gender, weight, and height. Get instant feedback on your body composition.

### 🔥 Calorie Calculator
Determine your daily caloric needs using the **Mifflin-St Jeor equation** for maximum accuracy. Includes:
- Basal Metabolic Rate (BMR) calculation
- Activity level adjustments
- Weight loss/gain recommendations (±15% caloric adjustment)

### 🥗 Macro Calculator
Get personalized macronutrient breakdowns based on your caloric needs:
- **50% Carbohydrates**
- **31% Protein** 
- **19% Fats**

### 📏 Body Fat Calculator
Estimate your body fat percentage using circumference measurements:
- Waist, neck, and hip measurements
- Gender-specific calculations
- Navy method formula

## 🛠️ Tech Stack

- **React Native** 0.79.5
- **Expo** ~53.0.17
- **React Navigation** for seamless navigation
- **React Native Picker** for intuitive selections

## 📱 Screenshots

*Add screenshots of your app here to showcase the UI*

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI
- iOS Simulator or Android Emulator (or physical device with Expo Go)

=======
A comprehensive React Native mobile application that provides four essential fitness calculators to help users track their health and fitness goals. Built with modern UI design principles and accurate scientific formulas.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Features

- **📊 BMI Calculator** - Calculate your Body Mass Index with detailed categorization
- **🔥 Calorie Calculator** - Determine daily caloric needs based on activity level and goals
- **🥗 Macro Calculator** - Get personalized macronutrient breakdowns for your fitness goals
- **📏 Body Fat Calculator** - Estimate body fat percentage using anthropometric measurements

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

>>>>>>> 8c59e18 (color overhaul)
### Installation

1. **Clone the repository**
   ```bash
<<<<<<< HEAD
   git clone https://github.com/yourusername/Fitness-Related-Calculators.git
   cd Fitness-Related-Calculators
=======
   git clone https://github.com/yourusername/FitnessCalculators.git
   cd FitnessCalculators
>>>>>>> 8c59e18 (color overhaul)
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

<<<<<<< HEAD
## 📁 Project Structure

```
Fitness-Related-Calculators/
├── App.js                 # Main app component with navigation
├── screens/              # Calculator screens
=======
## 📱 App Overview

### 🏠 Home Screen
The main screen presents four calculator options with a clean, modern interface:
- BMI Calculator
- Body Fat Calculator  
- Calorie Calculator
- Macro Calculator

### 📊 BMI Calculator
Calculate your Body Mass Index using:
- **Inputs**: Age, Gender, Weight (kg), Height (cm)
- **Formula**: Standard BMI calculation (weight/height²)
- **Output**: BMI value with health category interpretation

### 🔥 Calorie Calculator
Determine your daily caloric needs based on:
- **Inputs**: Age, Gender, Weight (kg), Height (m), Activity Level
- **Formula**: Mifflin-St Jeor Equation for BMR calculation
- **Activity Multipliers**:
  - Sedentary: 1.2
  - Lightly Active: 1.375
  - Moderately Active: 1.55
  - Very Active: 1.725
  - Extremely Active: 1.9
- **Output**: Maintenance calories with weight loss/gain options

### 🥗 Macro Calculator
Get personalized macronutrient breakdowns:
- **Inputs**: Same as calorie calculator + fitness goals
- **Goal Options**: Weight Loss, Muscle Gain
- **Rate Options**: Mild, Normal, Extreme
- **Macro Distribution**: 
  - Carbohydrates: 50%
  - Protein: 31%
  - Fats: 19%
- **Output**: Daily grams for each macronutrient

### 📏 Body Fat Calculator
Estimate body fat percentage using:
- **Inputs**: Age, Gender, Weight (kg), Height (cm), Waist (cm), Neck (cm), Hip (cm - females only)
- **Formula**: US Navy Body Fat Formula
- **Output**: Body fat percentage with health category ranges

## 🎨 Design Features

### Modern Color Scheme
- **Primary Background**: Light gray (#f8fafc)
- **Primary Blue**: Professional blue (#3b82f6) for buttons
- **Success Green**: Emerald green (#10b981) for results
- **Text Colors**: Dark gray (#1e293b) for headings, medium gray (#374151) for body text
- **Accent Colors**: Light grays for borders and subtle elements

### UI Enhancements
- **Card-based Design**: Clean, elevated cards with subtle shadows
- **Rounded Corners**: Modern 12-16px border radius
- **Improved Typography**: Better font weights and sizing
- **Enhanced Inputs**: Larger, more accessible input fields
- **Visual Feedback**: Shadow effects and proper contrast ratios

## 🧮 Scientific Formulas

### Mifflin-St Jeor Equation (BMR)
```
Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
```

### US Navy Body Fat Formula
```
Men: BF% = 495 / (1.0324 - 0.19077 × log10(waist - neck) + 0.15456 × log10(height)) - 450
Women: BF% = 495 / (1.29579 - 0.35004 × log10(waist + hip - neck) + 0.22100 × log10(height)) - 450
```

## 📂 Project Structure

```
FitnessCalculators/
├── App.js                 # Main app component with navigation
├── screens/              # All calculator screens
>>>>>>> 8c59e18 (color overhaul)
│   ├── BMIcalculator.js
│   ├── BodyfatCalculator.js
│   ├── CalorieCalculator.js
│   ├── MacroCalculator.js
<<<<<<< HEAD
│   └── ...
├── utils/                # Utility components and functions
│   ├── Calculations.js   # Core calculation functions
│   ├── GenderPicker.js
│   ├── ActivityLevelPicker.js
│   └── ...
└── assets/               # App icons and images
```

## 🧮 Calculation Methods

### BMI Calculation
```
BMI = weight(kg) / height(m)²
```

### Calorie Calculation (Mifflin-St Jeor)
**Men:** `BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5`
**Women:** `BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161`

### Body Fat Calculation
Uses the Navy method with gender-specific formulas for waist, neck, and hip measurements.

## 🎨 Current Design

The app features a clean, nature-inspired color scheme:
- **Primary Green:** `#014421` (Dark forest green)
- **Background:** `#d0d8c3` (Light sage green)
- **Accent:** White for contrast and readability

## ⚠️ Disclaimer

The calculations provided by this app are for general informational purposes only and do not constitute medical advice. Individual needs may vary significantly. Always consult with a qualified healthcare professional before making changes to your diet, nutrition, or lifestyle.

## 🤝 Contributing

This was my first React Native project! While I'm not actively seeking contributions, I'm always open to learning and improving. Feel free to:
- Report bugs
- Suggest new features
- Share your experience using the app
=======
│   ├── CalorieInfo.js
│   ├── ResultBF.js
│   └── ResultMacro.js
├── utils/                # Utility components and calculations
│   ├── ActivityLevelPicker.js
│   ├── Calculations.js
│   ├── GenderPicker.js
│   ├── GoalPicker.js
│   └── MacroCalRate.js
├── assets/               # App icons and images
└── package.json          # Dependencies and scripts
```

## 🛠️ Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **React Navigation**: Navigation between screens
- **React Native Picker**: Dropdown selection components

## 📋 Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser

## ⚠️ Disclaimer

The calculations and estimates provided by this app are for general informational purposes only and do not constitute medical advice. Individual needs may vary significantly. Always consult with a qualified healthcare professional before making changes to your diet, nutrition, or lifestyle. This app should not be used as the sole basis for dietary or fitness decisions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
>>>>>>> 8c59e18 (color overhaul)

## 📄 License

This project is licensed under the 0BSD License - see the [LICENSE](LICENSE) file for details.

<<<<<<< HEAD
## 🙏 Acknowledgments

- Built with ❤️ using React Native and Expo
- Special thanks to the React Native community for excellent documentation
- Fitness calculation formulas based on established medical research

---

*Made with passion for fitness and technology* 🏃‍♂️💻
=======
## 👨‍💻 Author

**Afonso** - *Initial work* - [YourGitHub](https://github.com/yourusername)

---

⭐ If you found this project helpful, please give it a star!
>>>>>>> 8c59e18 (color overhaul)
