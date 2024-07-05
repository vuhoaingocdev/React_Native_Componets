import {StyleSheet, Button, View, Text} from 'react-native';
import {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePicker11 = () => {
  return (
    <View style={styles.container}>
      <Button title="Mở dateTimePicker" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DateTimePicker11;
