import React, {useEffect, useRef} from 'react';
import {View, SafeAreaView, Text, Animated, Easing} from 'react-native';

const anim = () => {
  //khai báo thành phần thay đổi
  const topmargin = useRef(new Animated.Value(0)).current;
  //Xử lí sự kiện
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(topmargin, {
        toValue: 600,
        duration: 3000,
        useNativeDriver: false, //Thêm useNativeDriver để tránh cảnh báo
        //1.Di chuyển với vận tốc đều
        //easing: Easing.linear,

        //2.Di chuyển với vận tốc tăng dần về phí sau
        //easing: Easing.ease,
        //easing: Easing.quad,
        //easing: Easing.cubic,
        //easing: Easing.poly(5),
        //easing: Easing.sin,
        //easing: Easing.circle,

        //3.Lùi lại một chút rồi di chuyển tới
        //easing: Easing.back(1.4),

        //4.Di chuyển với vận tốc thay đổi
        //easing: Easing.bezier(0.08, 0.87, 0.91, 0.1),

        //5.Nẩy lên
        easing: Easing.bounce,
      }).start();
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, borderWidth: 4, borderColor: 'red'}}>
        <Animated.View
          style={{
            backgroundColor: 'blue',
            width: 120,
            height: 120,
            marginTop: topmargin,
          }}></Animated.View>
      </View>
    </SafeAreaView>
  );
};
export default anim;
