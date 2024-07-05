import React from 'react';
import {Text, View} from 'react-native';
import {HamTinhTong, HamTinhHieu} from './Function/HamTinhToan';

// interface typeData {
//   x: string;
//   y: string;
// }

function MyComponent(e) {
  let {x, y} = e;
  const {person} = e;
  const {name, age, address} = person;
  const {sinhviens} = e;
  return (
    <View
      style={{
        backgroundColor: 'orange',
      }}>
      <Text>{x}</Text>
      <Text>{y}</Text>
      <Text>{name}</Text>
      {sinhviens.map(sv => (
        <Text>{sv.hoten}</Text>
      ))}
      <Text>Tong hai so 5 va 3 la: {HamTinhTong(5, 3)}</Text>
      <Text>Hieu cua hai so 8 va 3 la: {HamTinhHieu(8, 3)}</Text>
      <Text>Helllo react native</Text>
    </View>
  );
}

export default MyComponent;
