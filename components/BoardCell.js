import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoardCell = ({ type }) => {
  const cellStyles = [styles.cell];

  if (type === 1) {
    cellStyles.push(styles.type1);
  } else if (type === 2) {
    cellStyles.push(styles.type2);
  } else if (type === 3) {
    cellStyles.push(styles.type3);
  } else if (type === 4) {
    cellStyles.push(styles.type4);
  } else if (type === 5) {
    cellStyles.push(styles.type5);
  } else if (type === 6) {
    cellStyles.push(styles.type6);
  } else if (type === 7) {
    cellStyles.push(styles.type7);
  }

  return (
    <View style={cellStyles}></View>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#333'
  },
  type1: {
    backgroundColor: '#FF0D72'
  },
  type2: {
    backgroundColor: '#0DC2FF'
  },
  type3: {
    backgroundColor: '#0DFF72'
  },
  type4: {
    backgroundColor: '#F538FF'
  },
  type5: {
    backgroundColor: '#FF8E0D'
  },
  type6: {
    backgroundColor: '#FFE138'
  },
  type7: {
    backgroundColor: '#3877FF'
  }
});

export default BoardCell;
