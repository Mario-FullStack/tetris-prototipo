import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Preview from './Preview';

const Previews = ({ previews }) => {
  return (
    <View style={styles.previewsContainer}>
      <Text style={styles.title}>Next Shapes</Text>
      {previews.map((shape, index) => (
        <Preview key={index} shape={shape} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  previewsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Previews;
