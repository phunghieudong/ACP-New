import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { ViewProps } from '../../../navigators/types/navigation';

function SigninScreen() {
  const navigation = useNavigation<ViewProps['navigation']>(); // Hooks của navigation
  const [text, onChangeText] = React.useState("Email");
  const [text1, onChangeText1] = React.useState("Mật khẩu");
  const [number, onChangeNumber] = React.useState(null);

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
        <TextInput
          style={{
            height: 40,
            borderWidth: 0.5,
            borderRadius: 6,
            paddingHorizontal: 16

          }}
          onChangeText={onChangeText}
          value={text}
        />

        <TextInput
          style={{
            height: 40,
            borderWidth: 0.5,
            borderRadius: 6,
            marginTop: 16,
            paddingHorizontal: 16
          }}
          onChangeText={onChangeText1}
          value={text1}
        />
      </View>
      <View style={{ marginTop: 16, width: 343, flexDirection: "row-reverse" }}>
        <TouchableOpacity >
          <Text style={{ color: 'red' }}>Quên mật khẩu</Text>

        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
        <View style={{ marginTop: 16, borderWidth: 1, borderColor: "#000000", backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: "#ffffff" }}>ĐĂNG NHẬP</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SigninScreen;
