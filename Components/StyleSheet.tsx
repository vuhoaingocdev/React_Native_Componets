import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

function getImage() {
  return (
    <View>
      <Text>StyleSheet</Text>
      <View style={styles.Container}></View>
    </View>
  );
}

export default getImage;

const styles = StyleSheet.create({
  Container: {
    width: 200,
    height: 200,
    backgroundColor: 'orange',
  },
});
