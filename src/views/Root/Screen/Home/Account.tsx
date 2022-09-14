
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Switch, ToastAndroid } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
const AccountScreen = ({ navigation }) => {
  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => {
    setEnabled((oldValue) => !oldValue);
  };

  function showToast() {
    ToastAndroid.show('Tính năng còn đang phát triển !', ToastAndroid.SHORT);
  }
  // const thumbColorOn = Platform.OS === "android" ? "#219EBC" : "#f3f3f3";
  // const thumbColorOff = Platform.OS === "android" ? "#CCCCCC" : "#fff";
  // const trackColorOn = Platform.OS === "android" ? "#219EBC" : "#fff";
  // const trackColorOff = Platform.OS === "android" ? "#CCCCCC" : "#fff";

  return (
    <View style={styles.container}>

      <View style={{ backgroundColor: '#A5C63F', width: "100%", height: 64, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '600' }}>Tài khoản</Text>
      </View>
      <View style={styles.container}>
        <ScrollView style={{ height: 1000 }}>
          <TouchableOpacity onPress={showToast}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 12 }}>
              <Image

                source={require('../../../../assets/images/camera.png')}
                style={{ width: 90, height: 90 }}
              />
            </View>
          </TouchableOpacity >
          <View style={{ marginHorizontal: 32, marginTop: 18 }}>
            <Text style={{ fontSize: 16, color: '#000000', fontWeight: "600" }}>
              Phùng Hiểu Đông
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('UpdateAccount')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                  source={require('../../../../assets/images/pen.png')}
                  style={{ width: 13.13, height: 13.13, marginRight: 9 }}
                />
                <Text style={{ fontSize: 14, color: '#999999', fontWeight: "600" }}>Cập nhật thông tin</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <View style={{ flexDirection: 'row', marginTop: 48, marginLeft: 16 }}>

              <Image

                source={require('../../../../assets/images/user.png')}
                style={{ width: 16, height: 16, marginRight: 9 }}
              />
              <Text style={{ fontSize: 16, color: '#000000', fontWeight: "600" }}>Thông tin liên lạc</Text>
            </View>
          </View>
          <View style={{ marginTop: 9, marginLeft: 40.28, flexDirection: "row" }}>
            <Image

              source={require('../../../../assets/images/calender.png')}
              style={{ width: 13.48, height: 14, marginRight: 9 }}
            />
            <Text style={{ fontSize: 14, color: '#999999', fontWeight: "600" }}>23 tháng 09, 1991</Text>
          </View>
          <View style={{ marginTop: 9, marginLeft: 40.28, flexDirection: "row" }}>
            <Image

              source={require('../../../../assets/images/phone.png')}
              style={{ width: 16, height: 16, marginRight: 9 }}
            />
            <Text style={{ fontSize: 14, color: '#999999', fontWeight: "600" }}>+84 902 345 678</Text>
          </View>
          <View style={{ marginTop: 9, marginLeft: 40.28, flexDirection: "row" }}>
            <Image

              source={require('../../../../assets/images/now.png')}
              style={{ width: 16, height: 16, marginRight: 9 }}
            />
            <Text style={{ fontSize: 14, color: '#999999', fontWeight: "600" }}>1073/23 CMT8, phường7, quận Tân Bình, TP.HCM</Text>

          </View>
          <View style={{ borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center', borderColor: '#D9D9D9', width: "100%", paddingTop: 24 }}></View>
          <TouchableOpacity onPress={showToast}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16, marginTop: 27 }}>
              <Image

                source={require('../../../../assets/images/balo.png')}
                style={{ width: 16, height: 14.06, marginRight: 9 }}
              />
              <Text style={{ fontSize: 16, color: '#000000', fontWeight: "600" }}>Danh sách gói thầu của bạn</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center', borderColor: '#D9D9D9', width: "100%", paddingTop: 24 }}></View>
          <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16, marginTop: 27 }}>
              <Image
                source={require('../../../../assets/images/key.png')}
                style={{ width: 11.29, height: 15.06, marginRight: 9 }}
              />
              <Text style={{ fontSize: 16, color: '#000000', fontWeight: "600" }}>Đổi mật khẩu</Text>
            </View>
          </TouchableOpacity>
          <View style={{ borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center', borderColor: '#D9D9D9', width: "100%", paddingTop: 24 }}></View>
          <View style={{ justifyContent: "space-between", flexDirection: 'row', alignItems: 'center', marginLeft: 16, marginTop: 27, }}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ fontSize: 16, color: '#000000', fontWeight: "600", }}>Nhận thông báo  dự thầu</Text>
            </View>
            <View style={{ flexDirection: "row-reverse", paddingStart: 10 }}>
              {/* <Text>{enabled ? "Switch is ON" : "Switch is OFF"}</Text> */}
              <Switch
                onValueChange={toggleSwitch}
                value={enabled}
                thumbColor={enabled ? "red" : "red"}
                trackColor={{ false: "#666666", true: "#666666" }}
                ios_backgroundColor={"yellow"}
              />
            </View>
          </View>
          <View style={{ borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center', borderColor: '#D9D9D9', width: "100%", paddingTop: 24 }}></View>
          <TouchableOpacity onPress={() => navigation.navigate("SigninScreeen")}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16, marginTop: 27, marginBottom: 20 }}>
              <Image

                source={require('../../../../assets/images/lognout.png')}
                style={{ width: 16, height: 16, marginRight: 9 }}
              />
              <Text style={{ fontSize: 16, color: '#E7312F', fontWeight: "600" }}>Đăng xuất</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
export default AccountScreen; 