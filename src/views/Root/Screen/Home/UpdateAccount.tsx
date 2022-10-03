//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
const ChangePasswordScreen = () => {
  function showToast() {
    ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
  }
  const navigation = useNavigation();



  

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
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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