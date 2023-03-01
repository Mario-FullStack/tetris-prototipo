import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Game from './Game';

const GameController = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <View style={styles.container}>
      {gameStarted ? (
        <Game />
      ) : (
        <>
          <Text style={styles.title}>Tetris</Text>
          <TouchableOpacity style={styles.button} onPress={handleStartGame}>
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default GameController;
