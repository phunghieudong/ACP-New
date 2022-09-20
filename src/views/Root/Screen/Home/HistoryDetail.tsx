

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import Swiper from "react-native-swiper";
const HistoryDetailScreen = ({ navigation }) => {

  const [leftNumber, setLeftNumber] = useState<number>();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {

    setLeftNumber(69);
  }, []);

  const callApi = () => {


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
      const response = await callApi();
      if (!!response) {
        setUser(response);
      }
    } catch (error) {
      console.log('getUser: ', error);
    }


  };

  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={false}
        height={180}
        containerStyle={{ flex: 0 }}
        activeDotColor={"#E7312F"}
        dotColor="rgba(0, 0, 0, .2)"
        paginationStyle={{
          bottom: 8,
        }}
      >
        <Image
          source={require('../../../../assets/images/image1.png')}
          style={{ width: "100%", height: 180 }}
        />
        <Image
          source={require('../../../../assets/images/image4.png')}
          style={{ width: "100%", height: 180 }}
        />
        <Image
          source={require('../../../../assets/images/image2.png')}
          style={{ width: "100%", height: 180 }}
        />
      </Swiper>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#A5C63F', height: 32, width: 32, marginTop: 30, marginLeft: 16, borderRadius: 6, position: 'absolute' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>

          <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../../../../assets/images/goback.png')}
              style={{ width: 7.17, height: 14 }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 46, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, color: '#000000', fontWeight: "600" }}>Chi tiết phiên gói thầu</Text>
        <Text style={{ fontSize: 14, color: '#999999', }}>Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s</Text>
      </View>
      <View style={{ flexDirection: 'column', marginHorizontal: 20, paddingTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
          <Text style={{ fontSize: 14, color: "#999999" }}>Tên phiên</Text>
          <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>SP001</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
          <Text style={{ fontSize: 14, color: "#999999" }}>Sẩn phẩm</Text>
          <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>Dừa nước</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
          <Text style={{ fontSize: 14, color: "#999999" }}>Thời gian bắt đầu</Text>
          <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>10:00</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
          <Text style={{ fontSize: 14, color: "#999999" }}>Thời gian kết thúc</Text>
          <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>13:00</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
          <Text style={{ fontSize: 14, color: "#999999" }}>Số lượng tối thiểu</Text>
          <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>3,000</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
          <Text style={{ fontSize: 14, color: "#999999" }}>Số lượng tối đa</Text>
          <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>5,000</Text>
        </View>



      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View style={{ marginTop: 16, backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: "#ffffff" }}>TRỞ VỀ TRANG CHỦ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    color: '#fff',
    borderRadius: 12,
  },
});
export default HistoryDetailScreen; 