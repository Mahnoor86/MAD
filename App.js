import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Doctor from './Doctor';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={20} color="gray" />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search conditions, doctors..." 
        />
      </View>

      <Text style={styles.title}>Let's Find Your Doctor</Text>

      <View style={styles.gridContainer}>
        <Doctor
          name="Dr.Emily" 
          specialty="Nutritionist" 
          rating="4.9" 
          icon="user-md" 
        />
        <Doctor 
          name="Dr. Michael" 
          specialty="Physical Therapist" 
          rating="4.8" 
          icon="user-md" 
        />
        <Doctor 
          name="Dr. Sarah" 
          specialty="Occupational Therapist" 
          rating="4.7" 
          icon="user-md" 
        />
        <Doctor 
          name="Dr. David" 
          specialty="Speech Therapist" 
          rating="5.0" 
          icon="user-md" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#CF9FFF', // Background color is purple
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default App;

































