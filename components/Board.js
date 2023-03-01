import React from 'react';
import { View } from 'react-native';

const styles = {
  board: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(32, 0, 64)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const Board = ({ board }) => {
    const boardStyles = {
      flexDirection: 'column',
      flex: 1,
    };
  
    return (
      <View style={[styles.board, boardStyles]}>
        {board.rows.map((row, y) => (
          <View key={`row-${y}`} style={styles.row}>
            {row.map((cell, x) => (
              <BoardCell key={`cell-${x}`} cell={cell} />
            ))}
          </View>
        ))}
      </View>
    );
  };
  
  export default Board;
  