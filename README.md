# Water Tracking App
## Overview
This mobile application allows users to track their daily water intake and set goals for water consumption. Users can input the amount of water they drink manually, set their daily water intake goal, and view their water intake history.

### Installation
- Clone the repository.
- Navigate to the project directory.
- Run npm install to install dependencies.
- Run npm start to start the application.
  
## Screens
1. Home Screen
Displays the user's daily goal and current water intake.
Allows users to navigate to other screens to add water intake or set a new goal.

2. Add Water Screen
Enables users to input the amount of water they drink.
Validates the input and updates the total water intake accordingly.

3. Goal Screen
Allows users to set their daily water intake goal.
Saves the goal and navigates back to the Home Screen.


### Usage
Data Intake
Water intake data is inputted manually by the user on the Add Water Screen.
The amount of water intake is then added to the user's total intake and displayed on the Home Screen.
## Screens

### Home Screen

The Home Screen displays the user's daily water intake goal and their current water intake. It also provides options to add water intake and set a new goal.

```jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  // Extracting data from route params
  const { goal, waterIntake } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Tracking App</Text>

      {/* Display Daily Goal */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Daily Goal:</Text>
        <Text style={styles.infoText}>{goal ? `${goal} ml` : 'Not set'}</Text>
      </View>

      {/* Display Water Intake */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Water Intake:</Text>
        <Text style={styles.infoText}>{waterIntake ? `${waterIntake} ml` : 'No data'}</Text>
      </View>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <Button
          title="Add Water"
          onPress={() => navigation.navigate('AddWater', { goal, waterIntake })}
          color="#007bff"
        />
        <Button
          title="Set Goal"
          onPress={() => navigation.navigate('Goal', { goal, waterIntake })}
          color="#28a745"
        />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  // Styles definition
});

export default HomeScreen;
```
### Add Water Screen
Users can manually add their water intake in this screen. They input the amount of water they consumed, and it gets added to their total intake.
```
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddWaterScreen = ({ navigation, route }) => {
  const { goal, waterIntake } = route.params || {};
  const [waterAmount, setWaterAmount] = useState('');

  const handleAddWater = () => {
    // Logic to add water intake
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Water Intake</Text>
      <TextInput
        placeholder="Enter water amount in ml"
        keyboardType="numeric"
        value={waterAmount}
        onChangeText={setWaterAmount}
        style={styles.input}
      />
      <Button title="Add Water" onPress={handleAddWater} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  // Styles definition
});

export default AddWaterScreen;
```
### Goal Screen
Users can set their daily water intake goal in this screen.
```
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const GoalScreen = ({ navigation, route }) => {
  const [goal, setGoal] = useState(route.params?.goal || '');

  const saveGoal = () => {
    // Logic to save the goal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Daily Water Intake Goal</Text>
      <TextInput
        placeholder="Enter goal in ml"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoal}
        style={styles.input}
      />
      <Button title="Save Goal" onPress={saveGoal} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  // Styles definition
});

export default GoalScreen;
```
### History Screen
This screen displays the history of water intake.
```
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryScreen = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Intake History</Text>
      <View style={styles.historyContainer}>
        {/* Logic to display history */}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  // Styles definition
});

export default HistoryScreen;
```
### Data Intake:
Data intake in various screens can be showns in the below syntax.

### Add Water screen
Add Water Screen: Handles user input of water intake and updates the total intake.
```
// AddWaterScreen.js
// Code snippet for handling water intake addition
const handleAddWater = () => {
  const amountToAdd = parseInt(waterAmount, 10);
  if (!isNaN(amountToAdd) && amountToAdd > 0) {
    const newWaterIntake = (waterIntake || 0) + amountToAdd;
    navigation.navigate('Home', { goal, waterIntake: newWaterIntake });
  } else {
    alert('Please enter a valid amount of water to add.');
  }
};
```
### Goal screen
Goal Screen: Allows users to set their daily water intake goal.
```
// GoalScreen.js
// Code snippet for saving the user's goal
const saveGoal = () => {
  // Save goal logic here
  console.log('Goal saved:', goal);
  navigation.navigate('Home', { goal, waterIntake });
};
```
### Hitory Screen
History Screen: Displays the user's water intake history.
```
// HistoryScreen.js
// Code snippet for rendering water intake history
return (
  <View style={styles.container}>
    <Text style={styles.title}>Water Intake History</Text>
    <View style={styles.historyContainer}>
      {history.length > 0 ? (
        history.map((item, index) => (
          <Text key={index} style={styles.historyItem}>
            {item} ml
          </Text>
        ))
      ) : (
        <Text style={styles.noHistoryText}>No water intake history</Text>
      )}
    </View>
  </View>
);
```
### Dependencies
- React Native
- @react-navigation/native
- @react-navigation/stack

