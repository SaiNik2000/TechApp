import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddWaterScreen from './src/screens/AddWaterScreen';
import GoalScreen from './src/screens/GoalScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Stack = createStackNavigator();

const App = () => {
  const [history, setHistory] = useState([]);

  const addWaterIntake = (intake) => {
    setHistory([...history, intake]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AddWater"
          component={AddWaterScreen}
          initialParams={{ addWaterIntake }}
        />
        <Stack.Screen name="Goal" component={GoalScreen} />
        <Stack.Screen name="History">
          {() => <HistoryScreen history={history} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
