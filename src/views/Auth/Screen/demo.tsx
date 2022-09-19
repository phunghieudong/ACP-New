import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appConfig } from './../../../configs';
import { accountApi } from '../../../api/Auth';
import { login } from './../../../store/reducers/UserSlice';
import ErrorText from '../../../components/More/error-text';
import { async } from 'rxjs';
import { isFulfilled } from '@reduxjs/toolkit';

import { ViewProps } from '../../../navigators/types/navigation';

const Demo = () => {
 
  const [userName, setUserName] = useState<string>('monaprovider');
  const [password, setPassword] = useState<string>('mona@123');
  const [errorText, setErrorText] = useState<string>('');

  const FromData = async(data:any) =>{
    console.log('_postData: ', data);
    try {
      const res: any = await accountApi.login(data);
      if (!!res?.token) {
        console.log('LOGIN');
      } else {
        setErrorText(res?.message);
      }
    } catch (error: any) {
      setErrorText(error?.message);
    } 
  }

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
  }
}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder='ten dang nhap'
        value={userName}
        onChangeText={(e: string) => setUserName(e)}
        style={{
          width: '90%',
          height: 40,
          borderRadius: 6,
          paddingHorizontal: 16,
        }}
      />
       <ErrorText content={errorText} />
   
      <TextInput
        placeholder='Mật khẩu'
        value={password}
        onChangeText={(e: string) => setPassword(e)}
        style={{
          width: '90%',
          height: 40,
          borderRadius: 6,
          paddingHorizontal: 16,
        }}
      />

<TouchableOpacity onPress={login}>
        <View style={{ marginTop: 16, borderColor: "#000000", backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>ĐĂNG NHẬP</Text>
        </View>
      </TouchableOpacity>
        
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({})