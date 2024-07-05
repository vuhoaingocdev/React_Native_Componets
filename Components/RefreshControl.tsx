import React, {useCallback, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const refreshcontrol = () => {
  const [refreshing, setRefreshing] = useState(true);

  //   const pullMe = () => {
  //     setRefreshing(true);

  //     setTimeout(() => {
  //       setRefreshing(true);
  //     }, 4000);
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing} /* onRefresh={() => pullMe} */
          />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default refreshcontrol;
