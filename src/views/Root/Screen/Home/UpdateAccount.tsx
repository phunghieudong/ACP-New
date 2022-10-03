//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { putProvider } from "../../../../api/Provider/index"
import ErrorText from '../../../../components/More/error-text';
const ChangePasswordScreen = () => {
  function showToast() {
    ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
  }
  const navigation = useNavigation();
  const [namecompany, setnamecompany] = useState<string>('PHUNG HIEU DONG1234');
  const [phone, setphone] = useState<string>('12345678991');
  const [gmail, setgmail] = useState<string>('dongph.10a2@gmail.com');
  const [taxcode, settaxcode] = useState<string>('7777777');
  const [address, setaddress] = useState<string>('Thành phố Hồ Chí Minh');
  const [errorText, setErrorText] = useState<string>('');
  const UpdateProvider = () => {
    // console.log("phunghieudong", username)
    setErrorText('');
    if (!!!namecompany) {
      setErrorText('Vui lòng nhập tên công ty ');
    }
    if (!!!phone) {
      setErrorText('Vui lòng nhập số điện thoại ');
    }
    if (!!!gmail) {
      setErrorText('Vui lòng nhập Email ');
    }
    if (!!!taxcode) {
      setErrorText('Vui lòng nhập mã số thuế ');
    }
    if (!!!address) {
      setErrorText('Vui lòng nhập địa chỉ ');
    }
    else {
      UpdateProviderPutApi({
        namecompany: namecompany,
        phone: phone,
        gmail: gmail,
        taxcode: taxcode,
        address: address,
        providerId: "dd191af6-1f5e-4af1-bf2f-08da9b88f5ef"
      });
      // console.log("phunghieudong123", username)
    }
  }


  const UpdateProviderPutApi = async (data: any) => {
    try {
      const res = await putProvider.putapiprovider(data);
      console.log("hieudong1", res)
      if (res.data.ResultCode === 200) {
        navigation.navigate("HomeScreen");

      } else {
        console.log("hieudong2", res)
        // setErrorText(res.ResultMessage);
        console.log("hieudong3", res)
      }
    } catch (error: any) {
      // setErrorText("Mật khẩu cũ không chính xác");
      // console.log("hieudong3", res)
      // setErrorText(error?.message);
      // console.log(error);
      console.log("hieudong4", res)
    }
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
              value={namecompany}
              placeholder="Tên công ty"
              onChangeText={(e: string) => setnamecompany(e)}
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
              value={gmail}
              placeholder="Email"
              onChangeText={(e: string) => setgmail(e)}
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
              value={taxcode}
              placeholder="Mã số thuế"
              onChangeText={(e: string) => settaxcode(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            {/* <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Tình / Thành phố</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Quận / Huyện</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Phường / Xã</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            /> */}
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

            <TouchableOpacity onPress={UpdateProvider}>
              {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}> */}
              <View style={{ marginTop: 32, marginBottom: 32, backgroundColor: '#9CBD44', height: 44, width: "100%", borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>CẬP NHẬT</Text>
              </View>
            </TouchableOpacity>
          </View>

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
export default ChangePasswordScreen; 