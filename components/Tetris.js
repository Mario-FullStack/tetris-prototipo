import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import GameBoard from './GameBoard';
import Previews from './Previews';
import GameStats from './GameStats';

const Tetris = () => {
  const [board, setBoard] = useState([]);
  const [currentShape, setCurrentShape] = useState(null);
  const [previews, setPreviews] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    setBoard(createBoard());
    setPreviews(createPreviews());
  }, []);

  useEffect(() => {
    if (!gameOver && currentShape === null) {
      setCurrentShape(previews[0]);
      setPreviews(previews.slice(1));
    }
  }, [previews, gameOver, currentShape]);

  useEffect(() => {
    if (gameOver) {
      cancelAnimationFrame(requestRef.current);
    }
  }, [gameOver]);

  const createBoard = () => {
    return Array.from(Array(20), () => new Array(10).fill(0));
  };

  const createPreviews = () => {
    const shapes = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    return Array.from(Array(5), () => {
      const randomIndex = Math.floor(Math.random() * shapes.length);
      return shapes[randomIndex];
    });
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleScore = (linesCleared) => {
    const scoreTable = [0, 40, 100, 300, 1200];
    setScore((prevScore) => prevScore + scoreTable[linesCleared] * level);
    setLines((prevLines) => prevLines + linesCleared);
    setLevel(Math.min(20, 1 + Math.floor(lines / 10)));
  };

  const handleRestart = () => {
    setBoard(createBoard());
    setCurrentShape(null);
    setPreviews(createPreviews());
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setLines(0);
  };

  return (
    <View style={styles.container}>
      <GameBoard
        board={board}
        currentShape={currentShape}
        setCurrentShape={setCurrentShape}
        handleScore={handleScore}
        handleGameOver={handleGameOver}
        gameOver={gameOver}
        setBoard={setBoard}
        requestRef={requestRef}
      />
      <View style={styles.stats}>
        <Previews previews={previews} />
        <GameStats score={score} level={level} lines={lines} handleRestart={handleRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  stats: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tetris;
