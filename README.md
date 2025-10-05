# 💪 Fitness Calculators

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

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Fitness-Related-Calculators.git
   cd Fitness-Related-Calculators
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

## 📁 Project Structure

```
Fitness-Related-Calculators/
├── App.js                 # Main app component with navigation
├── screens/              # Calculator screens
│   ├── BMIcalculator.js
│   ├── BodyfatCalculator.js
│   ├── CalorieCalculator.js
│   ├── MacroCalculator.js
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

## 📄 License

This project is licensed under the 0BSD License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using React Native and Expo
- Special thanks to the React Native community for excellent documentation
- Fitness calculation formulas based on established medical research

---

*Made with passion for fitness and technology* 🏃‍♂️💻