

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const [leftNumber, setLeftNumber] = useState<number>();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {

    setLeftNumber(69);
  }, []);

  const callApi = () => {


    const newUser: IUser = {
      ID: '1',
      Phone: '1',
      FullName: '1',
      Role: 'dev',
      Status: 'active',
    };

    return newUser;
  };

  const getUser = async () => {
    try {
      const response = await callApi();
      if (!!response) {
        setUser(response);
      }
    } catch (error) {
      console.log('getUser: ', error);
    }


  };

  return (
    <View style={styles.container}>

      <Text
        onPress={getUser}
        style={[
          styles.text,
          {

            backgroundColor: leftNumber == 69 ? 'green' : 'red',
          },
        ]}>
        Phùng Hiểu Đông cuteadsdád
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    color: '#fff',
    borderRadius: 12,
  },
});
