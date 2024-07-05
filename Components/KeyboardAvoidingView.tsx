import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

const keyboardavoidingview = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.viewTextAndInput}>
          <Text style={styles.text}>KeyboardAvoidingView</Text>
          <TextInput placeholder="Name" style={styles.input} />
          <Button
            title="SUBMIT"
            onPress={() => {
              Alert.alert('Hello');
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default keyboardavoidingview;
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  viewTextAndInput: {
    flex: 1,
    justifyContent: 'space-around',
  },
  input: {
    fontSize: 20,
    borderColor: 'black',
    borderBottomWidth: 1,
    height: 40,
    marginRight: 10,
    marginLeft: 10,
  },
});
