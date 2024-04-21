import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const GoalScreen = ({ navigation, route }) => {
  const [goal, setGoal] = useState(route.params?.goal || '');
  const [waterIntake, setWaterIntake] = useState(route.params?.waterIntake || '');

  const saveGoal = () => {
    // Save goal logic here (e.g., to AsyncStorage or Redux store)
    // For demonstration purposes, we'll just log the goal
    console.log('Goal saved:', goal);
    navigation.navigate('Home', { goal, waterIntake }); // Navigate back to Home with both goal and water intake
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default GoalScreen;
