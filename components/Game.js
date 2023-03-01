import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Board from './Board';
import { generateShape, moveShape } from '../utils/shapeUtils';

const Game = () => {
  const [board, setBoard] = useState(() =>
    Array.from({ length: 20 }, () => new Array(10).fill(0))
  );
  const [shape, setShape] = useState(generateShape());
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveLeft = () => {
    setShape((prevShape) => moveShape(prevShape, -1, 0, board));
  };

  const moveRight = () => {
    setShape((prevShape) => moveShape(prevShape, 1, 0, board));
  };

  const rotate = () => {
    setShape((prevShape) => moveShape(prevShape, 0, 0, board, true));
  };

  const moveDown = () => {
    setShape((prevShape) => {
      const movedShape = moveShape(prevShape, 0, 1, board);

      if (movedShape === prevShape) {
        const newBoard = board.map((row) => [...row]);

        prevShape.forEach(([x, y]) => {
          if (y < 1) {
            setGameOver(true);
          }
          newBoard[y][x] = 1;
        });

        setBoard(newBoard);
        setShape(generateShape());
      }

      return movedShape;
    });
  };

  const handleDrop = () => {
    let newShape = shape;

    while (newShape !== moveShape(newShape, 0, 1, board)) {
      newShape = moveShape(newShape, 0, 1, board);
    }

    setShape(newShape);
  };

  useEffect(() => {
    setBoard((prevBoard) => {
      const newBoard = prevBoard.filter((row) => !row.every((cell) => cell === 1));

      for (let i = 0; i < 20 - newBoard.length; i++) {
        newBoard.unshift(new Array(10).fill(0));
      }

      const linesCleared = 20 - newBoard.length;

      setScore((prevScore) => prevScore + linesCleared * 100);

      return newBoard;
    });
  }, [board]);

  useEffect(() => {
    let interval = null;

    if (!gameOver) {
      interval = setInterval(() => {
        moveDown();
      }, 500);
    }

    return () => clearInterval(interval);
  }, [board, shape, gameOver]);

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <View style={styles.gameContainer}>
        <Board board={board} shape={shape} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={moveLeft}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={rotate}>
          <Text style={styles.buttonText}>Rotate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={moveRight}>
          <Text style={styles.buttonText}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDrop}>
<Text style={styles.buttonText}>Drop</Text>
</TouchableOpacity>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#111',
alignItems: 'center',
justifyContent: 'center',
},
gameContainer: {
flexDirection: 'row',
borderWidth: 2,
borderColor: '#FFF',
borderRadius: 5,
overflow: 'hidden',
},
buttonsContainer: {
flexDirection: 'row',
marginTop: 20,
},
button: {
backgroundColor: '#333',
borderRadius: 5,
padding: 10,
marginHorizontal: 10,
},
buttonText: {
color: '#FFF',
fontWeight: 'bold',
fontSize: 18,
},
score: {
color: '#FFF',
fontSize: 24,
marginBottom: 20,
},
});

export default Game;
