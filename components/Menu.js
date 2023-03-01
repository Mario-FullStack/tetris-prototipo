import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Menu = ({ startGame }) => {
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.title}>Tetris</Text>
      <TouchableOpacity style={styles.button} onPress={startGame}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#00cc99',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Menu;
