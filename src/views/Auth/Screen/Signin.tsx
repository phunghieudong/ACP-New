import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput, StyleSheet, Pressable } from 'react-native';
import { ViewProps } from '../../../navigators/types/navigation';
import { FontAwesome } from '@expo/vector-icons';
import { SignInProps } from "../../../navigators/types/Auth";

import { SignInData } from "../../../types/Auth";
import { accountApi } from '../../../api/Auth';

import { settings } from './../../../configs';
//Creat eye
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
    handlePasswordVisibility
  };
};


function SigninScreen() {


  var formdata = new FormData();
  formdata.append("Username", "dongcute");
  formdata.append("Password", "9k1yMd0U");

  var requestOptions: any = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://api-acp.monamedia.net/api/authenticate/mobile-login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


  const navigation = useNavigation<ViewProps['navigation']>(); // Hooks của navigation

  const { handlePasswordVisibility } =
    useTogglePasswordVisibility();
  // Ràng buộc user
  const [email1, setEmail1] = useState("")
  const [emailError1, setEmailError1] = useState("")
  const [passwordError1, setPasswordError1] = useState("")
  const [password1, setPassword1] = useState("")
  const handleSubmit = () => {
    var emailValid = false;
    if (email1.length == 0) {
      setEmailError1("Email không được để trống");
    }
    else if (email1.length < 6) {
      setEmailError1("Email phải trên 6 kí tự");
    }
    else if (email1.indexOf(' ') >= 0) {
      setEmailError1('Email không được có khoảng trắng');
    }
    else {
      setEmailError1("")
      emailValid = true
    }

    var passwordValid = false;
    if (password1.length == 0) {
      setPasswordError1("Mật khẩu không được để trống");
    }
    else if (password1.length < 6) {
      setPasswordError1("Password phải trên 6 kí tự");
    }
    else if (password1.indexOf(' ') >= 0) {
      setPasswordError1('Password không được có khoảng trắng');
    }
    else {
      setPasswordError1("")
      passwordValid = true
    }

    if (emailValid && passwordValid) {
      // alert('Email: ' + email + '\nPassword: ' + password);
      {/* onPress={() => navigation.replace('Auth')} */ }
      navigation.replace('Auth')
      setEmail1("");
      setPassword1("");
    }

  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{ width: 154.49, height: 70 }}
        />
      </View>
      <View style={{
        width: 343,
        marginTop: 58
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
            onChangeText={text => setEmail1(text)} value={email1}
            style={{
              width: '90%',
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,
            }}
          />
        </View>
        {emailError1.length > 0 &&
          <Text style={{ color: 'red', marginTop: 6 }}>{emailError1}</Text>
        }
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
            placeholder='Mật khẩu'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='username'
            onChangeText={text => setPassword1(text)} value={password1}
            style={{
              width: '90%',
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,

            }}
          />
          <TouchableOpacity>
            <Pressable onPress={handlePasswordVisibility}>
              <FontAwesome name='eye-slash' size={22} color="#232323" />
            </Pressable>
          </TouchableOpacity>
        </View>
        {passwordError1.length > 0 &&
          <Text style={{ color: 'red', marginTop: 6 }}>{passwordError1}</Text>
        }
      </View>
      <View style={{ marginTop: 16, width: 343, flexDirection: "row-reverse" }}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ color: 'red', fontStyle: 'italic' }}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <View style={{ marginTop: 16, borderColor: "#000000", backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>ĐĂNG NHẬP</Text>
        </View>
      </TouchableOpacity>
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
export default SigninScreen;


