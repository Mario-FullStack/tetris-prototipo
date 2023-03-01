import React from 'react';
import { StyleSheet, View } from 'react-native';

const Preview = ({ shape }) => {
  const blockSize = 20;
  const shapes = {
    I: {
      blocks: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      color: '#00ccff',
    },
    J: {
      blocks: [
        [0, 0, 0],
        [2, 2, 2],
        [0, 0, 2],
      ],
      color: '#0000ff',
    },
    L: {
      blocks: [
        [0, 0, 0],
        [3, 3, 3],
        [3, 0, 0],
      ],
      color: '#ff9900',
    },
    O: {
      blocks: [
        [4, 4],
        [4, 4],
      ],
      color: '#ffff00',
    },
    S: {
      blocks: [
        [0, 0, 0],
        [0, 5, 5],
        [5, 5, 0],
      ],
      color: '#00ff00',
    },
    T: {
      blocks: [
        [0, 0, 0],
        [6, 6, 6],
        [0, 6, 0],
      ],
      color: '#9900ff',
    },
    Z: {
      blocks: [
        [0, 0, 0],
        [7, 7, 0],
        [0, 7, 7],
      ],
      color: '#ff0000',
    },
  };

  const blockStyle = (type) => ({
    width: blockSize,
    height: blockSize,
    backgroundColor: shapes[type].color,
  });

  return (
    <View style={styles.previewContainer}>
      {shapes[shape].blocks.map((row, y) => (
        <View key={y} style={styles.previewRow}>
          {row.map((cell, x) =>
            cell !== 0 ? (
              <View key={x} style={[blockStyle(shape), styles.block]} />
            ) : (
              <View key={x} style={styles.emptyBlock} />
            )
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    backgroundColor: '#fff',
    borderColor: '#333',
    borderWidth: 2,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  previewRow: {
    flexDirection: 'row',
  },
  block: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#333',
  },
  emptyBlock: {
    width: 20,
    height: 20,
  },
});

export default Preview;
