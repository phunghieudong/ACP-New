// Mẫu view, component viết bằng function component
// Có ví dụ và giải thích cách sử dụng hooks cơ bản và typescript cơ bản

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Khởi tạo biến leftNumber với type là number
  const [leftNumber, setLeftNumber] = useState<number>();

  // Khởi tạo biến user với type là IUser, IUser được khai báo ở thư mục types
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    // Sau khi màn hình render sẽ chạy vô đây

    // Gán giá trị cho "leftNumber" bằng 1
    // Lưu ý: đã khởi tạo type cho nó là number, nếu nạp 1 kiểu không phải số nó sẽ báo lỗi
    setLeftNumber(69);
  }, []);

  const callApi = () => {
    // Hàm này để làm mẫu thôi

    const newUser: IUser = {
      ID: '1',
      Phone: '1',
      FullName: '1',
      Role: 'dev',
      Status: 'active',
    };

    return newUser;
  };

  const getUser = async () => {
    try {
      const response = await callApi(); // Sau khi kết quả api trả về thì sẽ gán nó vô response
      if (!!response) {
        setUser(response); // Gán giá trị vừa lấy từ api vào biến user
      }
    } catch (error) {
      console.log('getUser: ', error);
    }

    // Tới đây là lấy được user rồi, muốn làm gì tiếp thì làm
  };

  return (
    <View style={styles.container}>

      <Text
        onPress={getUser} // Khi nhấn vô chữ nó sẽ gọi cái hàm "getUser"
        style={[
          styles.text,
          {
            // Ghép thêm khúc này vô "styles.text"
            backgroundColor: leftNumber == 69 ? 'green' : 'red', // Nếu leftNumber == 69 thì màu xanh, ngược lại là đỏ
          },
        ]}>
        Phùng Hiểu Đông cuteadsdád
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // Mấy cái style này coi trên tài liệu của react-native nhe
  // Link: https://reactnative.dev/docs/style
  container: {
    flex: 1,
    backgroundColor: '#fff', // Có thể sài "white" hoặc 'rgba'
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    color: '#fff',
    borderRadius: 12,
  },
});
