//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Pressable } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import ErrorText from '../../../../components/More/error-text';
import { ChangePassword } from '../../../../api/ChangePassword';

const UpdateAccountScreen = () => {
  const [oldPassword, setoldPassword] = useState<string>('');
  const [newPassword, setnewPassword] = useState<string>('');
  const [confirmNewPassword, setconfirmNewPassword] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');

  const ChangePasswordPut = () => {
    // console.log("phunghieudong", username)
    setErrorText('');
    if (!!!oldPassword) {
      setErrorText('Vui lòng oldPassword ');
    }
    if (!!!newPassword) {
      setErrorText('Vui lòng newPassword ');
    }
    if (!!!setconfirmNewPassword) {
      setErrorText('Vui lòng setconfirmNewPassword ');
    }
    else {
      UserNamePutAPI({
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
        providerId: "e0ea6f06-3184-4bf3-5892-08daa6ad9043"
      });
      // console.log("phunghieudong123", username)
    }
  }


  const UserNamePutAPI = async (data: any) => {
    try {
      const res = await ChangePassword.Password(data);
      console.log("hieudong1", res)
      if (res.data.ResultCode === 200) {
        navigation.navigate("SigninScreeen");
      } else {
        console.log("hieudong2", res)
        // setErrorText(res.ResultMessage);

      }
    } catch (error: any) {
      setErrorText("Mật khẩu cũ không chính xác");
      console.log("hieudong3", res)
      setErrorText(error?.message);
      console.log(error);
    }
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', backgroundColor: '#9CBD44', width: '100%', height: 64, justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../../../../assets/images/goback.png')}
              style={{ width: 7.17, height: 14 }}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Đổi mật khẩu</Text>
        <View style={{ backgroundColor: '#9CBD44', height: 30, width: 30 }}>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ marginHorizontal: 20, marginTop: 32 }}>
          <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Mật khẩu cũ</Text>
          <View style={{
            backgroundColor: 'white',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#999999'
          }}>
            <TextInput
              value={oldPassword}
              placeholder="Mật khẩu cũ"
              onChangeText={(e: string) => setoldPassword(e)}
              style={{
                width: '90%',
                height: 40,
                borderRadius: 6,
                paddingHorizontal: 16,

              }}

            />
          </View>
          <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Mật khẩu mới</Text>
          <View style={{
            backgroundColor: 'white',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#999999'
          }}>
            <TextInput
              value={newPassword}
              placeholder="Mật khẩu mới"
              onChangeText={(e: string) => setnewPassword(e)}
              style={{
                width: '90%',
                height: 40,
                borderRadius: 6,
                paddingHorizontal: 16,

              }}
            />
          </View>

          <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>Nhập lại mật khẩu mới</Text>

          <View style={{
            backgroundColor: 'white',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#999999'
          }}>
            <TextInput
              value={confirmNewPassword}
              placeholder="Xác nhận mật khẩu"
              onChangeText={(e: string) => setconfirmNewPassword(e)}
              style={{
                width: '90%',
                height: 40,
                borderRadius: 6,
                paddingHorizontal: 16,

              }}
            />

          </View>
          <ErrorText content={errorText} />
          <TouchableOpacity onPress={ChangePasswordPut}>
            <View style={{ marginTop: 32, backgroundColor: '#9CBD44', height: 44, width: "100%", borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
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