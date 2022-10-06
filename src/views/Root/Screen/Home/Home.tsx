
//@ts-nocheck
import React, { useEffect, useState, FC } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Button, Pressable, TextInput, FlatList, } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import Swiper from "react-native-swiper";
import { BottomSheet } from 'react-native-btr';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import { getBiddingSession } from "../../../../api/BiddingSession/index";
import { BiddingSessionProps } from "../../../../navigators/types/Profile";
import { BiddingSessionData } from "../../../../types/BiddingSession";
import { useNavigation } from '@react-navigation/native';
import { LocalStorage } from '../../../../utils/LocalStorage';
import Empty from "../../../../components/Empty/index";
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
const HomeScreen: FC<BiddingSessionProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const _logout = () => {
    LocalStorage.logout();
    navigation.navigate('SigninScreeen')
  }
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
  const handleConvertTime = (data) => {
    // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaa", data);
    let time = Math.round((data * 1000 - new Date().getDate()) / 1000)

    if (time < 0) {
      time = time * -1
    }
    let content = ''
    let days = Math.floor(time / 86400)
    time = time - days * 86400
    let hours = Math.floor(time / 3600)
    time = time - hours * 3600
    let minutes = Math.floor(time / 60)
    time = time - minutes * 60
    let second = Math.floor(time / 60)
    time = time - second * 60
    if (days) content += days + ' ngày'
    if (hours || days) {
      if (days) content += ', '
      content += hours + ' giờ, '
    }
    content += minutes + ' phút'
    // content += minutes + ' giây'
    return (
      <>
        <Text>{content}</Text>
      </>
    )
  }

  const [search, setSearch] = useState<any>('');
  const [data, setData] = useState<BiddingSessionData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    SearchContent();
  }, []);
  console.log("search", search);

  const SearchContent = async () => {
    try {
      const { current, next } = page;
      if (next) {
        const params = { pageIndex: current, pageSize: 20, Status: 1, Name: search };
        const res = await getBiddingSession(params);
        console.log("res ne ban oi", res);
        if (res.ResultCode == 200) {
          setData([...res.Data.Items]);
          // .filter((item) => item.Status == 1)

        }
        if (!ready) setReady(true);
      }
    } catch (error) {

    }

  }


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', backgroundColor: '#A5C63F', width: "100%", height: 92, justifyContent: "space-between", alignItems: 'center', }}>
        <View style={{ backgroundColor: '#A5C63F', width: 30, height: 30 }}>
        </View>
        <Image
          source={require('../../../../assets/images/logo.png')}
          style={{ width: 110, height: 50 }}
        />
        {/* <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../../../../assets/images/find.png')}
            style={{ width: 24, height: 24, marginRight: 16 }}
          />
        </TouchableOpacity> */}
        <View style={{ backgroundColor: '#A5C63F', height: 24, width: 24 }}>

        </View>
      </View>
      <ScrollView>
        <Swiper
          vertical={false} autoplay
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
        <View style={{ flexDirection: 'column', marginTop: 15, marginHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, color: '#000000', fontWeight: "600", }}>Danh sách phiên đấu thầu</Text>
          {/* <TextInput
            style={{
              height: 40,
              borderWidth: 0.5,
              borderRadius: 6,
              paddingHorizontal: 16,
              marginTop: 8,
            }}
            value={search}
            placeholder='search'
            onChangeText={(e: string) => setSearch(e)}
            keyboardType={"ascii-capable"}
            
          />
          
          <TouchableOpacity onPress={SearchContent}>
            <View style={{ backgroundColor: 'green', height: 50, width: 50 }}>
              <Text>Nut</Text>
            </View>
          </TouchableOpacity> */}
          {/* <Text style={{ fontSize: 14, color: '#999999', }}>Dưới đây là danh sách những phiên đấu thầu hiện đang diễn ra , anh chị có thể tham gia đấu các phiên thầu ngay bây giờ.</Text> */}
          <View style={{ justifyContent: "center", alignItems: 'center', }}>
            <View style={{
              backgroundColor: 'white',
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#666666'

            }}>
              <TextInput
                value={search}
                placeholder='Tên phiên đấu thầu'
                onChangeText={(e: string) => setSearch(e)}
                keyboardType={"ascii-capable"}
                style={{
                  width: '90%',
                  height: 40,
                  borderRadius: 6,
                  paddingHorizontal: 16,

                }}

              />
              <TouchableOpacity style={{ marginRight: 10, }} onPress={SearchContent} >

                <FontAwesome name='search' size={18} color="red" />

              </TouchableOpacity>
            </View>


          </View>
        </View>
        {ready && !data.length && (
          // <Empty text="Không tìm thấy bất kì phiên đấu thấu nào" />
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Image
              source={require('../../../../assets/images/empty.png')}
              style={{ width: "50%", height: 200, marginRight: 5 }}
            />
            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: "600", marginTop: 20, borderRadius: 6 }}>Không tìm thấy bất kì phiên đấu thấu nào</Text>
          </View>
        )}
        {ready && (
          <FlatList
            data={data}
            style={styles.body}
            numColumns={2}
            onEndReachedThreshold={0.5}
            keyExtractor={(i) => i.Id.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('BiddingList', { IsBid: item.IsBid, Thumbnail: item.Thumbnail, Name: item.Name, ProductName: item.ProductName, StartDate: item.StartDate, EndDate: item.EndDate, MinimumQuantity: item.MinimumQuantity, MaximumQuantity: item.MaximumQuantity, Id: item.Id, ProductId: item.ProductId })}
              >
                <View style={{ flexDirection: "row", width: "50%", justifyContent: "center", paddingTop: 15, paddingBottom: 5 }}>

                  <View style={{ flexDirection: 'column', }}>
                    <Image
                      source={{ uri: item.Thumbnail }}
                      style={{ alignSelf: "center", width: 150, height: 100, borderRadius: 6 }}
                    />
                    <Text numberOfLines={1} style={{ width: 150, fontSize: 16, fontWeight: "400" }}>{item.Name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "90%", }}>
                      <Image
                        source={require('../../../../assets/images/clock.png')}
                        style={{ width: 14, height: 14, marginRight: 5 }}
                      />
                      {/* <Text>{item.BiddingSessionTimeOut}</Text> */}
                      <Text>{handleConvertTime(item.BiddingSessionTimeOut)}</Text>
                    </View>
                  </View>

                </View>
              </TouchableWithoutFeedback>
            )}
          />
        )}
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
            flexDirection: "row",

          }}>
            <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, color: '#fff' }}>Bộ lọc</Text>
            <TouchableOpacity onPress={toggleModal}>

              <View style={{ height: 30, width: 30, marginRight: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ffffff' }}>
                <Text style={{ fontSize: 20, fontWeight: '900', color: '#fff', }}>x</Text>
              </View>
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
                  borderWidth: 1,
                  borderColor: '#666666'

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
  body: {
    paddingHorizontal: 20,
    backgroundColor: '#fff'

  },
  logo: {
    borderRadius: 100,
    width: 34,
    height: 34,
    marginRight: 8,
    marginTop: 4,
  },
  logotext: {
    textAlign: "center",
    lineHeight: 34,
    color: "#fff",
    fontSize: 14,
    fontFamily: "SFProDisplay-Regular",
  },
  box: {
    backgroundColor: "green",
    borderRadius: 4,
    marginTop: 5,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "55%"

  },
  detail: {
    flex: 1,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(0, 0, 0, .5)",
    fontFamily: "SFProDisplay-Regular",
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "SFProDisplay-Regular",

  },
  img: {
    width: 40,
  },

  icon: {
    fontSize: 18,
    padding: 8,
    left: 8,

  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
export default HomeScreen; 