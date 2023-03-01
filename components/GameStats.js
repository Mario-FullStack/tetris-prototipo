import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameStats = ({ score, level, lines }) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Score:</Text>
        <Text style={styles.statValue}>{score}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Level:</Text>
        <Text style={styles.statValue}>{level}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Lines:</Text>
        <Text style={styles.statValue}>{lines}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statValue: {
    fontSize: 18,
    color: '#777',
  },
});

export default GameStats;
