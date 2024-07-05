import React from 'react';
import {View, StatusBar} from 'react-native';

export default function statusbar() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 60}}>
      <StatusBar backgroundColor={'orange'} barStyle={'dark-content'} hidden />
    </View>
  );
}
