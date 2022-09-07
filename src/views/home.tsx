import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {ViewProps} from '../navigators/types/navigation';

function HomeScreen() {
  const navigation = useNavigation<ViewProps['navigation']>(); // Hooks của navigation

  function gotoExample() {
    navigation.navigate('ExampleScreen'); // Sử dụng hooks cảu navigation để di chuyển qua màn hình khác
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom: 20, fontSize: 20, color: 'green'}}>
        Home Screen
      </Text>
      <Button onPress={gotoExample} title="Go to Example Screen" />
    </View>
  );
}

export default HomeScreen;
