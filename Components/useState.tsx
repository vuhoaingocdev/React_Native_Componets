import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function state() {
  const [dem, setDem] = useState(0);

  const CongThem1 = () => {
    setDem(dem + 1);
  };

  return (
    <View>
      <Text>Count: {dem}</Text>

      <Button title="Bam de tang 1" onPress={CongThem1} />
    </View>
  );
}

export default state;
