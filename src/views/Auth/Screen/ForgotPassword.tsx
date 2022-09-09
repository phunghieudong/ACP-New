import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { ViewProps } from '../../../navigators/types/navigation';

function ForgotPasswordScreen() {
  const navigation = useNavigation<ViewProps['navigation']>(); // Hooks của navigation
  const [text, onChangeText] = React.useState("Email");
  const [text1, onChangeText1] = React.useState("Mật khẩu");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View>
        <Text>Quên mật khẩu nè </Text>
      </View>
    </View>
  );
}

export default ForgotPasswordScreen;
