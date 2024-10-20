import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Doctor = ({ name, specialty, rating, icon }) => {
  return (
    <View style={styles.card}>
      <FontAwesome name={icon} size={50} color="black" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={15} color="#7f5539" />
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    margin: 10,
    width: '40%',
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
  },
  specialty: {
    color: 'gray',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
    color: '#7f5539',
  },
});

export default Doctor;
