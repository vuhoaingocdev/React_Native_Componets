import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

const scrollview = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.viewCrollview}>
        <Text style={styles.text}>
          Năm nay mẹ em đã tròn 40 tuổi và có gần 20 năm gắn bó với nghề giáo
          viên mầm non. Mẹ có dáng người nhỏ bé và hơi gầy, nhưng vẫn rất khỏe.
          Mẹ có thể một tay bế học sinh của mình, tay còn lại quét lớp, xếp đồ
          chơi cho ngăn nắp. Da của mẹ trắng hồng nhưng hơi khô, đôi bàn tay mùa
          đông thường bị bong da vì phải tiếp xúc nhiều với nước. Khuôn mặt của
          mẹ có dáng trái xoan, phần trán hơi ngắn nên mẹ thường để tóc mái bằng
          để che bớt đi. Đôi mắt của mẹ là mắt một mí, lúc nào cũng đeo một cặp
          kính cận để nhìn rõ hơn. Vì đặc thù nghề nghiệp, nên mẹ của em chẳng
          trang điểm khi đi làm, sợ dính son vào các bạn nhỏ. Trang phục của mẹ
          cũng là những bộ quần áo đồng phục màu xanh dương đơn điệu. Mái tóc
          cũng được tết lại gọn gàng hoặc búi lên phía sau đầu. Chỉ khi có dịp
          quan trọng đi đâu, mẹ mới xõa tóc ra và trang điểm. Lúc đó, em thấy mẹ
          trông thật đẹp biết bao nhiêu, chẳng kém các diễn viên trên tivi đâu.
          Công việc là giáo viên mầm non nên mẹ em luôn phải đến trường từ sớm
          và trở về nhà tối muộn. Dù vậy, mẹ vẫn luôn cố dành nhiều thời gian
          nhất cho gia đình. Bố là người nấu cơm cho cả nhà, thì mẹ sẽ rửa bát.
          Sau đó bổ hoa quả rồi ngồi ăn, trò chuyện với cả nhà. Có thể mẹ của em
          chưa hoàn hảo trong mắt những người xung quanh. Nhưng với em thì mẹ
          chính là mặt trời hoàn mĩ nhất, vừa ấm áp lại xinh đẹp. Chẳng thể nào
          mà em sống được nếu như thiếu đi mặt trời nhỏ ấy dù chỉ một ngày. Mẹ
          của em năm nay 35 tuổi, và đang làm công việc bán hàng online. Mẹ có
          vóc người nhỏ nhắn, hơi gầy một chút. Nhưng nhờ có nước da trắng hồng
          và gương mặt thanh tú, nên trông mẹ xinh xắn lắm. Khuôn mặt của mẹ khá
          nhỏ, nổi bật với đôi mắt to tròn và cái miệng chúm chím. Khi mẹ cười
          tươi, sẽ xuất hiện cái lúm đồng tiền nhỏ bên má trái, khiến nụ cười ấy
          thêm phần duyên dáng. Mẹ thường để kiểu tóc ngắn đến cằm, hơi cụp vào
          một chút và có để mái. Mẹ bảo như vậy sẽ giúp che khuyết điểm trên
          khuôn mặt, nhưng em thấy dù mẹ có vén hết tóc lên thì vẫn rất đẹp. Vì
          chủ yếu làm việc ở nhà, nên trang phục của mẹ luôn là những bộ quần áo
          ở nhà đơn giản và hầu như không hề trang điểm. Suốt ngày mẹ bận bịu
          kiểm tra hàng hóa rồi trả lời tin nhắn của khách. Có những hôm đã 11
          giờ khuya, mẹ vẫn còn ngồi gói hàng. Dù vậy, mẹ vẫn chăm lo chu đáo
          cho cả nhà. Lúc nào nhà em cũng sạch sẽ và tươm tất. Bữa cơm cũng luôn
          nóng hổi và thơm ngon. Mẹ thật là giỏi. Bây giờ, em đã lớn, nên đã có
          thể giúp mẹ được nhiều việc hơn. Em thích nhất, là những tối học bài
          xong, sẽ sang cùng mẹ gói hàng. Vừa làm, em vừa kể cho mẹ nghe chuyện
          ở lớp. Mẹ sẽ chăm chú lắng nghe và nhìn em bằng ánh mắt dịu dành, trìu
          mến. Còn bố sẽ ngồi ở bên cạnh, thỉnh thoảng chêm vào những câu bông
          đùa khiến hai mẹ con cười khoái chí. Đó là khoảnh khắc mà em trông đợi
          nhất trong ngày. Em mong rằng, ngày nào gia đình em cũng trải qua bình
          yên và hạnh phúc như thế. Bởi nụ cười của mẹ là món quà tuyệt vời nhất
          đối với em.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  viewCrollview: {
    backgroundColor: 'gray',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 17,
  },
});
export default scrollview;
