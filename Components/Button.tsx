import React from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';

function StudyButton() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textSCC}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="React native"
          onPress={() => {
            Alert.alert('Hello React native');
          }}
        />
      </View>
      <View
        style={{
          marginVertical: 32,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <Text style={styles.textSCC}>
          Flutter là gì? Flutter là một framework mã nguồn mở dành cho di động
          được phát hành vào tháng 5 năm 2017 bởi Google. Nói một cách dễ hiểu,
          Flutter cho phép bạn tạo một ứng dụng di động chỉ với một codebase
          trên iOS và Android bằng một ngôn ngữ lập trình và một cơ sở mã duy
          nhất.
        </Text>
        <Button
          title="Flutter"
          color={'pink'}
          onPress={() => {
            Alert.alert('This is flutter');
          }}
        />
      </View>

      <View
        style={{
          marginVertical: 32,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <Text style={styles.textSCC}>
          Để phát triển với Flutter, bạn sẽ sử dụng một ngôn ngữ lập trình có
          tên là Dart. Ngôn ngữ này được tạo ra bởi Google vào tháng 10 năm 2011
          và được cải tiến rất nhiều trong những năm qua. Dart tập trung vào
          phát triển giao diện người dùng và bạn có thể sử dụng nó để tạo các
          ứng dụng web và di động.
        </Text>
        <Button
          disabled
          color={'gray'}
          title="Please click me!"
          onPress={() => {
            Alert.alert('Thank you?');
          }}
        />
      </View>

      <View
        style={{
          borderBottomColor: 'black',
          marginVertical: 32,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <Text style={styles.textSCC}>
          This is layout strategy lets the title define the width of the button
        </Text>
        <View style={styles.btnLeftAndRight}>
          <View style={{width: 150}}>
            <Button
              color={'green'}
              title="LEFT BUTTON"
              onPress={() => {
                Alert.alert('This is button left!');
              }}
            />
          </View>
          <View style={{width: 150}}>
            <Button
              color={'orange'}
              title="RIGHT BUTTON"
              onPress={() => {
                Alert.alert('This is button right!');
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
  },

  textSCC: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
  },

  btnLeftAndRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default StudyButton;
