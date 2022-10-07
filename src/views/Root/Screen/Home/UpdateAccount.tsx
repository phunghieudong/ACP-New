//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, ToastAndroid, Modal, Pressable } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { putProvider } from "../../../../api/Provider/index"
import ErrorText from '../../../../components/More/error-text';
import { LocalStorage } from "../../../../utils/LocalStorage/index";
import { Buffer } from 'buffer';
const ChangePasswordScreen = () => {
  function showToast() {
    ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
  }
  const navigation = useNavigation();
  const [fullName, setfullName] = useState<string>('');
  const [phone, setphone] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [taxCode, settaxCode] = useState<string>('');
  const [address, setaddress] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const [user, setUser] = useState({});
  const UpdateProvider = () => {
    // console.log("phunghieudong", username)
    setErrorText('');
    if (!!!fullName) {
      setErrorText('Vui lòng nhập tên công ty ');
    }
    if (!!!phone) {
      setErrorText('Vui lòng nhập số điện thoại ');
    }



    else {
      UpdateProviderPutApi({
        fullName: fullName,
        phone: phone,
        address: address,
        email: email,
        taxCode: taxCode,
        id: user.userId
      });

    }
  }

  const [modalVisible, setModalVisible] = useState(false);
  const UpdateProviderPutApi = async (data: any) => {
    try {
      const res = await putProvider.putapiprovider(data);
      console.log("hieudong1", res)
      if (res.data.ResultCode === 200) {
        onPress = setModalVisible(!modalVisible)
      } else {
        console.log("hieudong2", res)
        console.log("hieudong3", res)
      }
    } catch (error: any) {
      console.log("hieudong4", res)
    }
  }

  useEffect(() => {
    DemoToken();
  }, []);

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
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', backgroundColor: '#9CBD44', width: '100%', height: 64, justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ justifyContent: "center", alignItems: 'center', height: 30, width: 30, }}>
            <Image
              source={require('../../../../assets/images/goback.png')}
              style={{ width: 7.17, height: 14 }}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Cập nhật thông tin</Text>
        <View style={{ height: 30, width: 30 }}></View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={showToast}>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 15 }}>
            <Image
              source={require('../../../../assets/images/camera.png')}
              style={{ width: 90, height: 90 }}
            />
          </View>
        </TouchableOpacity >
        <ScrollView>
          <View style={{ marginHorizontal: 20, marginTop: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Tên công ty</Text>

              <Text style={{ marginTop: 16, fontSize: 20, fontWeight: "600", color: "red" }}> *</Text>
            </View>

            <TextInput
              value={fullName}
              placeholder="Tên công ty"
              onChangeText={(e: string) => setfullName(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Số điện thoại</Text>
              <Text style={{ marginTop: 16, fontSize: 20, fontWeight: "600", color: "red" }}> *</Text>
            </View>

            <TextInput
              value={phone}
              placeholder="Số điện thoại"
              onChangeText={(e: string) => setphone(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Email</Text>
              {/* <Text style={{ marginTop: 16, fontSize: 20, fontWeight: "600", color: "red" }}> *</Text> */}
            </View>

            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={(e: string) => setemail(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Mã số thuế</Text>
            <TextInput
              value={taxCode}
              placeholder="Mã số thuế"
              onChangeText={(e: string) => settaxCode(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Địa chỉ</Text>
            <TextInput
              value={address}
              placeholder="Địa chỉ"
              onChangeText={(e: string) => setaddress(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            <ErrorText content={errorText} />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}> */}
              <View style={{ marginTop: 32, marginBottom: 32, backgroundColor: '#9CBD44', height: 44, width: "100%", borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>CẬP NHẬT</Text>
              </View>
            </TouchableOpacity>
          </View>

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
            <Text style={{
              fontSize: 20, fontWeight: '600',
              marginBottom: 15,
              textAlign: "center"
            }}>Xin chúc mừng </Text>
            <Text style={styles.modalText}>Bạn đã cập nhật thông tin Nhà Cung Cấp thành công </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}

                onPress={() => UpdateProvider()}
              >
                <Text style={styles.textStyle}>THOÁT</Text>
              </TouchableOpacity>
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
    textAlign: "center",
    color: '#666666'
  }
});
export default ChangePasswordScreen; 