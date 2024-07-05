import React from 'react';
import {Text, View, FlatList} from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'React native',
  },
  {
    id: 2,
    name: 'Flutter',
  },
  {
    id: 3,
    name: 'javascript',
  },
];

const Item = ({item}) => (
  <View>
    <Text>{item.name}</Text>
  </View>
);

const flatlist = () => {
  return (
    <FlatList 
        data={DATA} 
        renderItem={Item} 
        keyExtractor={item => item.id} />
  );
};

export default flatlist;
