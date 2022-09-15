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
function SigninScreen() {

  const navigation = useNavigation<ViewProps['navigation']>(); // Hooks của navigation
  // const [text, onChangeText] = React.useState("Email");
  // const [text1, onChangeText1] = React.useState("Mật khẩu");
  // const [number, onChangeN umber] = React.useState(null);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  // const [password, setPassword] = useState('');


  //=======================================================================
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const handleSubmit = () => {
    var emailValid = false;
    if (email.length == 0) {
      setEmailError("Email không được để trống");
    }
    else if (email.length < 6) {
      setEmailError("Email phải trên 6 kí tự");
    }
    else if (email.indexOf(' ') >= 0) {
      setEmailError('Email không được có khoảng trắng');
    }
    else {
      setEmailError("")
      emailValid = true
    }

    var passwordValid = false;
    if (password.length == 0) {
      setPasswordError("Mật khẩu không được để trống");
    }
    else if (password.length < 6) {
      setPasswordError("Password phải trên 6 kí tự");
    }
    else if (password.indexOf(' ') >= 0) {
      setPasswordError('Password không được có khoảng trắng');
    }
    else {
      setPasswordError("")
      passwordValid = true
    }

    if (emailValid && passwordValid) {
      // alert('Email: ' + email + '\nPassword: ' + password);
      {/* onPress={() => navigation.replace('Auth')} */ }
      navigation.replace('Auth')
      setEmail("");
      setPassword("");
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
            onChangeText={text => setEmail(text)} value={email}


            style={{
              width: '90%',
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,

            }}


          />

        </View>
        {emailError.length > 0 &&
          <Text style={{ color: 'red', marginTop: 6 }}>{emailError}</Text>
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
            onChangeText={text => setPassword(text)} value={password}
            style={{
              width: '90%',
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,

            }}

          // onChangeText={onChangeText1}
          // value={text1}
          />

          <TouchableOpacity>
            <Pressable onPress={handlePasswordVisibility}>
              <FontAwesome name='eye-slash' size={22} color="#232323" />
            </Pressable>
          </TouchableOpacity>
        </View>
        {passwordError.length > 0 &&

          <Text style={{ color: 'red', marginTop: 6 }}>{passwordError}</Text>
        }
      </View>
      <View style={{ marginTop: 16, width: 343, flexDirection: "row-reverse" }}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ color: 'red', fontStyle: 'italic' }}>Quên mật khẩu</Text>

        </TouchableOpacity>
      </View>
      {/* onPress={() => navigation.replace('Auth')} */}
      <TouchableOpacity onPress={handleSubmit}>
        {/* Chổ này mà xài replace là đá thẳng ra luôn */}
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
