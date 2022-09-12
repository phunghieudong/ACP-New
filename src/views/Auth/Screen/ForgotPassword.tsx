import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput, StyleSheet, Pressable } from 'react-native';
import { ViewProps } from '../../../navigators/types/navigation';
import { FontAwesome } from '@expo/vector-icons';


// import { useTogglePasswordVisibility } from './hooks/useTogglePasswordVisibility';

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
function ForgotPasswordScreen() {

  const navigation = useNavigation<ViewProps['navigation']>(); // Hooks của navigation
  // const [text, onChangeText] = React.useState("Email");
  // const [text1, onChangeText1] = React.useState("Mật khẩu");
  // const [number, onChangeNumber] = React.useState(null);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, alignItems: 'center' }}>

        <View style={{ flexDirection: 'row', width: 50 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image

              source={require('../../../assets/images/goback.png')}
              style={{ width: 7.17, height: 14 }}
            />

          </TouchableOpacity>

        </View>

        <View >
          <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Quên mật khẩu</Text>
        </View>
        <View style={{ flexDirection: 'row', width: 50 }}>

        </View>

      </View>


      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 36, fontWeight: '600', marginTop: 15 }}>Quên mật khẩu</Text>
          <Text style={{ color: '#666666', fontSize: 15, width: 400, textAlign: 'center', marginTop: 30 }}>Vui lòng nhập mã email hoặc số điện thoại. Chúng
            tôi sẽ gửi bạn thông tin để tạo lại mật khẩu</Text>
        </View>
        <View style={{
          width: 343,
          marginTop: 58,


        }}>
          <View style={{
            backgroundColor: 'white',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 10,
            borderRadius: 6,
          }}>
            <TextInput
              placeholder='Email'
              autoCorrect={false}
              secureTextEntry={false}
              textContentType='emailAddress'
              style={{
                width: '90%',
                height: 40,
                borderRadius: 6,
                paddingHorizontal: 16,

              }}

            // onChangeText={onChangeText1}
            // value={text1}
            />

          </View>
          <View style={{
            backgroundColor: 'white',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 10,
            marginTop: 16,
            borderRadius: 6,
          }}>
            <TextInput
              placeholder='Số điện thoại'
              autoCorrect={false}
              secureTextEntry={false}
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

          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
          {/* Chổ này mà xài replace là đá thẳng ra luôn */}
          <View style={{ marginTop: 50, borderColor: "#000000", backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>XÁC NHẬN</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({


  inputContainer: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#d7d7d7'
  },
  inputField: {
    padding: 14,
    fontSize: 22,
    width: '90%'
  }
})
export default ForgotPasswordScreen;
