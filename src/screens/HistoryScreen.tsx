import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryScreen = ({ history }) => {
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
  historyContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  historyItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  noHistoryText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default HistoryScreen;
