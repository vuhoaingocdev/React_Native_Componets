import React, {useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Animated,
  Easing,
  Image,
  TouchableOpacity,
} from 'react-native';

const animSongSong = () => {
  const topmargin = useRef(new Animated.Value(0)).current;
  const spinValue = useRef(new Animated.Value(0)).current;
  const bottommargin = useRef(new Animated.Value(-100)).current;

  //Khai báo biến nội suy
  const spin = spinValue.interpolate({
    inputRange: [-1, 0, 1], //di chuyển từ đâu đến đâu
    outputRange: ['-45deg', '0deg', '45deg'], //xoay từ 0 đến 45 độ
  });

  const animationButton = Animated.timing(bottommargin, {
    toValue: 200,
    duration: 4000,
    useNativeDriver: false,
  });

  //Tạo ra một chuỗi các hiệu ứng:  Animated.sequence
  const AnimatinoBell = Animated.sequence([
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }),
    Animated.timing(spinValue, {
      toValue: -1,
      duration: 4000,
      useNativeDriver: false,
    }),
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
    }),
  ]);

  //Lặp
  const animation = Animated.loop(
    // Animated.parallel: chạy animation song song
    Animated.parallel([animationButton, AnimatinoBell]),
  );

  useEffect(() => {
    setTimeout(() => {
      //Animation chạy tuần tự
      animation.start();
      // Animated.timing(spinValue, {
      //   toValue: 1,
      //   duration: 3000,
      //   useNativeDriver: false,
      // }).start();
    }, 2000);
  }, []);

  const StopAnimation = () => {
    animation.stop();
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          borderWidth: 4,
          borderColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            transform: [{rotate: spin}],
            backgroundColor: 'blue',
            width: 120,
            height: 120,
            marginTop: topmargin,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../images/bell.png')} resizeMode="stretch" />
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            bottom: bottommargin,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={StopAnimation}
            style={{
              position: 'absolute',
              bottom: bottommargin,
              width: 300,
              height: 50,
              backgroundColor: 'black',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 22, color: 'white'}}>Stop</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
export default animSongSong;
