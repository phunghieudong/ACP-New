//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Pressable } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility
  };
};

const UpdateAccountScreen = () => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
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
              placeholder=''
              autoCorrect={false}
              secureTextEntry={hidePass ? true : false}
              textContentType='username'
              style={{
                width: '90%',
                height: 40,
                borderRadius: 6,
                paddingHorizontal: 16,

              }}

            // onChangeText={onChangeText1}
            // value={text1}
            />
            <Icon
              name={hidePass ? 'eye' : 'eye-slash'}
              size={15}
              color="grey"
              onPress={() => setHidePass(!hidePass)}
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
              placeholder=''
              autoCorrect={false}
              secureTextEntry={hidePass1 ? true : false}
              textContentType='username'
              style={{
                width: '90%',
                height: 40,
                borderRadius: 6,
                paddingHorizontal: 16,

              }}

            // onChangeText={onChangeText1}
            // value={text1}
            />
            <Icon
              name={hidePass1 ? 'eye' : 'eye-slash'}
              size={15}
              color="grey"
              onPress={() => setHidePass1(!hidePass1)}
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
              placeholder=''
              autoCorrect={false}
              secureTextEntry={hidePass2 ? true : false}
              textContentType='username'
              style={{
                width: '90%',
                height: 40,
                borderRadius: 6,
                paddingHorizontal: 16,

              }}

            // onChangeText={onChangeText1}
            // value={text1}
            />
            <Icon
              name={hidePass2 ? 'eye' : 'eye-slash'}
              size={15}
              color="grey"
              onPress={() => setHidePass2(!hidePass2)}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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