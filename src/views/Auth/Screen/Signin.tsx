import React, { useState, useEffect, useLayoutEffect, useReducer, useRef, FC } from 'react';
import { View, SafeAreaView, Image, Button, TouchableOpacity, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { appConfig, height, width } from '../../../configs';
import PrimaryButton from '../../../components/PrimaryButton/index';
import PrimaryInput from '../../../components/PrimaryInput/index';
import { accountApi } from '../../../api/Auth/index';
import { ViewProps } from '../../../navigators/types/navigation';
import { useKeyboard } from 'green-native-ts';
import ErrorText from '../../../components/More/error-text';
// import { LocalStorage, toast } from '~/utils';
// import {setInformations, setLogin, setToken} from '~/store/reducers/user';

const SigninScreen = () => {
  const keyboard: boolean = useKeyboard(); // true, false
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<ViewProps['navigation']>();
  const insets = useSafeAreaInsets();
  const backGroundHeight: number = height + insets.top + insets.bottom;
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user); 

  const [userName, setUserName] = useState<string>('monaprovider');
  const [password, setPassword] = useState<string>('mona@123');
  const [errorText, setErrorText] = useState<string>('');


  const login = () =>{
    setErrorText('');
    if (!!!userName) {
      setErrorText('Vui lòng nhập email ');
    } else if (!!!password) {
      setErrorText('Vui lòng nhập mật khẩu');
    } else {
      FromData({
        username: userName,
        password: password,
      }); 
      navigation.navigate("Auth")
  }
}

const FromData = async(data:any) =>{
  console.log('postData: ', data);
  try {
    const res: any = await accountApi.login(data);
    console.log(res);
    if (!!res?.token) {
      console.log('LOGIN');
      // handleLogged(res);
    } else {
      setErrorText(res?.message);
    }
  } catch (error: any) {
    setErrorText(error?.message);
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
            value={userName}
            placeholder='Email'
            autoCorrect={false}
            secureTextEntry={false}
            textContentType='emailAddress'
            onChangeText={(e: string) => setUserName(e)}
            style={{
              width: '90%',
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,
            }}
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

            placeholder='Mật khẩu'
            autoCorrect={false}
            secureTextEntry={false}
            textContentType="username"
            value={password}
            onChangeText={(e: string) => setPassword(e)}
            style={{
              width: '90%',
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,

            }}
          />
          {/* <TouchableOpacity>
            <Pressable onPress={handlePasswordVisibility}>
              <FontAwesome name='eye-slash' size={22} color="#232323" />
            </Pressable>
          </TouchableOpacity> */}
        </View>

      </View>


      {/* <PrimaryButton onPress={_login} title="Đăng nhập" loading={loading} /> */}

      <View style={{ marginTop: 16, width: 343, flexDirection: "row-reverse" }}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ color: 'red', fontStyle: 'italic' }}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={login}>
        <View style={{ marginTop: 16, borderColor: "#000000", backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>ĐĂNG NHẬP</Text>
        </View>
      </TouchableOpacity>
      <ErrorText content={errorText} />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backMain: {

    width: '100%',
    paddingHorizontal: 37,
    borderTopRightRadius: 12,
    borderTopStartRadius: 12,
    alignItems: 'center',
    height: "100%"
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    color: '#000',

    fontSize: 32,
  },
  subTitle: {
    color: '#959595',

    fontSize: 16,
    marginTop: 16,
    marginBottom: 36,
  },
  wPassword: {
    marginTop: 24,
    marginBottom: 32,
    width: '100%',
  },
  register: {

    fontSize: 16,
    color: "green",
    marginVertical: 32,
  },
  btnRegister: {

    fontSize: 16,
    color: "green",
    marginVertical: 32,
  },
  forgot: {

    fontSize: 16,
    color: "green",
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
});


