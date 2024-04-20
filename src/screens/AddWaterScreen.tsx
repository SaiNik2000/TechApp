import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddWaterScreen = ({ navigation, route }) => {
  const { goal, waterIntake } = route.params || {};
  const [waterAmount, setWaterAmount] = useState('');

  const handleAddWater = () => {
    const amountToAdd = parseInt(waterAmount, 10);
    if (!isNaN(amountToAdd) && amountToAdd > 0) {
      const newWaterIntake = (waterIntake || 0) + amountToAdd;
      navigation.navigate('Home', { goal, waterIntake: newWaterIntake });
    } else {
      alert('Please enter a valid amount of water to add.');
    }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default AddWaterScreen;
