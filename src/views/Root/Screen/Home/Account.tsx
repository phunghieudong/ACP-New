//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, ToastAndroid, Modal, Pressable, Switch } from 'react-native';
import ToggleSwitch from "toggle-switch-react-native";
import { useNavigation } from '@react-navigation/native';
import { LocalStorage } from "../../../../utils/LocalStorage/index";
import { Buffer } from 'buffer';
import { useIsFocused } from '@react-navigation/native';
Buffer.from('anything', 'base64');


const AccountScreen = ({ }) => {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);

  const [user, setUser] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);


  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const focused = useIsFocused(true);
  function showToast() {
    ToastAndroid.show('Tính năng còn đang phát triển !', ToastAndroid.SHORT);
  }

  const _logout = () => {
    LocalStorage.logout();
    navigation.navigate('SigninScreeen')
    // navigation.navigate('Confirm')

  }

  useEffect(() => {
    (async () => {
      if (!focused) {
        console.log("focused1", focused);

      } else {
        DemoToken()
        console.log("focused2", focused);
      }
    })();
  }, [focused]);

  const DemoToken = async () => {
    const accessToken = await LocalStorage.getToken();
    !!accessToken && setUser(JSON.parse(Object.values(parseJwt(accessToken))[0]))
  }

  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString());
    return JSON.parse(jsonPayload) || {};
  }

  console.log("--- user", user);

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
                // source={require('../../../../assets/images/camera.png')}
                source={{ uri: user.thumbnail }}
                style={{ width: 90, height: 90 }}
              />
            </View>
          </TouchableOpacity >
          <View style={{ marginHorizontal: 32, marginTop: 18 }}>
            <Text style={{ fontSize: 16, color: '#000000', fontWeight: "600" }}>
              {user.fullName}
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
            <Text style={{ fontSize: 14, color: '#999999', fontWeight: "600" }}>{user.email}</Text>
          </View>
          <View style={{ marginTop: 9, marginLeft: 40.28, flexDirection: "row" }}>
            <Image

              source={require('../../../../assets/images/phone.png')}
              style={{ width: 16, height: 16, marginRight: 9 }}
            />
            <Text style={{ fontSize: 14, color: '#999999', fontWeight: "600" }}>{user.phone}</Text>
          </View>
          <View style={{ marginTop: 9, marginLeft: 40.28, flexDirection: "row" }}>
            <Image

              source={require('../../../../assets/images/now.png')}
              style={{ width: 16, height: 16, marginRight: 9 }}
            />
            <Text style={{ fontSize: 14, color: '#999999', fontWeight: "600" }}>{user.address}</Text>

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
              {/* <ToggleSwitch
                isOn={true}
                onColor="#CCCCCC"
                offColor="#CCCCCC"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="small"
                onToggle={isOn => console.log("changed to : ", isOn)}
              /> */}

              <Switch
                trackColor={{ false: '#666666', true: '#666666' }}
                thumbColor={isEnabled ? '#A5C63F' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />


            </View>

          </View>

          <View style={{ borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center', borderColor: '#D9D9D9', width: "100%", paddingTop: 24 }}></View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>

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
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}   onPress={_logout}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn có chắc chắn muốn đăng xuất khỏi ứng dụng ?</Text>
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>THOÁT</Text>
              </Pressable>
              <Pressable
                style={[styles.button1, styles.buttonClose1]}
                onPress={_logout}
              >
                <Text style={styles.textStyle}>ĐĂNG XUẤT</Text>
              </Pressable>
            </View>


          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2
  },
  button1: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    marginLeft: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonClose1: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
export default AccountScreen; 