

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
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

      <View style={{ backgroundColor: '#A5C63F', width: "100%", height: 92, justifyContent: 'center', alignItems: 'center' }}>
        <Image

          source={require('../../../../assets/images/logo.png')}
          style={{ width: 110, height: 50 }}
        />
      </View>
      <Image

        source={require('../../../../assets/images/home.png')}
        style={{ width: "100%", height: 180 }}
      />

      <View style={{ flexDirection: 'column', marginTop: 30, marginHorizontal: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, color: '#000000', fontWeight: "600" }}>Danh sách phiên đấu thầu</Text>
        <Text style={{ fontSize: 14, color: '#999999', }}>Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s</Text>
      </View>
      <ScrollView>
        <View style={{ marginTop: 24, height: 600, width: '100%', flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('BiddingList')}>
              <View style={{ flexDirection: 'column' }}>
                <Image

                  source={require('../../../../assets/images/image1.png')}
                  style={{ width: 164, height: 100 }}
                />
                <Text>Chào thầu dự án dừa</Text>
                <Text>Bến Tre</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image

                    source={require('../../../../assets/images/clock.png')}
                    style={{ width: 14, height: 14, marginRight: 5 }}
                  />
                  <Text>11/08/2022</Text>
                </View>

              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BiddingList')}>
              <View style={{ flexDirection: 'column' }}>
                <Image

                  source={require('../../../../assets/images/image2.png')}
                  style={{ width: 164, height: 100 }}
                />
                <Text>Chào thầu dự án dừa</Text>
                <Text>Bến Tre</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image

                    source={require('../../../../assets/images/clock.png')}
                    style={{ width: 14, height: 14, marginRight: 5 }}
                  />
                  <Text>11/08/2022</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center', marginTop: 15 }}>
            <TouchableOpacity onPress={() => navigation.navigate('BiddingList')}>
              <View style={{ flexDirection: 'column' }}>
                <Image

                  source={require('../../../../assets/images/image3.png')}
                  style={{ width: 164, height: 100 }}
                />
                <Text>Chào thầu dự án dừa</Text>
                <Text>Bến Tre</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image

                    source={require('../../../../assets/images/clock.png')}
                    style={{ width: 14, height: 14, marginRight: 5 }}
                  />
                  <Text>11/08/2022</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BiddingList')}>
              <View style={{ flexDirection: 'column' }}>
                <Image

                  source={require('../../../../assets/images/image4.png')}
                  style={{ width: 164, height: 100 }}
                />
                <Text>Chào thầu dự án dừa</Text>
                <Text>Bến Tre</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image

                    source={require('../../../../assets/images/clock.png')}
                    style={{ width: 14, height: 14, marginRight: 5 }}
                  />
                  <Text>11/08/2022</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center', marginTop: 15 }}>
            <TouchableOpacity onPress={() => navigation.navigate('BiddingList')}>
              <View style={{ flexDirection: 'column' }}>
                <Image

                  source={require('../../../../assets/images/image1.png')}
                  style={{ width: 164, height: 100 }}
                />
                <Text>Chào thầu dự án dừa</Text>
                <Text>Bến Tre</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image

                    source={require('../../../../assets/images/clock.png')}
                    style={{ width: 14, height: 14, marginRight: 5 }}
                  />
                  <Text>11/08/2022</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BiddingList')}>
              <View style={{ flexDirection: 'column' }}>
                <Image

                  source={require('../../../../assets/images/image4.png')}
                  style={{ width: 164, height: 100 }}
                />
                <Text>Chào thầu dự án dừa</Text>
                <Text>Bến Tre</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image

                    source={require('../../../../assets/images/clock.png')}
                    style={{ width: 14, height: 14, marginRight: 5 }}
                  />
                  <Text>11/08/2022</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    color: '#fff',
    borderRadius: 12,
  },
});
export default HomeScreen; 