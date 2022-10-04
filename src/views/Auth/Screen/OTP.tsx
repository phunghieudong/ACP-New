//@ts-nocheck
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
function OTPScreen() {

  const navigation = useNavigation<ViewProps['navigation']>(); // Hooks của navigation
  // const [text, onChangeText] = React.useState("Email");
  // const [text1, onChangeText1] = React.useState("Mật khẩu");
  // const [number, onChangeNumber] = React.useState(null);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  return (
    // <View style={{
    //   flex: 1,
    //   backgroundColor: '#fff',
    // }}>
    //   <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, alignItems: 'center' }}>

    //     <TouchableOpacity onPress={() => navigation.goBack()}>
    //       <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', }}>
    //         <Image

    //           source={require('../../../assets/images/goback.png')}
    //           style={{ width: 7.17, height: 14 }}
    //         />
    //       </View>
    //     </TouchableOpacity>

    //     <View >
    //       <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>OTP</Text>
    //     </View>
    //     <View style={{ flexDirection: 'row', width: 50 }}>

    //     </View>

    //   </View>


    //   <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
    //     <View style={{ justifyContent: 'center', alignItems: 'center' }}>

    //       <Text style={{ color: '#000000', fontSize: 15, width: 400, textAlign: 'center', marginTop: 30 }}>Vui lòng nhập mã OTP được gửi qua số</Text>
    //       <Text style={{ color: '#2EA0B8', fontSize: 15, width: 400, textAlign: 'center', }}>+0368055154</Text>
    //       <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-between', marginTop: 30 }}>
    //         <View style={{ width: 20, height: 35, backgroundColor: '#999999' }}></View>
    //         <View style={{ width: 20, height: 35, backgroundColor: '#999999' }}></View>
    //         <View style={{ width: 20, height: 35, backgroundColor: '#999999' }}></View>
    //         <View style={{ width: 20, height: 35, backgroundColor: '#999999' }}></View>
    //         <View style={{ width: 20, height: 35, backgroundColor: '#999999' }}></View>
    //       </View>
    //       <Text style={{ color: '#FB8500', fontSize: 20, width: 400, textAlign: 'center', fontWeight: "600", marginTop: 70 }}>XÁC NHẬN TÀI KHOẢN</Text>
    //     </View>
    //     <View>
    //       <View>
    //         <Text style={{ color: '#000000', fontSize: 15, width: 400, textAlign: 'center', marginTop: 30 }}>Bạn không nhận được OTP?</Text>
    //         <Text style={{ color: '#2EA0B8', fontSize: 20, width: 400, textAlign: 'center', fontWeight: '500' }}>GỬI LẠI NGAY 30s</Text>
    //       </View>
    //     </View>

    //     <TouchableOpacity onPress={() => navigation.navigate("SigninScreeen")}>
    //       {/* Chổ này mà xài replace là đá thẳng ra luôn */}
    //       <View style={{ marginTop: 50, borderColor: "#000000", backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
    //         <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>XÁC NHẬN</Text>

    //       </View>
    //     </TouchableOpacity>
    //   </View>

    // </View>
    <View style={styles.container}>
      <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, paddingTop: 25 }}>

        <View style={{ flexDirection: 'row', width: 50 }}>


        </View>

        <View >
          <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Quên mật khẩu</Text>
        </View>

        <View style={{ flexDirection: 'row', height: 10, width: 50 }}>

        </View>

      </View>
      <View style={{ marginHorizontal: 20, marginTop: 32, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
        <Image

          source={require('../../../assets/images/Confirm1.png')}
          style={{ width: 87.69, height: 78.85 }}
        />

        <Text style={{ fontSize: 20, color: '#000000', marginTop: 34, fontWeight: "600", textAlign: 'center' }}>Chúc mừng bạn đã lấy lại mật khẩu thành công !</Text>
        <Text style={{ fontSize: 14, color: '#999999', marginTop: 8, textAlign: 'center' }}> Mật khẩu mới đã được gửi tới Email của bạn , vui lòng kiểm tra !</Text>
        {/* <Text style={{ fontSize: 14, color: '#999999', marginTop: 8 }}></Text> */}

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32, width: "100%", }}>
        <TouchableOpacity onPress={() => navigation.navigate('SigninScreeen')}>
          <View style={{ marginTop: 16, backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>QUAY LẠI TRANG CHỦ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
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
export default OTPScreen;
