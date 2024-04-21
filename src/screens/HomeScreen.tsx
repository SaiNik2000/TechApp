import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const { goal, waterIntake } = route.params || {};

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
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
    color: '#333', // Text color for the title
    backgroundColor: '#fff', // Background color for the title
    paddingHorizontal: 10, // Add padding to the title
    borderRadius: 5, // Add border radius to the title
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    color: '#333', // Text color for the title
    backgroundColor: '#fff', // Background color for the title
    paddingHorizontal: 10, // Add padding to the title
    borderRadius: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});

export default HomeScreen;
