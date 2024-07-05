import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';

const validation_Data = () => {
  const [email, onChangeEmail] = useState('');
  const [isValidEmail, setValidEmail] = useState(true);
  const [number, onChangeNumber] = useState('');
  const [isValidNumber, setValidNumber] = useState(true);

  //Validate email
  const validateEmail = email => {
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!email) return true;
    if (regex.test(email)) {
      return true;
    }
    return false;
  };

  //Validate phone number
  const validatePhoneNumber = phone => {
    let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/);
    if (!number) return true;
    if (regex.test(phone)) {
      return true;
    }
    return false;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{padding: 10, fontSize: 22, color: 'black'}}>Email</Text>
      <TextInput
        style={{
          height: 40,
          margin: 10,
          borderWidth: 1,
          padding: 10,
        }}
        autoCapitalize="none"
        onChangeText={text => {
          onChangeEmail(text);
          const isValid = validateEmail(text);
          isValid ? setValidEmail(true) : setValidEmail(false);
        }}
        value={email}
      />
      <Text style={{padding: 10, fontSize: 20, color: 'red'}}>
        {isValidEmail ? '' : 'Email không đúng định dạng!'}
      </Text>

      <Text style={{padding: 10, fontSize: 22, marginTop: 30, color: 'black'}}>
        Phone number
      </Text>
      <TextInput
        style={{
          height: 40,
          margin: 10,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={text => {
          onChangeNumber(text);
          const isValid = validatePhoneNumber(text);
          isValid ? setValidNumber(true) : setValidNumber(false);
        }}
        value={number}
        keyboardType="numeric"
      />
      <Text style={{padding: 10, fontSize: 20, color: 'red'}}>
        {isValidNumber ? '' : 'Số điện thoại không hợp lệ!'}
      </Text>
    </SafeAreaView>
  );
};

export default validation_Data;
