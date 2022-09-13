

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Button, Pressable, TextInput } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import Swiper from "react-native-swiper";
import { BottomSheet } from 'react-native-btr';
import { FontAwesome } from '@expo/vector-icons';
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
const HomeScreen = ({ navigation }) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

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
      <View style={{ flexDirection: 'row', backgroundColor: '#A5C63F', width: "100%", height: 92, justifyContent: "space-between", alignItems: 'center', }}>
        <View style={{ backgroundColor: '#A5C63F', width: 30, height: 30 }}>
        </View>
        <Image
          source={require('../../../../assets/images/logo.png')}
          style={{ width: 110, height: 50 }}
        />
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../../../../assets/images/find.png')}
            style={{ width: 24, height: 24, marginRight: 16 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Swiper
          showsButtons={false}
          height={160}
          containerStyle={{ flex: 0 }}
          activeDotColor={"#E7312F"}
          dotColor="rgba(0, 0, 0, .2)"
          paginationStyle={{
            bottom: 8,
          }}
        >
          <Image

            source={require('../../../../assets/images/home.png')}
            style={{ width: "100%", height: 180 }}
          />
          <Image
            source={require('../../../../assets/images/home.png')}
            style={{ width: "100%", height: 180 }}
          />
          <Image
            source={require('../../../../assets/images/home.png')}
            style={{ width: "100%", height: 180 }}
          />
        </Swiper>
        <View style={{ flexDirection: 'column', marginTop: 30, marginHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, color: '#000000', fontWeight: "600" }}>Danh sách phiên đấu thầu</Text>
          <Text style={{ fontSize: 14, color: '#999999', }}>Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s</Text>
        </View>

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
      <BottomSheet
        visible={isModalVisible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          flexDirection: 'column'
        }}>
          <View style={{
            backgroundColor: "#9CBD44",
            width: '100%',
            height: 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row"
          }}>
            <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, color: '#fff' }}>Bộ lọc</Text>
            <TouchableOpacity onPress={toggleModal}>


              <Text style={{ fontSize: 20, fontWeight: '900', color: '#fff', marginRight: 20 }}>x</Text>

            </TouchableOpacity>

          </View>
          <View style={{ backgroundColor: "#fff", width: '100%', height: 180, alignItems: 'center', marginVertical: 20 }}>
            <View>
              <View style={{ justifyContent: "center", alignItems: 'center', marginBottom: 80 }}>
                <View style={{
                  backgroundColor: 'white',
                  width: '90%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 10,
                  marginTop: 16,
                  borderRadius: 6,
                }}>
                  <TextInput
                    placeholder='Tên phiên đấu thầu'
                    autoCorrect={false}
                    secureTextEntry={false}
                    textContentType='username'
                    style={{
                      width: '90%',
                      height: 40,
                      borderRadius: 6,
                      paddingHorizontal: 16,

                    }}
                  // onChangeText={onChangeText1}
                  // value={text1}
                  />
                  <TouchableOpacity style={{ marginRight: 10 }}>
                    <Pressable onPress={handlePasswordVisibility}>
                      <FontAwesome name='search' size={18} color="#232323" />
                    </Pressable>
                  </TouchableOpacity>
                </View>
                <View style={{
                  backgroundColor: 'white',
                  width: '90%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 10,
                  marginTop: 16,
                  borderRadius: 6,
                }}>
                  <TextInput
                    placeholder='Ngày đấu thầu'
                    autoCorrect={false}
                    secureTextEntry={false}
                    textContentType='username'
                    style={{
                      width: '90%',
                      height: 40,
                      borderRadius: 6,
                      paddingHorizontal: 16,
                    }}
                  // onChangeText={onChangeText1}
                  // value={text1}
                  />
                  <TouchableOpacity style={{ marginRight: 10 }}>
                    <Pressable onPress={handlePasswordVisibility}>
                      <FontAwesome name='calendar' size={18} color="#232323" />
                    </Pressable>
                  </TouchableOpacity>
                </View>
                {/* <View style={{ backgroundColor: "#9CBD44", width: "100%", height: 20, flexDirection:"row", borderRadius:6 , alignItems:"flex-start"}}>
                <Text>XÁC NHẬN</Text>
              </View> */}
                <View style={{
                  backgroundColor: '#9CBD44',
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                  marginTop: 16,
                  borderRadius: 6,
                }}>
                  <TouchableOpacity onPress={toggleModal}>
                    <View style={{ backgroundColor: "#9CBD44", width: "100%", height: 40, flexDirection: "row", borderRadius: 6, alignItems: "center", justifyContent: 'center' }}>
                      <Text style={{ color: '#fff', fontWeight: '600', }}>ÁP DỤNG</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </View>
      </BottomSheet>
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