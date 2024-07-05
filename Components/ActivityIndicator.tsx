import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const activityIndicator = () => {
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size={'large'} />
    <ActivityIndicator size={'small'} color={'#0000ff'} />
    <ActivityIndicator size={'small'} color={'#00ff00'} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
});

export default activityIndicator;
