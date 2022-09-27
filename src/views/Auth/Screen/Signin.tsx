import React, { useState, useEffect, useLayoutEffect, useReducer, useRef, FC } from 'react';
import { View, SafeAreaView, Image, Button, TouchableOpacity, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { appConfig, height, width } from '../../../configs';
import { accountApi } from '../../../api/Auth/index';
import { ViewProps } from '../../../navigators/types/navigation';
import { useKeyboard } from 'green-native-ts';
import ErrorText from '../../../components/More/error-text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorage } from "../../../utils/LocalStorage/index"
import Icon from 'react-native-vector-icons/FontAwesome';
// import { LocalStorage, toast } from '~/utils';
// import {setInformations, setLogin, setToken} from '~/store/reducers/user';

const SigninScreen = () => {
  const [hidePass, setHidePass] = useState(true);
  const keyboard: boolean = useKeyboard(); // true, false
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const backGroundHeight: number = height + insets.top + insets.bottom;
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);

  const [userName, setUserName] = useState<string>('dongph');
  const [password, setPassword] = useState<string>('mona@123');
  const [errorText, setErrorText] = useState<string>('');


  const [tokendemo, setTokenDemo] = useState<any>('');

  // AsyncStorage luu 

  // AsyncStorage lay data

  const login = () => {
    setErrorText('');
    if (!!!userName) {
      setErrorText('Vui lòng nhập tài khoản ');
    } else if (!!!password) {
      setErrorText('Vui lòng nhập mật khẩu');
    } else if (userName != "dongph" && password == "NTqVZ2xU") { // Đoan này đang viết bùa - fix lại
      setErrorText('Mật khẩu hoặc tài khoản đăng nhập sai');
    } else {
      FromData({
        username: userName,
        password: password,
      });

    }
  }

  const FromData = async (data: any) => {
    try {
      const res: any = await accountApi.login(data);

      console.log("res", res);
      console.log("Pass vs Accout", data);

      // storeData(res.Data.token)
      LocalStorage.setToken(res.Data.token);

      if (res.ResultCode === 200) {
        navigation.replace("Auth")
        // handleLogged(res);
      } else {
        setErrorText(res.ResultMessage);
      }
    } catch (error: any) {
      // setErrorText(error?.message);
      // console.log(error);
    }
  }


  // const setToken = AsyncStorage.setItem("TOKEN", tokendemo);
  async function setTToken() {
    try {
      const jsonValue = JSON.stringify(tokendemo); // chuyen dổi
      await AsyncStorage.setItem("TOKEN", jsonValue); // luu token 
      console.log('jsonValue-> Lưu Token', jsonValue);
    } catch (error) { }
  }
  setTToken();

  const getIteamStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("TOKEN"); // lây nhung gì trong cai bo 
      console.log("Lấy token", jsonValue);
    } catch (error) { }
  };
  getIteamStorage();





  // const getData = AsyncStorage.getItem('@storage_Key')
  // console.log(getData);


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
        marginTop: 58,
        // paddingHorizontal:20
      
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
            placeholder='Tài khoản'
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
            secureTextEntry={hidePass ? true : false}
            value={password}
            onChangeText={(e: string) => setPassword(e)}
            style={{
              width: '90%',
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,

            }}
          />
          <Icon
            name={hidePass ? 'eye' : 'eye-slash'}
            size={15}
            color="grey"
            onPress={() => setHidePass(!hidePass)}
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



      {/* <View style={{ backgroundColor: 'green', height: 300, width: 300, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {
          // storeData("sieunhancamap")
          alert("Luu thanh cong")
        }} style={{ backgroundColor: "yellow", height: 100, width: 100 }} >
          <Text style={{ color: '#000000' }}>Luu data</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{ backgroundColor: "yellow", height: 100, width: 100 }}>
          <Text style={{ color: '#000000' }}>lay data</Text>
        </TouchableOpacity>
        {data != null ? <Text> {data}</Text> : null}
      </View> */}
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


