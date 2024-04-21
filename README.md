# Water Tracking App

This mobile application allows users to track their daily water intake. Users can set a daily water intake goal and manually add their water intake throughout the day.

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

