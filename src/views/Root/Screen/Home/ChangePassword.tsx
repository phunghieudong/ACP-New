
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
const UpdateAccountScreen = ({ navigation }) => {



  const [text, onChangeText] = React.useState("");
  const [text1, onChangeText1] = React.useState("");
  return (
    <View style={styles.container}>

      <View style={{ backgroundColor: '#A5C63F', width: "100%", height: 92, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: "600" }}>Đổi mật khẩu</Text>
      </View>


      <View style={styles.container}>

        <View style={{ marginHorizontal: 20, marginTop: 32 }}>
          <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Mật khẩu cũ</Text>
          <TextInput
            style={{
              height: 40,
              borderWidth: 0.5,
              borderRadius: 6,
              borderColor: "#666666",
              paddingHorizontal: 16,
              marginTop: 8

            }}
            onChangeText={onChangeText}
            value={text}
          />
          <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Mật khẩu mới</Text>
          <TextInput
            style={{
              height: 40,
              borderWidth: 0.5,
              borderRadius: 6,
              borderColor: "#666666",
              paddingHorizontal: 16,
              marginTop: 8

            }}
            onChangeText={onChangeText1}
            value={text1}
          />

          <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Nhập lại mật khẩu mới</Text>
          <TextInput
            style={{
              height: 40,
              borderWidth: 0.5,
              borderRadius: 6,
              borderColor: "#666666",
              paddingHorizontal: 16,
              marginTop: 8

            }}
            onChangeText={onChangeText1}
            value={text1}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32, width: "100%", }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <View style={{ marginTop: 16, backgroundColor: '#9CBD44', height: 44, width: 390, borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>ĐỔI MẬT KHẨU</Text>
            </View>
          </TouchableOpacity>
        </View>
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
export default UpdateAccountScreen; 