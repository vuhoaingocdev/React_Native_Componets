import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

export default function studyText() {
  const [tieuDe, setTieuDe] = useState('My name is: ');
  const getName = () => {
    setTieuDe(tieuDe + 'Vu Hoai Ngoc');
  };
  return (
    <Text style={styles.baseText} onPress={getName}>
      <Text>{tieuDe}</Text>
      {'\n'}
      <Text>This is my name</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Time News Roman',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});
