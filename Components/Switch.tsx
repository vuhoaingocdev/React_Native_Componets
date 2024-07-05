import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';

const switchh = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}} //màu của hanh trượt
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}  //màu của nút trượt
        ios_backgroundColor="#3e3e3e"   //màu switch trên nền tảng ios
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default switchh;
