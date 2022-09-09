import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { ViewProps } from '../../../navigators/types/navigation';

function SplashScreenScreen() {
  const navigation = useNavigation<ViewProps['navigation']>(); // Hooks của navigation
  const [text, onChangeText] = React.useState("Email");
  const [text1, onChangeText1] = React.useState("Mật khẩu");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9CBD44' }}>

      <View>
        <Image

          source={require('../../../assets/images/logo.png')}
          style={{ width: 242.76, height: 110 }}
        />
      </View>
    </View>
  );
}

export default SplashScreenScreen;
